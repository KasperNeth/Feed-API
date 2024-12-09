const PostService = require('../services/post.service');

const CreatePost = async (req, res) => {
    const payload = req.body;
    const user = req.user;

    const serviceResponse = await PostService.CreatePost({
        text: payload.text, 
        user
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}

const GetPost = async (req, res) => {
    // /post/:postId
    // req.params.postId
    const postId = req.params.postId

    const serviceResponse = await PostService.GetPost({
        postId 
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const GetAllPost = async (req, res) => {

    const serviceResponse = await PostService.GetAllPost();

    return res.status(serviceResponse.code).json(serviceResponse);
}

const UpdatePost = async (req, res) => {
    const postId = req.params.postId
    const user = req.user;
    const text = req.body.text;

    const serviceResponse = await PostService.UpdatePost({
        postId,
        user,
        text,
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const DeletePost = async (req, res) => {
    const postId = req.params.postId
    const user = req.user;

    const serviceResponse = await PostService.DeletePost({
        postId,
        user
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}

module.exports = {
    GetAllPost,
    GetPost,
    DeletePost,
    CreatePost,
    UpdatePost,
}