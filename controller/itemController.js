const itemModel = require('../model/itemModel.js')


const createItem = async(req,res) => {

    try {
        
        const {title,type,description} = req.body;

        if(!title || !type || !description) {
            return res.status(401).json({message:'All values required'})
        }

        const item = await itemModel.create({
            title,
            type,
            description
        })
        res.status(200).json({message:'Item successfully created',item})
        } catch (error) {
        console.log(error);
        res.status(500).json({message:'Uncaught error occured'})
    }
}

const getAllItems = async(req,res) => {
    try {
        const task = await itemModel.find();
        res.status(200).json({message:'Items found',task})
    } catch(error) {
        res.status(500).json({message:'unexpected error occured'})
    }
}

const editItem = async(req,res) => {
    try {
        const item = await itemModel.findById(req.params.id);

        if(!item) {
            res.status(402).json({message:'item not found'});
        }

        const updateItem = await itemModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json({message:'item updated successfully',updateItem})
    } catch (error) {
        console.log(error)
        res.status(200).json({messge:'unexpeced error occured'})
    }
}

const deleteItem = async(req,res) => {
    try {
        const item = await itemModel.findById(req.params.id)

        if(!item) {
            return res.status(402).json({message:'Not found'})
        }

        await itemModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "item deleted successfully", item });
    } catch (error) {
        console.log(error)
    }

}

const getItem = async(req,res) => {
    try {
        const item = await itemModel.findById(req.params.id);
        if(!item) {
            res.status(402).json({message:'Not found'})
        }
        res.status(200).json({message:'Item found',item})
    } catch (error) {
        
    }
}

module.exports = {
    createItem,
    getAllItems,
    editItem,
    deleteItem,
    getItem
}