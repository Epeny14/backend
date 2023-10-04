const PostModel = require("../models/moment.model");

module.exports.getPost = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
}

module.exports.setPost = async (req, res) => {
    if (!req.body.message) {
        res.status(400).json({ message: "Merci d'ajouter un message" })
    }

    const post = await PostModel.create({
        nom: req.body.nom,
        prix: req.body.prix,
        url: req.body.url,
        description: req.body.description,
        message: req.body.message
    })
    res.status(200).json(post);
}

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
        res.status(400).json({ message: "Ce produit n'existe pas" });
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        { new: true }
    )
    res.status(200).json(updatePost);
};

module.exports.deletePosts = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
        res.status(400).json({ message: "Ce produit n'existe pas" });
    }

    await post.deleteOne();
    res.status(200).json("Le produit à été supprimé " + req.params.id);

};

module.exports.likePosts = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.dislikePosts = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.userId } },
            { new: true }
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};