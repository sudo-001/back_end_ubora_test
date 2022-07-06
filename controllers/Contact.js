const Contact = require('../models/Contact');
const fs = require('fs')

exports.postContact = (req, res, next) => {
    const newContact = new Contact({
        ...req.body
    })

    newContact.save()
        .then(() => res.status(200).json({ 'Message': 'Contact ajouté avec succès' }))
        .catch((err) => res.status(400).json({ err }))
}

exports.getAllContacts = (req, res, next) => {
    Contact.find()
        .then((contactList) => res.status(200).json(contactList))
        .catch((err) => res.status(404).json({ err }))
}

exports.getContacts = (req, res, next) => {
    Contact.find({ nom: RegExp(`${req.params.nom}`, 'i') })
        .then((ContactsMatches) => {
            res.status(200).json(ContactsMatches)
        })
        .catch((err) => res.status(404).json({ err }))
}

exports.getDeletedContact = (req, res, next) => {
    Contact.findOneAndDelete({ _id: req.params.id })
        .then((deletedContact) => {
            res.status(200).json(deletedContact)           
        })
        .catch((err) => res.status(404).json({ err }))
}