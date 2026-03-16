const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST api/posts [protected]
 * req.body = { caption, image-file }
 */
/** /api/posts */

postRouter.post(
  '/',
  upload.single('image'),
  postController.createPostController
);

/**
 * GET /api/posts/ [protected]
 */
postRouter.get('/', postController.getPostController);



/**
 * GET api/posts/details/:postid
 * - return detail about specific post with the id. Also check whether the post belongs to the user that the request come from
 */
postRouter.get('/details/:postId', postController.getPostDetailsController);





module.exports = postRouter;
