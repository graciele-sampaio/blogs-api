const { BlogPost, User, Category } = require('../models');

  const getBlogPostAllService = async () => {
      const getAll = await BlogPost.findAll({
        include: [
          { 
            model: User, 
            as: 'user', 
            attributes: { exclude: ['password'] },
          }, { 
            model: Category, 
            as: 'categories', 
            through: { attributes: [] } },
        ],
      });
      return { type: null, message: getAll };
  };
  
  module.exports = {
    getBlogPostAllService,
  };