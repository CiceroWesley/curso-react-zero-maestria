const moongose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
  try {
    const dbConn = await moongose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ercuvcj.mongodb.net/?retryWrites=true&w=majority`)

    console.log('Conectou ao banco')

    return dbConn
  } catch (error) {
    console.log(error)
  }
}

conn()

module.exports = conn