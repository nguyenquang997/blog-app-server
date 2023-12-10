import express from 'express'
import PostsController from '../src/controller/PostsController.js'

const router = express.Router()

//[GET] "/"
router.get('/', PostsController.getPosts)

//[POST] "/"
router.post('/', PostsController.createPost)

//[POST] "/"
router.put('/', PostsController.updatePost)

export default router