# Universe API

This is a simple API that provides information about universe and solar system planets

## Public endpoints

Api endpoints can be accessed at:
https://planets.juanfrausto.com/api/planets

## Setup

To run this project, you need to have the following tools installed:

- Node.js

Add a `.env` file in the root of the project with the following content:

``` text
DB_CONNECTION_STRING=mongodb://localhost:27017/animals
```

Then, run the following commands:

``` bash
npm install
node index.js
```


## Endpoints

### GET api/planets

This endpoint returns a list of all solar system planets.

Response example:

``` json
    [
            {
                "_id": "65f4e6a2c2aca276416a4ce3",
                "name": "Mercurios",
                "type": "Planeta rocoso",
                "description": "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Es un mundo rocoso y desolado, con una superficie marcada por cráteres de impacto y vastas llanuras de lava.",
                "mass": "0.055 Tierras",
                "diameter": "4,880 km",
                "gravity": "3.7 m/s²",
                "rotation": "59 días",
                "traslation": "88 días",
                "distance": "57.9 millones km",
                "moons": "0",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg",
                "__v": 0
            },
            {
                "_id": "65f4e6bcc2aca276416a4ce5",
                "name": "Venus",
                "type": "Planeta rocoso",
                "description": "Venus es el segundo planeta del sistema solar y el más parecido a la Tierra en cuanto a tamaño, masa y composición. Sin embargo, su atmósfera es extremadamente densa y tóxica, y su superficie es un infierno de altas temperaturas y presiones.",
                "mass": "0.815 Tierras",
                "diameter": "12,104 km",
                "gravity": "8.87 m/s²",
                "rotation": "243 días",
                "traslation": "225 días",
                "distance": "108.2 millones km",
                "moons": "0",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Venus_from_Mariner_10.jpg/640px-Venus_from_Mariner_10.jpg",
                "__v": 0
            },
        ]
```

### GET api/planets/{id}

This endpoint returns the planet with the specified id.

Response example:

``` json
    {
        "_id": "65f4e6a2c2aca276416a4ce3",
        "name": "Mercurios",
        "type": "Planeta rocoso",
        "description": "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Es un mundo rocoso y desolado, con una superficie marcada por cráteres de impacto y vastas llanuras de lava.",
        "mass": "0.055 Tierras",
        "diameter": "4,880 km",
        "gravity": "3.7 m/s²",
        "rotation": "59 días",
        "traslation": "88 días",
        "distance": "57.9 millones km",
        "moons": "0",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg",
        "__v": 0
    }
```

### GET api/universe

This endpoint returns universe information.

``` json
    [
        {
            "_id": "65e8b182115f8e40ed62418e",
            "name": "Universo",
            "image": "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg",
            "description": "El universo es el vasto y misterioso sistema que abarca todo lo que existe, desde las estrellas y galaxias hasta las partículas subatómicas y las energías invisibles que llenan el espacio. Se extiende más allá de nuestra comprensión actual y comprende una inmensa cantidad de materia, energía, espacio y tiempo. A lo largo de los siglos, los científicos, filósofos y pensadores han intentado comprender el universo y su origen. A través de la observación, la experimentación y la teorización, hemos desarrollado una imagen cada vez más detallada y compleja de su funcionamiento. Desde las leyes fundamentales de la física hasta las interacciones en escalas cosmológicas, el universo presenta una diversidad asombrosa y una belleza incomparable. Nuestro lugar en el universo, en un pequeño planeta en una galaxia periférica, es solo una pequeña fracción de la inmensidad del cosmos. Sin embargo, esta perspectiva humilde no disminuye la fascinación y el deseo de explorar y comprender el universo en su totalidad. Desde la exploración del espacio exterior hasta el estudio de la física cuántica, continuamos nuestra búsqueda para desentrañar sus misterios y comprender nuestra conexión con el cosmos.",
            "age": "13.8 mil millones de años",
            "size": "93 mil millones de años luz de diámetro",
            "stars": "100 mil millones de galaxias, 100 mil millones de estrellas por galaxia",
            "matter": "68.3% energía oscura, 26.8% materia oscura, 4.9% materia ordinaria",
            "facts": [
                "El universo se originó en un evento conocido como el Big Bang, hace aproximadamente 13.8 mil millones de años.",
                "La expansión del universo se acelera debido a la energía oscura, una misteriosa fuerza que contrarresta la gravedad.",
                "Las galaxias, las estrellas, los planetas y la materia ordinaria representan solo una pequeña fracción de la composición total del universo.",
                "La materia oscura, una forma de materia invisible que no emite ni refleja luz, constituye aproximadamente el 26.8% del contenido del universo.",
                "El fondo cósmico de microondas es una radiación de fondo que se remonta al Big Bang y proporciona una ventana a los primeros momentos del universo."
            ],
            "images": [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/800px-Hubble_ultra_deep_field.jpg",
                "https://static.nationalgeographic.es/files/styles/image_3200/public/01-hubble-heic1501a.jpg",
                "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/08/hubble3.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "65f4e64e8f14175446d09d8e",
            "name": "Mercurio",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg",
            "description": "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Es un mundo rocoso y desolado, con una superficie marcada por cráteres de impacto y vastas llanuras de lava.",
            "facts": [],
            "images": [],
            "__v": 0
        }
    ]
```
