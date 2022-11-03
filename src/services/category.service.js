const { Category } = require('../models');

const createCategoryService = async ({ name }) => {
  if (!name) {
    return { type: 400, message: '"name" is required' };
  }
  const newCategory = await Category.create({ name });
  return { type: null, message: newCategory };
};

const getAllCategoriesService = async () => {
  const getAll = await Category.findAll();
  return getAll;
};

module.exports = {
  createCategoryService,
  getAllCategoriesService,
};
