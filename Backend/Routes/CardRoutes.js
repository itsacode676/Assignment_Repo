const express = require('express')
const routes = express.Router()
const {
    createCard,
    searchCard,
    getCards
} = require('../Controllers/Card')

routes.post('/createCards', createCard)
routes.get('/searchCard', searchCard)
routes.get('/getCards', getCards)

module.exports = routes