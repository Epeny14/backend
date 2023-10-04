const express = require('express');
const { getPost, setPost, editPost, deletePost, likePost, dislikePost } = require('../controllers/article.controller');

const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-produit/:id", likePost);
router.patch("/dislike-produit/:id", dislikePost);

module.exports = router;