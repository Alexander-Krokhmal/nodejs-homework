const { Contact } = require("../db/contactModel");

const getAllContacts = async (req, res) => {
    try {
        // const data = await listContacts();
        const contacts = await Contact.find();

        res.json(contacts);
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
    getAllContacts
}