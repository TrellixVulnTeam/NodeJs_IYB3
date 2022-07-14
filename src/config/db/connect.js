
const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/crud_student_dev');
        console.log('connect success');
    } catch (error) {
        console.log('connect failed');
    }

}

module.exports = { connect };
