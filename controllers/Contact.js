const Contact = require('../models/Contact');

exports.getContact =  (req, res, next) => {
    const newContact = new Contact({
        ...req.body
    })

    newContact.save()
        .then(() => res.status(200).json({ 'Message': 'Contact ajouté avec succès'}))
        .catch((err)=> res.status(400).json({ err }))
}

exports.getAllContact = (req, res, next) => {
    Contact.find()
        .then((contactList)=> res.status(200).json( contactList ))
        .catch((err) => res.status(404).json({ err }))
}