const { Contact } = require("../db/contactModel");

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    
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
    
};

module.exports = {
    updateStatusContact
}