const {sequelize,DataTypes,Model}=require('../db')
class Movie extends Model{
}

Movie.init({    
    title:DataTypes.STRING,
    genre:DataTypes.STRING,
    movieLength:DataTypes.INTEGER,
    rating:DataTypes.INTEGER

},{sequelize,
  timestamps:false})
  module.exports={Movie}