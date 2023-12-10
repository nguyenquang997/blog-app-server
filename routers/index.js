import posts from './posts.js'

function routes(app) {
    app.use('/', posts)
}

export default routes