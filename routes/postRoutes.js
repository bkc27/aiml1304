const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createPost, getAllPost, getSinglePost, updatePost, deletePost } = require("../controllers/postController");

router.post("/", protect, createPost);
router.get("/", getAllPost);
router.get("/:id", getSinglePost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;