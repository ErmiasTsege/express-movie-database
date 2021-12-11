//import the associated models from index.js
const { router } = require('express')
const express = require('express')
const {sequelize, Movie, Crew,Cast} = require('./index')

//test movie database CRUD
describe('Movie Database', () => {
    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of movies
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
        //create array of movies
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

   // create instances of movie Model for testing
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
        //retrieve list of crew in this crew
        const crewList = await testMovie.getCrews()
        //assert that the list of crew is length 2
        expect(crewList.length).toBe(2)
        //assert that the 0th index of the array crewlist is an instance of the model crew
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
        //retrieve list of casts in this casts
        const castList = await testMovie.getCasts()
        //assert that the list of cast is length 2
        expect(castList.length).toBe(2)
        //assert that the 0th index of the array castlist is an instance of the model cast
        expect(castList[0] instanceof Cast).toBeTruthy()
        expect(castList[0].castName).toMatch('David')        
    }) 
      
})

afterAll(async()=> {
    // await sequelize.sync({force:true})
    sequelize.close()
})