import express from 'express'
import PostsController from '../src/controller/PostsController.js'

const router = express.Router()

//[GET] "/"
router.get('/', PostsController.getPosts)

//[POST] "/"
router.post('/', PostsController.createPost)

//[PUT] "/"
router.put('/', PostsController.updatePost)

//[DELETE] "/"
router.delete('/', PostsController.deletePost)

export default router