const { blogPostService } = require('../services');

const getAllBlogPostController = async (req, res) => {
  const { type, message } = await blogPostService.getBlogPostAllService();

  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAllBlogPostController,
};