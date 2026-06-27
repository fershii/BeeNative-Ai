from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import json, io, base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Cargar metadata ──────────────────────────────────────
with open("best_model_mobilenet_v2_metadata.json") as f:
    metadata = json.load(f)

CLASS_NAMES = metadata["class_names"]
IMG_SIZE    = metadata["img_size"]
NUM_CLASSES = metadata["num_classes"]

CLASS_DISPLAY_NAMES = {
    "TFCD": "Trigona ferricauda",
    "TFVT": "Trigona fulviventris",
    "TCV":  "Trigona corvina",
    "TTP":  "Tetragona perangulata",
    "TTA":  "Tetragonisca angustula",
    "SCP":  "Scaptotrigona pectoralis",
    "NTP":  "Nannotrigona perilampoides",
    "PTB":  "Partamona bilineata",
}


# ── Cargar modelo ────────────────────────────────────────
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = models.mobilenet_v2(weights=None)
model.classifier[1] = nn.Linear(
    model.classifier[1].in_features,
    NUM_CLASSES
)
model.load_state_dict(
    torch.load("best_model_mobilenet_v2.pth", map_location=device)
)
model.to(device)
model.eval()

print(f"Modelo cargado | Clases: {CLASS_NAMES}")

# ── Transform ────────────────────────────────────────────
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225]),
])

# ── Schema ───────────────────────────────────────────────
class ImageRequest(BaseModel):
    image: str  # base64

# ── Endpoints ────────────────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok", "classes": CLASS_NAMES}

@app.post("/predict")
def predict(body: ImageRequest):
    try:
        image  = Image.open(
            io.BytesIO(base64.b64decode(body.image))
        ).convert("RGB")
        tensor = transform(image).unsqueeze(0).to(device)

        with torch.no_grad():
            probs = torch.softmax(model(tensor), dim=1)[0]
            idx   = probs.argmax().item()


        return {
    "prediction":     CLASS_DISPLAY_NAMES.get(CLASS_NAMES[idx], CLASS_NAMES[idx]),
    "code":           CLASS_NAMES[idx],
    "confidence":     round(float(probs[idx]) * 100, 2),
    "probabilities":  {
        CLASS_DISPLAY_NAMES.get(c, c): round(float(p) * 100, 2)
        for c, p in zip(CLASS_NAMES, probs)
    }
}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))