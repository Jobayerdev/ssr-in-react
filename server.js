import AboutPage from './src/pages/AboutPage'
import HomePage from './src/pages/HomePage'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
    res.send(renderToString(<HomePage />))
})

app.get('/about', (req, res) => {
    res.send(renderToString(<AboutPage />))
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
