const {createItem,getAllItems,editItem,getItem,deleteItem} = require('../controller/itemController.js')
const express = require('express');
const router = express.Router();

router.post('/api/items',createItem);
router.get('/api/items',getAllItems);
router.put('/api/items/:id',editItem);
router.get('/api/items/:id',getItem)
router.delete('/api/items/:id',deleteItem)

module.exports = router;