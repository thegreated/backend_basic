const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ListingSchema = new Schema ({
    name: {
        type: String
    },
    description :{
        type: String
    },
    username: {
        type: String
    },
    address: {
        type:String
    },
    review :{
        type: Number
    }

} , {timestamps:true} );

const Listing = mongoose.model('Listing' , ListingSchema)
module.exports = Listing;