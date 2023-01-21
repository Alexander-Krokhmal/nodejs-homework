const Joi = require("joi");

const contactPostSchema = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(30).required(),
        phone: Joi.string().required(),
        email: Joi.string().email({
            minDomainSegments: 2,
        }).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            code: 400,
            message: "missing required name field",
        });
    }
    next();
};


const contactPutSchema = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(30),
        phone: Joi.string(),
        email: Joi.string().email({
            minDomainSegments: 2,
          }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            code: 400,
            message: "missing fields",
        });
    }
    next();
};

module.exports = {
    contactPostSchema,
    contactPutSchema
};