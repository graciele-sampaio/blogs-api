module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
    });

  }
  
  return PostCategory;
};