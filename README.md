# API de Gestión de Personas

Esta es una API sencilla que simula una base de datos en "memoria" para gestionar personas. Permite realizar operaciones básicas como crear, leer, actualizar y eliminar (CRUD) registros de personas.

## Funcionalidades

- **Obtener todas las personas**: `GET /personas`
- **Obtener una persona por su DNI**: `GET /personas/:dni`
- **Crear una nueva persona**: `POST /personas`
- **Actualizar los datos de una persona por su DNI**: `PUT /personas/:dni`
- **Eliminar una persona por su DNI**: `DELETE /personas/:dni`

## Detalles de Implementación

La API está desarrollada en Node.js utilizando el framework Express.js y el middleware `body-parser` para el manejo de datos en formato JSON.

La "base de datos" se simula utilizando un array en memoria llamado `personas`, donde se almacenan los objetos de persona.

## Ejemplos de Uso

### Obtener todas las personas

```bash
GET /personas
```

Respuesta:

```json
[
    {
        "nombre": "Juan",
        "edad": 30,
        "dni": "12345678A"
    },
    {
        "nombre": "María",
        "edad": 25,
        "dni": "87654321B"
    }
]
```

### Obtener una persona por su DNI

```bash
GET /personas/:dni
```

Respuesta:

```json
{
    "nombre": "Juan",
    "edad": 30,
    "dni": "12345678A"
}
```

### Crear una nueva persona

```bash
POST /personas
```

Cuerpo de la solicitud:

```json
{
    "nombre": "Carlos",
    "edad": 40,
    "dni": "98765432C"
}
```

Respuesta

```json
{
    "nombre": "Carlos",
    "edad": 40,
    "dni": "98765432C"
}
```

### Actualizar los datos de una persona por su DNI

```bash
PUT /personas/:dni
```

Cuerpo de la solicitud:

```json
{
    "nombre": "Juan Pérez",
    "edad": 31
}
```

Respuesta

```json
{
    "nombre": "Juan Pérez",
    "edad": 31,
    "dni": "12345678A"
}
```

### Eliminar una persona por su DNI

```bash
DELETE /personas/:dni
```

Respuesta 

```bash
204 No Content
```

## Ejecución

Para ejecutar el servidor, asegúrate de tener Node.js instalado y luego ejecuta:

```bash
npm install     # Instalar dependencias
node index.js     # Iniciar el servidor
```

El servidor estará disponible en el puerto especificado en la variable de entorno PORT, o en el puerto 3000 por defecto.