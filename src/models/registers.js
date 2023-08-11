const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    FirstName:{
       type: String,
       required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
       type: String,
       required: true
    }

})

// Creating collections

const Register = new mongoose.model("Richpanel_data", employeeSchema);
module.exports = Register;