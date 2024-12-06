const express = require("express");
const { createPost, getPosts, getPostById, deletePost } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getPosts).post(protect, createPost);
router.route("/:id").get(getPostById).delete(protect, deletePost);

module.exports = router;
