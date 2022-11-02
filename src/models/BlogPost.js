module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    })
  }
  
  return BlogPost;
};