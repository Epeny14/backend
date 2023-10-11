const express = require('express');
const { getPosts, getProductById, setPosts, editPost, deletePost, likePost, dislikePost } = require('../controllers/nike.controller');

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getProductById);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-produit/:id", likePost);
router.patch("/dislike-produit/:id", dislikePost);

module.exports = router;