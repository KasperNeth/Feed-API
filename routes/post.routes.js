const Router = require('express').Router
const PostController = require('../controllers/post.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const route = Router()

route.post('/', AuthMiddleware.ValidateToken, PostController.CreatePost);
route.get('/:postId', AuthMiddleware.ValidateToken, PostController.GetPost);
route.get('/', AuthMiddleware.ValidateToken, PostController.GetAllPost);
route.patch('/:postId', AuthMiddleware.ValidateToken, PostController.UpdatePost);
route.delete('/:postId', AuthMiddleware.ValidateToken, PostController.DeletePost);

module.exports = route