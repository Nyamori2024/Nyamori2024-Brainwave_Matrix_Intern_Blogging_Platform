const Post = require("../models/Post");

// Create a Post
const createPost = async (req, res) => {
    const { title, content } = req.body;

    try {
        const post = await Post.create({
            title,
            content,
            author: req.user, // Comes from `authMiddleware`
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "username email");
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Single Post
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("author", "username email");

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post) {
            if (post.author.toString() !== req.user) {
                return res.status(401).json({ message: "Not authorized" });
            }

            await post.remove();
            res.json({ message: "Post removed" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getPosts, getPostById, deletePost };
