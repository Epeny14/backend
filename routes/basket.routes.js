const express = require('express');
const { getPost, setPost, editPost, deletePost, likePost, dislikePost, getProductById } = require('../controllers/basket.controller');

const router = express.Router();

router.get("/", getPost);
router.get("/:id", getProductById);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-produit/:id", likePost);
router.patch("/dislike-produit/:id", dislikePost);

module.exports = router;