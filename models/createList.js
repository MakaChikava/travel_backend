const mongoose = require('mongoose')

const createListSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
})
const List = mongoose.model('List', createListSchema)
module.exports = List;