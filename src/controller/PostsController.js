import { PostModels } from "../models/PostsModels.js"

const getPosts = async (req, res) => {
    try {
        const posts = await PostModels.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = req.body
        const post = new PostModels(newPost)
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

const updatePost = async (req, res) => {
    try {
        const updatePost = req.body
        const post = await PostModels.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}


export default { getPosts, createPost, updatePost }