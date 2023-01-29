const { Contact } = require("../db/contactModel");

const deleteContact = async (req, res) => {
    try {
        const { contactId } = req.params;
        // const searchContact = await getContactById(contactId);
        const contact = await Contact.findOneAndRemove({ _id: contactId });

        if (!contact) {
            return res.status(404).json({
                message: `There is no contact with id ${contactId} to delete`,
            });
        }
        
        // const data = await removeContact(contactId);
        res.status(200).json({
            status: "success",
            code: 200,
            message: `Contact ${contact.name} was successfully deleted`,
            contact,
        });
    } catch (error) {
        // next(error);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Server error",
        });
    }
};

module.exports = {
    deleteContact
}