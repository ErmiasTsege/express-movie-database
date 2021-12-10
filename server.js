const express = require('express')

const path = require('path') //node native module
const { Movie } = require('./models/Movie')
const { Cast } = require('./models/Cast')
const { Crew } = require('./models/Crew')
const app = express()
const port = 3000

//Otherwise you have to JSON.parse(req.body) in each of your route handlers

app.use(express.json())

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))
//GET method on /movie route returns all movies
app.get('/movies', async (req,res) => {
    //find all instances of the Model movie
    const allMovies = await Movie.findAll()    
    res.json(allMovies)
})
app.get('/crews', async (req,res) => {
    //find all instances of the Model movie
    const allCrews = await Crew.findAll()    
    res.json(allCrews)
})
app.get('/casts', async (req,res) => {
    //find all instances of the Model movie
    const allCasts = await Cast.findAll()    
    res.json(allCasts)
})
app.post('/movies', async (req,res) => {
    //find all instances of the Model Restaurant
  let newMovies=await Movie.create(req.body)      
    res.send("Movie created")
})
// app.put('/movies/:id', async (req,res) => {
//     //find all instances of the Model Restaurant
//   let updatedRestaurant=await Restaurant.update(req.body,{where:{id:req.params.id}})      
//     res.send(updatedRestaurant?"Restaurant updated":"update Failed")
// })
     
// app.delete('/movies/:id', async (req,res) => {
//     //find all instances of the Model Restaurant
//   let deletRestaurant=await Restaurant.destroy({where:{id:req.params.id}})      
//     res.send(deletRestaurant?"Restaurant deleted":"Delete Failed")
// })
     
// //     res.send(updatedRestaurantArray?"Restaurant updated":"update Failed")
// // })

// app.delete('/restaurants/:id', async (req,res) => {
//     //find all instances of the Model Restaurant
//   let deletRestaurant=await Restaurant.destroy({where:{id:req.params.id}})      
//     res.send(deletRestaurant?"Restaurant deleted":"Delete Failed")
// })
// app.get('/menus', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const allMenus = await Menu.findAll()
//     //respond with allRestaurants as a json objeect
//     res.json(allMenus)
// })



// app.get('/search', async (req,res) => {
//     //find all instances of the Model Restaurant
//     let results = []    
//      results = await Restaurant.findAll({where:{Restaurant_name: req.query.Restaurant_name}})
//      res.json(results)
//    })
// app.get('/menuitems', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const allMenuItems = await MenuItems.findAll()
//     //respond with allRestaurants as a json objeect
//     res.json(allMenuItems)
// })
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})