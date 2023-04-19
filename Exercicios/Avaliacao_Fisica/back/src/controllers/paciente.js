const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let paciente = await prisma.paciente.create({
        data: req.body
    });

    res.status(200).json(paciente).end();
}

const read = async (req, res) => {
    let paciente = await prisma.paciente.findMany();

    res.status(200).json(paciente).end();
}

const deletar = async (req, res) => {
    let paciente = await prisma.paciente.delete({
        where: {
            id_paciente: Number(req.params.id_paciente)
        },
    });

    res.status(200).json(paciente).end();
}

const update = async (req ,res) =>{
    const paciente = await prisma.paciente.update({
        where:{
            id_paciente:Number(req.params.id_paciente)
        },
        data:req.body
    })
    res.status(200).json(paciente).end()
}



module.exports = {
    create,
    read,
    deletar,
    update
}