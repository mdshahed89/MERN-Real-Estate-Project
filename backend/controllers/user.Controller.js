import User from "../models/User.model.js"
import Listing from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs"


export const user = (req, res) => {
    res.json({
        message: "is it joking"
    })
}

export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your own account"));

    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
                avatar: req.body.avatar
            }
        }, {new: true})

        const {password, ...rest} = updatedUser._doc;
        res.status(200).json(rest)

    } catch (error) {
        next(error);
    }

}

export const deleteUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only delete your own account"));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie("access_token");
        res.status(200).json("User Deleted Successfully");
    } catch (error) {
        next(error);
    }
}

export const getUserListing = async (req, res, next) => {
    if(req.user.id === req.params.id){
        try {
            const listing = await Listing.find({userRef: req.params.id})
            res.status(200).json(listing)
        } catch (error) {
            next(error)
        }
    }
    else{
        return next(errorHandler(401, "You can only view your own listing "))
    }
}



export const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);

        if(!user) return next(errorHandler(404, "User not found"));

        const { password: pass, ...rest } = user._doc;
        res.status(200).json(rest)
        
    } catch (error) {
        next(error)
    }
}