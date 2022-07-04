const ContactCtrl = require('../controllers/Contact');
const express = require('express');
const Contact = require('../models/Contact');
const ContactRouter = express.Router();

ContactRouter.post('/add',ContactCtrl.getContact)
ContactRouter.get('/', ContactCtrl.getAllContact)


module.exports = ContactRouter;