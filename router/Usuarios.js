const express = require('express');
const router = express.Router();

const Usuarios = require('../models/usuarios');

router.get('/', async (req, res) => {

    try {
        const arrayUsuariosDB = await Usuarios.find();
        console.log(arrayUsuariosDB);

        res.render("usuarios", 
    {   
        arrayUsuarios:arrayUsuariosDB
})
    } catch (error) {
        console.log(error);
    }

})

router.get('/crear', (req, res) => {
    res.render('crear')
})

//AGREGAR

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await Usuarios.create(body)
        res.redirect('/usuarios')
    } catch (error) {
        console.log('error', error)
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const usuarioDB = await Usuarios.findOne({ _id: id })
        console.log(usuarioDB)
        res.render('detalle', {
            usuario: usuarioDB,
            error: false
        })
    } catch (error) {
        console.log('error', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el documento...'
        })
    }
})

//ELIMINAR

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {

        const usuarioDB = await Usuarios.findByIdAndDelete({ _id: id });
        console.log(usuarioDB)

        if (usuarioDB) {
            res.json({
                estado:true,
                mensaje: 'eliminado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

//EDITAR

router.put('/:id', async(req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        const usuarioDB = await Usuarios.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(usuarioDB)

        res.json({
            estado:true,
            mensaje:'Editado'
        })
    } catch (error) {
        console.log(error)

        res.json({
            estado:false,
            mensaje:'Fallo edicion'
        })
    }
})

module.exports = router;