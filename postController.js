const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({ userId: req.user.id, content: req.body.content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
