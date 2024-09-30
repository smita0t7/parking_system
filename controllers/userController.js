const User = require("../models/user");

const userController = {
    //register a new user
    register: async (req, res) => {
        try{
            const {name, email, password, role} = req.body;

            //check if the email is already exist
             
        }
}