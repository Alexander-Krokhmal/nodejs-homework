const { Contact } = require("../../db/contactModel");

const getAllContacts = async (req, res, next) => {
    const { _id } = req.user;
    // console.log(req.query);
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;

    const query = favorite ? { owner: _id, favorite } : { owner: _id };

    const contacts = await Contact.find(query,{
        owner: 0,
        createdAt: 0,
        updatedAt: 0,
      })
        .skip(skip)
        .limit(parseInt(limit))
    // const contacts = await Contact.find({owner: _id}, "", {skip, limit: Number(limit)}).populate("owner", "_id email subscription");

    res.status(200).json(contacts);
};

module.exports = {
    getAllContacts
}