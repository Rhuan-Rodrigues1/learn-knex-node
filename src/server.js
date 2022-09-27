import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false  }))

app.get('/', (req, res) => {
	res.send("Funcionando")
})

app.listen(3000, () => {
	console.log("Server is runnig in: http://localhost:3000")
})
