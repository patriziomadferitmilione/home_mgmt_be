const express = require('express')
const router = express.Router()
const ListaSpesa = require('../models/listaSpesaModel')

//Post Method
router.post('/newListaSpesa', async (req, res) => {
  const data = new ListaSpesa({
    nome: req.body.nome,
    negozio: req.body.negozio,
    createdAt: req.body.createdAt,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json({ _id: dataToSave._id, ...dataToSave._doc })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get all Method
router.get('/getAll', async (req, res) => {
  try {
    const data = await ListaSpesa.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID Method
router.get('/getListaSpesa/:id', async (req, res) => {
  try {
    const data = await ListaSpesa.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Update by ID Method
router.patch('/updateListaSpesa/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await ListaSpesa.findByIdAndUpdate(id, updatedData, options)

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/deleteListaSpesa/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await ListaSpesa.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Export the router
module.exports = router
