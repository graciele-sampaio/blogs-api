const { categoryService } = require('../services');

const createCategoryController = async (req, res) => {
  const { type, message } = await categoryService.createCategoryService(req.body);

  if (type) return res.status(400).json({ message });
 return res.status(201).json(message);
};

module.exports = {
  createCategoryController,
};