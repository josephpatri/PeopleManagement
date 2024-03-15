const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulación de base de datos
let personas = [];

// Obtener todas las personas
app.get('/personas', (req, res) => {
    res.json(personas);
});

// Obtener una persona por su DNI
app.get('/personas/:dni', (req, res) => {
    const dni = req.params.dni;
    const persona = personas.find(p => p.dni === dni);
    if (!persona) {
        res.status(404).json({ error: 'Persona no encontrada' });
    } else {
        res.json(persona);
    }
});

// Crear una nueva persona
app.post('/personas', (req, res) => {
    const { nombre, edad, dni } = req.body;

    // Verificar si el DNI ya existe
    const personaExistente = personas.find(p => p.dni === dni);
    if (personaExistente) {
        res.status(400).json({ error: 'El DNI ya está en uso' });
    } else {
        const nuevaPersona = { nombre, edad, dni };
        personas.push(nuevaPersona);
        res.status(201).json(nuevaPersona);
    }
});

// Actualizar los datos de una persona por su DNI
app.put('/personas/:dni', (req, res) => {
    const dni = req.params.dni;
    const { nombre, edad } = req.body;

    const personaIndex = personas.findIndex(p => p.dni === dni);
    if (personaIndex === -1) {
        res.status(404).json({ error: 'Persona no encontrada' });
    } else {
        personas[personaIndex] = { ...personas[personaIndex], nombre, edad };
        res.json(personas[personaIndex]);
    }
});

// Eliminar una persona por su DNI
app.delete('/personas/:dni', (req, res) => {
    const dni = req.params.dni;

    const personaIndex = personas.findIndex(p => p.dni === dni);
    if (personaIndex === -1) {
        res.status(404).json({ error: 'Persona no encontrada' });
    } else {
        personas.splice(personaIndex, 1);
        res.status(204).send();
    }
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
