const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Movie } = require('./models/Movie')
const { Cast } = require('./models/Cast')
const { Crew } = require('./models/Crew')
//associate models
//adds foreign key to crew table connecting a movie instance to a specific crew
Crew.belongsTo(Movie)
//gives us sequelize methods for a one to many relationship
Movie.hasMany(Crew)
//adds foreign key to cast table connecting a movie instance to a specific cast
Cast.belongsTo(Movie)
Movie.hasMany(Cast)


//export models with added associations
module.exports = {Movie,Crew,Cast,sequelize}
