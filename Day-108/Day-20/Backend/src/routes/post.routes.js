const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const identifyUser = require('../middleware/auth.middleware')

/**
 * @routes POST api/posts [protected]
 * @description Creating a post with the content and image (optional) provided
 */
/** /api/posts */

postRouter.post(
  '/',
  upload.single('image'),
  identifyUser,
  postController.createPostController
);

/**
 * @routes GET /api/posts/ [protected]
 * @description Get all the posts created by the logged in user
 */
postRouter.get(
  '/', 
  identifyUser,
  postController.getPostController);



/**
 * @routes GET api/posts/details/:postid
 * 
 * @description return detail about specific post with the id. Also check whether the post belongs to the user that the request come from
 */
postRouter.get(
  '/details/:postId', 
  identifyUser,
  postController.getPostDetailsController);


  /**
   * @routes POST api/posts/loke/:postid
   * @description like a post with the id provided in the request params.
   */
  postRouter.post('/like/:postId', identifyUser, postController.likePostController)





module.exports = postRouter;
