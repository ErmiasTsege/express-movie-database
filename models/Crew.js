const {sequelize,DataTypes,Model}=require('../db')
class Crew extends Model{
}

Crew.init({    
    crewName:DataTypes.STRING  

},{sequelize,
  timestamps:false})
  module.exports={Crew}