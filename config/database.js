//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:LG4180TV@fiaptecnico.xwquw.mongodb.net/test')
}

//exportar as infomações para acesso externo
module.exports = conn 