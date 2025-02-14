const mongoose = require('mongoose');


const connectDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('mongodb connected succesfully', connect.connection.host)
    } catch(error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDb;