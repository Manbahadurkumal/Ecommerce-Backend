
const mongoose = require("mongoose");

// const AddressSchema = new mongoose.Schema({
//     houseNo: String,
//     streetNo: String,
//     ruralDev: String,
//     district: String,
//     province: String
// });

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 2, 
        max: 50
    },
    email: {
        type: String,
        required: true,
        uniquie: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['seller', 'customer', 'admin'],
        default: 'customer'
    },
    activationToken: {
        type: String

    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: "inactive"
    },
    // phone: String,
    // image: String,
    // address: {
    //     shippingAddress: AddressSchema,
    //     billingAddress: AddressSchema
    // },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null    
    },
    updatedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null    
    }
},{
    timestamps: true,   //createdAt, updatedAt keys are auto added
    autoCreate: true,   //create the table
    autoIndex: true     //indexing
})

//Model Name ==> Capital singular name
//Table name ==>small plural name
//eg. User ===> users
// If i want to change the table name, third argument of model function is collection name

const UserModel = mongoose.model("User", UserSchema
// , "authUserrs"
)
module.exports = UserModel;