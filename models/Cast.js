const {sequelize,DataTypes,Model}=require('../db')
class Cast extends Model{
}

Cast.init({    
    castName:DataTypes.STRING,
    Role:DataTypes.STRING 

},{sequelize,
  timestamps:false})
  module.exports={Cast}