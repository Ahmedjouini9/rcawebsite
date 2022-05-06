const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema ({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    phonenumber:{
        type: String,
        required: true

    },
    siteURL:{
        type: String,
        required: true

    },
    domaine:{
        type: String,
        required: true

    },
    companyPicture:{
        type: String,
        required: true

    },
    isAdmin: {
        type: Boolean,
        default: false,
      },
    post:[
        { 
        type: Schema.Types.ObjectId,
        ref:'Poste'
    }
],
},

)

module.exports = Company = mongoose.model('company',companySchema);
