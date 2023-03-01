import { connectMongo } from "@/lib/mongodbConnect";
import Post from "@/models/Post";

export default async function handler(req, res) {
  if (req.method === "GET" && !req.query.id) {
    // Endpoint für alle Posts
    try {
      await connectMongo();
      const posts = await Post.find({});
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    // Endpoint für einen neuen Post
    try {
      await connectMongo();
      const { name, description } = req.body;
      const post = new Post({ name, description });
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET" && req.query.id) {
    // Endpoint für einen einzelnen Post
    try {
      await connectMongo();
      const post = await Post.findById(req.query.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PUT" && req.query.id) {
    // Endpoint zum Bearbeiten eines einzelnen Posts
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
  } else if (req.method === "DELETE" && req.query.id) {
    // Endpoint zum Löschen eines einzelnen Posts
    try {
      await connectMongo();
      await Post.findByIdAndDelete(req.query.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Methode nicht erlaubt" });
  }
}
