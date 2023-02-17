const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuario = await prisma.usuario.findMany();

    res.status(200).json(usuario).end();
}

const readOne = async (req, res) => {
    let usuario = await prisma.usuario.findUnique({
        where: {
            id_usuario:Number(req.params.id_usuario)
        },
        select: {
            cpf: true,
            nome:true,
            senha: true,
            tipo: true
        }
    });
        
    res.status(200).json(usuario).end();
}

const deletar = async (req, res) => {
    let usuario = await prisma.usuario.delete({
        where: {
            id_usuario: Number(req.params.id_usuario)
        },
    });

    res.status(200).json(usuario).end();
}

const update = async (req ,res) =>{
    const usuario = await prisma.usuario.update({
        where:{
            id_usuario:Number(req.body.id_usuario)
        },
        data:req.body    })
    res.status(200).json(usuario).end()
}


module.exports = {
    create,
    read,
    readOne,
    deletar,
    update
}