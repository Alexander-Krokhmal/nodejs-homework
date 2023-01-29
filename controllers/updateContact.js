const { Contact } = require("../db/contactModel");

const updateContact = async (req, res) => {
    try {
        const { contactId } = req.params;
        // const data = await updateContact(contactId, req.body);
        const result = await Contact.findOneAndUpdate(
            { _id: contactId },
            { $set: req.body }
        );
        const updateContact = await Contact.findOne({ _id: contactId });
    
        if (!result) {
            return res.status(404).json({
                status: "error",
                code: 404,
                message: "Not Found",
            });
        }
    
        res.status(200).json({
            status: "success",
            code: 200,
            updateContact,
            message: `Contact ${updateContact.name} was successfully changed`,
        })
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
    updateContact
}