const { Contact } = require("../db/contactModel");

const getContactById = async (req, res) => {
    try {
        const { contactId } = req.params;
        // const data = await getContactById(contactId);
        const contact = await Contact.findOne({ _id: contactId });

        if (!contact) {
            return res.status(400).json({
                status: "error",
                code: 400,
                message: `Contact with id ${contactId} not found`,
            });
        }

        res.json({
            status: "success",
            code: 200,
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
    getContactById
}