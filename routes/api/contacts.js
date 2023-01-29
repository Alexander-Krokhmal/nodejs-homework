const express = require('express');
const { getAllContacts, getContactById, addContact, deleteContact, updateContact, updateStatusContact } = require('../../controllers');
const { contactPostSchema, contactPutSchema, contactsPatchSchema } = require('../../schemas/contactSchema');

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:contactId', getContactById);

router.post('/', contactPostSchema, addContact)

router.delete('/:contactId', deleteContact)

router.put('/:contactId', contactPutSchema, updateContact)

router.patch('/:contactId', contactsPatchSchema, updateStatusContact)

module.exports = router;
