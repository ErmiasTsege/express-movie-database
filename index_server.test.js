import request from 'supertest'
import express from 'express'
import path from 'path' //node native module
//use the below comand to run the supertest and we need to install supertest 
//we need to include "type":"module" in the package manager
//NODE_OPTIONS=--experimental-vm-modules npx jest index_server.test.js 
//when testing this code  the other futures like server.js dont work so we need to remove "type":"module" after supertest

const app=new express()
const port = 3000
app.use(express.static( 'public'))
describe('home /',  () => {
  test('responds to /', async () => {
    const res = await request(app).get('/')
   // expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200)
   // expect(res.text).toEqual('hello world!')
    });
   
//   test('responds to /hello/:name', async () => {
//     const res = await request(app).get('/hello/jaxnode'); 
//     expect(res.header['content-type']).toBe('text/html; charset=utf-8');
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toEqual('hello jaxnode!');
//   });

//   test('responds to /hello/Annie', async () => {
//     const res = await request(app).get('/hello/Annie'); 
//     expect(res.header['content-type']).toBe('text/html; charset=utf-8');
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toEqual('hello Annie!');
//   });

});

