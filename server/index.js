require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)


// обработка ошибок - последний Middleware.
app.use(errorHandler)


// функция подключения к БД (любая работа с БД является асинхронной)
const start = async () => {
	try {
		await sequelize.authenticate()
	   await sequelize.sync()
		app.listen(PORT, () => console.log(`Serever started on port ${PORT}`))

  } catch(err) {

		console.log(err)

  }

}

start()

