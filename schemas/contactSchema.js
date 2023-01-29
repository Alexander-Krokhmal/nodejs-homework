const Joi = require("joi");

const contactPostSchema = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(30).required(),
        phone: Joi.string().min(8).max(99).required(),
        email: Joi.string().email({
            minDomainSegments: 2,
        }).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({message: error.details[0].message });
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
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const contactsPatchSchema = (req, res, next) => {
    const schema = Joi.object({
      favorite: Joi.boolean().required(),
    }).required();
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "missing field favorite",
      });
    }
    next();
  };

module.exports = {
    contactPostSchema,
    contactPutSchema,
    contactsPatchSchema
};