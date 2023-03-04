// Importiere das mongoose-Modul und weise es der Variablen 'mongoose' zu.
import mongoose from "mongoose";
// Importiere das bcryptjs-Modul und weise es der Variablen 'bcrypt' zu.
import bcrypt from "bcryptjs";

// Erstelle ein neues mongoose-Schema namens 'userSchema'.
const userSchema = new mongoose.Schema({
  // Das Schema hat ein Feld namens 'name' mit dem Datentyp String.
  name: String,
  // Das Schema hat ein Feld namens 'email' mit dem Datentyp String.
  email: String,
  // Das Schema hat ein Feld namens 'password' mit dem Datentyp String.
  password: String,
});

// Definiere eine 'pre'-Methode des Schemas, die ausgeführt wird, bevor ein neues Dokument im MongoDB gespeichert wird.
userSchema.pre("save", async function (next) {
  // Überprüfe, ob das Passwort des Dokuments geändert wurde.
  if (!this.isModified("password")) {
    // Wenn nicht, rufe 'next' auf, um den Speicherprozess fortzusetzen.
    next();
  }

  // Wenn das Passwort geändert wurde, hashe das Passwort mit bcrypt mit einem Salt-Wert von 10.
  this.password = await bcrypt.hash(this.password, 10);
});

// Exportiere das 'User'-Modell, wenn es bereits existiert, oder erstelle es neu und exportiere es.
export default mongoose.models.User || mongoose.model("User", userSchema);
