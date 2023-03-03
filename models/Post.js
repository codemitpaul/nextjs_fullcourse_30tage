// Importieren der Mongoose-Bibliothek
import mongoose from "mongoose";

// Definition des Post-Schemas mit zwei Feldern: Name (String, erforderlich) und Beschreibung (String, optional)
const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  // Optionales Konfigurationsobjekt, das die automatische Generierung von Zeitstempeln ermöglicht
  { timestamps: true }
);

// Exportieren des Modells mit dem Namen "Post". Wenn das Modell bereits existiert, wird es verwendet, andernfalls wird es erstellt.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
