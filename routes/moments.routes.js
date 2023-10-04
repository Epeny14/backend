const express = require('express');
const { getPost, setPost, editPost, deletePosts, likePosts, dislikePosts } = require('../controllers/moment.controller');
const router = express.Router();

router.get("/", getPost);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePosts);
router.patch("/like-produit/:id", likePosts);
router.patch("/dislike-produit/:id", dislikePosts);

module.exports = router;