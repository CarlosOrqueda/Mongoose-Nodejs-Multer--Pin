const app = require('./server')
require('./database')

async function main () {
    try{
        await app.listen(app.get('port'))
        console.log(`Server on port ${app.get('port')}`)
    }catch(e){
        console.log(e)
    }
}

main()