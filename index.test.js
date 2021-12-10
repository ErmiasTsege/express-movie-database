//import the associated models from index.js
const { router } = require('express')
const express = require('express')
const {sequelize, Movie, Crew,Cast} = require('./index')
//const app = express()
//const port = 3000
//app.use('http://localhost:3000',router)
//test musician database CRUD
describe('Movie Database', () => {
    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of bands
        const arrayOfMovie = [
            {title: 'Lord of the Ring',  
            genre: 'Action',
             movieLength:120,
             rating:4
            }, {title: 'Note Book',  
            genre: 'Romance',
            movieLength:140,
            rating:5
           }

        ]
        //create array of musicians
        const arrayOfCrew =[
            {crewName: 'Director'},
            {crewName: 'Photography'},
            {crewName: 'Editor'},
            {crewName: 'Acting'}
        ]
        const arrayOfCast =[
            {castName: 'David',Role:'main actor'},
            {castName: 'Jelo',Role:'supporting actor'},
            {castName: 'Jhon',Role:'dancing'}
        ]
        //add arrays to database
        await Movie.bulkCreate(arrayOfMovie)
        await Crew.bulkCreate(arrayOfCrew)
        await Cast.bulkCreate(arrayOfCast)
    })

   // create instances of Musician Model for testin
    test('Movie have genre', async() => {
        //read test instance from db
        const testMovie = await Movie.findOne({where:{title:'Note Book'}})
        expect(testMovie.genre).toBe('Romance')  
        expect(testMovie instanceof Movie).toBeTruthy()
        
    })  
    test('Crew have name', async() => {
        //read test instance from db
        const testCrew = await Crew.findOne({where:{crewName:'Photography'}})
        expect(testCrew.crewName).toBe('Photography')  
        expect(testCrew instanceof Crew).toBeTruthy()
        
    }) 
    test('Cast have role', async() => {
        //read test instance from db
        const testCast = await Cast.findOne({where:{castName:'David'}})
        expect(testCast.Role).toBe('main actor')  
        expect(testCast instanceof Cast).toBeTruthy()
        
    }) 
    test('Crew can have movie', async() => {
        //read test instance from db
        //read test Crew instance from db          
       const testMovie = await Movie.findOne({where:{title: 'Lord of the Ring'}});      
        //create 2 test instances of Movie
        const testCrew1 = await Crew.findOne({where:{crewName: 'Director'}})
        const testCrew2 = await Crew.findOne({where:{crewName: 'Editor'}})    
       //magic sequelize add method
        await testMovie.addCrew(testCrew1)
        await testMovie.addCrew(testCrew2)
        //retrieve list of menus in this restaurant
        const crewList = await testMovie.getCrews()
        //assert that the list of menus is length 2
        expect(crewList.length).toBe(2)
        //assert that the 0th index of the array menulist is an instance of the model Restaurant
        expect(crewList[0] instanceof Crew).toBeTruthy()
        expect(crewList[0].crewName).toMatch('Director')        
    }) 
    test('Cast can have movie', async() => {
        //read test instance from db
        //read test Crew instance from db      
       const testMovie = await Movie.findOne({where:{title: 'Lord of the Ring'}});      
        //create 2 test instances of Movie
        const testCast1 = await Cast.findOne({where:{castName: 'David'}})
        const testCast2 = await Cast.findOne({where:{castName: 'Jelo'}})    
       //magic sequelize add method
        await testMovie.addCast(testCast1)
        await testMovie.addCast(testCast2)
        //retrieve list of menus in this restaurant
        const castList = await testMovie.getCasts()
        //assert that the list of menus is length 2
        expect(castList.length).toBe(2)
        //assert that the 0th index of the array menulist is an instance of the model Restaurant
        expect(castList[0] instanceof Cast).toBeTruthy()
        expect(castList[0].castName).toMatch('David')        
    }) 
      
})

// describe('Movie Routes', function () {

//     test('responds to /', async () => {
//       const res =await app.get('http://localhost:3000')
//       expect(res.header['content-type']).toBe('text/html; charset=utf-8');
//       expect(res.statusCode).toBe(200);
//       //expect(res.text).toEqual('hello world!');
//     });
    
  
   

  
  
    // test('responds to /hello/:name', async () => {
    //   const res = await request(app).get('/hello/jaxnode'); 
    //   expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    //   expect(res.statusCode).toBe(200);
    //   expect(res.text).toEqual('hello jaxnode!');
    // });
  
    // test('responds to /hello/Annie', async () => {
    //   const res = await request(app).get('/hello/Annie'); 
    //   expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    //   expect(res.statusCode).toBe(200);
    //   expect(res.text).toEqual('hello Annie!');
    // });
 // })    
  
  
//   app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`)
// })
  




  





afterAll(async()=> {
    // await sequelize.sync({force:true})
    sequelize.close()
})