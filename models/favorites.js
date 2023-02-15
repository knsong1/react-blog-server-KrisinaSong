'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorites.belongsTo(models.Post, {
        foreignKey: 'postid'
    });
    }
  }
  Favorites.init({
    favorites: 'DataTypes.BOOLEAN'
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};

