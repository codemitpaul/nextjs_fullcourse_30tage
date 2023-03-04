// Importiere das mongoose-Modul und weise es der Variablen 'mongoose' zu.
import mongoose from "mongoose";

// Definiere eine Funktion namens 'dbConnect'.
const dbConnect = () => {
  // Gib eine Nachricht aus, dass die Verbindung zur MongoDB hergestellt wurde.
  console.log("MongoDB verbunden");
  // Überprüfe, ob bereits eine Verbindung zur MongoDB besteht.
  if (mongoose.connection.readyState >= 1) return;

  // Stelle eine Verbindung zur MongoDB mithilfe der 'MONGO_URL'-Umgebungsvariable her.
  mongoose.connect(process.env.MONGO_URL);
};

// Exportiere die 'dbConnect'-Funktion als Standardexport.
export default dbConnect;
