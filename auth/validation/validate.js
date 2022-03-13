const Joi = require('@hapi/joi');

const register=(data)=>{  

    const schema=Joi.object({

        name:Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        password:Joi.string().min(6).required(),
        confirm_password:Joi.string().min(6).required()

      }
    )
 
   return Joi.validate(data,schema)
};


const login=(data)=>{

    const schema=Joi.object({
        email:Joi.string().email(),
        password:Joi.string().min(6).required()  
      }
    )

   return Joi.validate(data,schema)
};

module.exports={register,login}
