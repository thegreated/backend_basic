const { response } = require("express");

const Listing = require ('../models/Listing');

//Show list of Listing
const index = (req ,res, next) => {
    Listing.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured'
        });
    })
}

const show = (req, res, next) => {
    let listingId = req.body.ListingId
    Listing.findById(listingId)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured'
        });
    })
}
// add new Listing
const store = (req, res, next) => {
    let listing = new Listing({
        name : req.body.name,
        description : req.body.description,
        username : req.body.username,
        address : req.body.address,
        review : req.body.review,

    })
    listing.save()
    .then(response => {
        res.json({
            message: 'Listing Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured'
        });
    })
}

// update an Listing
const update = (req, res, next) => {
    let listingId = req.body.ListingId
    let updateData = {
        name : req.body.name,
        description : req.body.description,
        username : req.body.username,
        address : req.body.address,
        review : req.body.review,
    }
    Listing.findByIdAndUpdate(listingId, { $set: updateData} )
    .then(()=> {
        res.json({
            message: 'Listing updated Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured'
        });
    });
}
 //delete an listing
 const destroy = (req, res, next) =>{
    let listingId = req.body.ListingId;
    Listing.findByIdAndRemove(listingId)
    .then(()=> {
        res.json({
            message : 'Listing delete Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured'
        });
    });
 }
   


module.exports = {
    index , show , store,  update , destroy
}