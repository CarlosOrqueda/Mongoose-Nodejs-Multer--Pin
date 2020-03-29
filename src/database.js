const mongoose = require('mongoose')

async function connect () {
    try{
        await mongoose.connect('mongodb://localhost/mongoPinterest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('>>> DB is connected')
    }catch(e){
        console.log(e)
    }
}

module.exports = connect()