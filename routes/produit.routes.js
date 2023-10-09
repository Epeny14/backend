const express = require('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost, getProductById } = require('../controllers/produit.controller');
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getProductById);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-produit/:id", likePost);
router.patch("/dislike-produit/:id", dislikePost);

module.exports = router;