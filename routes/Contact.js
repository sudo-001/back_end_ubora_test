const ContactCtrl = require('../controllers/Contact');
const express = require('express');
const Contact = require('../models/Contact');
const ContactRouter = express.Router();

ContactRouter.post('/add',ContactCtrl.postContact)
ContactRouter.get('/', ContactCtrl.getAllContacts)
ContactRouter.get('/find/:nom', ContactCtrl.getContacts)

module.exports = ContactRouter;