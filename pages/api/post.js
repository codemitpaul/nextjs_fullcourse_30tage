// Import der Funktion `connectMongo` aus dem Modul `mongodbConnect`
import { connectMongo } from "@/lib/mongodbConnect";
// Import des Models `Post` aus dem Modul `Post`
import Post from "@/models/Post";

// Definition des Handlers, der auf HTTP-Anfragen reagiert
export default async function handler(req, res) {
  // Überprüfung, ob die HTTP-Methode "GET" ist und ob keine ID in der Abfrage enthalten ist
  if (req.method === "GET" && !req.query.id) {
    try {
      // Verbindung mit der MongoDB-Datenbank herstellen
      await connectMongo();
      // Alle Posts aus der Datenbank abrufen
      const posts = await Post.find({});
      // HTTP-Statuscode 200 und die abgerufenen Posts im JSON-Format zurückgeben
      res.status(200).json(posts);
    } catch (error) {
      // Bei einem Fehler HTTP-Statuscode 500 und die Fehlermeldung zurückgeben
      res.status(500).json({ error: error.message });
    }
  }
  // Überprüfung, ob die HTTP-Methode "POST" ist
  else if (req.method === "POST") {
    try {
      // Verbindung mit der MongoDB-Datenbank herstellen
      await connectMongo();
      // Name und Beschreibung des neuen Posts aus dem Request-Body auslesen
      const { name, description } = req.body;
      // Neuen Post erstellen
      const post = new Post({ name, description });
      // Neuen Post in der Datenbank speichern
      const savedPost = await post.save();
      // HTTP-Statuscode 201 und den gespeicherten Post im JSON-Format zurückgeben
      res.status(201).json(savedPost);
    } catch (error) {
      // Bei einem Fehler HTTP-Statuscode 500 und die Fehlermeldung zurückgeben
      res.status(500).json({ error: error.message });
    }
  }
  // Überprüfung, ob die HTTP-Methode "GET" ist und ob eine ID in der Abfrage enthalten ist
  else if (req.method === "GET" && req.query.id) {
    try {
      // Verbindung mit der MongoDB-Datenbank herstellen
      await connectMongo();
      // Post mit der angegebenen ID aus der Datenbank abrufen
      const post = await Post.findById(req.query.id);
      // HTTP-Statuscode 200 und den abgerufenen Post im JSON-Format zurückgeben
      res.status(200).json(post);
    } catch (error) {
      // Bei einem Fehler HTTP-Statuscode 500 und die Fehlermeldung zurückgeben
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PUT" && req.query.id) {
    try {
      await connectMongo();
      const { name, description } = req.body;
      const post = await Post.findById(req.query.id);
      post.name = name;
      post.description = description;
      const savedPost = await post.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  // Überprüfung, ob die HTTP-Methode "DELETE" ist und ob eine ID in der Abfrage enthalten ist
  else if (req.method === "DELETE" && req.query.id) {
    try {
      await connectMongo();
      // Post mit der angegebenen ID aus der Datenbank löschen
      await Post.findByIdAndDelete(req.query.id);
      // HTTP-Statuscode 204 zurückgeben, um anzuzeigen, dass die Ressource erfolgreich gelöscht wurde
      res.status(204).end();
    } catch (error) {
      // Bei einem Fehler HTTP-Statuscode 500 und die Fehlermeldung zurückgeben
      res.status(500).json({ error: error.message });
    }
  }
  // Wenn die Anfrage nicht den erwarteten Bedingungen entspricht, HTTP-Statuscode 405 und Fehlermeldung zurückgeben
  else {
    res.status(405).json({ error: "Methode nicht erlaubt" });
  }
}
