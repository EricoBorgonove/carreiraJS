const express = require("express")
require('dotenv').config()

const userRoutes = require ('./routes/userRoutes')
const authRoutes = require ('./routes/authRoutes')

const app = express()
const routes = require('./routes/routes')
const authMiddleware = require("./middleware/authMiddleware")

app.use(express.json())

app.use('/', routes)
app.use('/user', userRoutes)
app.use('/auth', authRoutes)

app.get('/perfil', authMiddleware, async (req, res) => {
    res.json({message: `Bem Vindo usuário ${req.usuario.nome}`})
})

app.use((req, res, next) => {
    res.status(404).send(`404 Não Encontrado`)
})

app.listen(process.env.PORT, () => {
    console.log (`App rodando na porta: ${process.env.PORT}`)
})

