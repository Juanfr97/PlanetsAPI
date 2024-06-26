const mongoose = require('mongoose');

/**
 * "name":"Universo",
        "image":"https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg",
        "description":"El universo es el vasto y misterioso sistema que abarca todo lo que existe, desde las estrellas y galaxias hasta las partículas subatómicas y las energías invisibles que llenan el espacio. Se extiende más allá de nuestra comprensión actual y comprende una inmensa cantidad de materia, energía, espacio y tiempo. A lo largo de los siglos, los científicos, filósofos y pensadores han intentado comprender el universo y su origen. A través de la observación, la experimentación y la teorización, hemos desarrollado una imagen cada vez más detallada y compleja de su funcionamiento. Desde las leyes fundamentales de la física hasta las interacciones en escalas cosmológicas, el universo presenta una diversidad asombrosa y una belleza incomparable. Nuestro lugar en el universo, en un pequeño planeta en una galaxia periférica, es solo una pequeña fracción de la inmensidad del cosmos. Sin embargo, esta perspectiva humilde no disminuye la fascinación y el deseo de explorar y comprender el universo en su totalidad. Desde la exploración del espacio exterior hasta el estudio de la física cuántica, continuamos nuestra búsqueda para desentrañar sus misterios y comprender nuestra conexión con el cosmos.",
        "age":"13.8 mil millones de años",
        "size":"93 mil millones de años luz de diámetro",
        "stars":"100 mil millones de galaxias, 100 mil millones de estrellas por galaxia",
        "matter":"68.3% energía oscura, 26.8% materia oscura, 4.9% materia ordinaria",
        "facts":[
            "El universo se originó en un evento conocido como el Big Bang, hace aproximadamente 13.8 mil millones de años.",
            "La expansión del universo se acelera debido a la energía oscura, una misteriosa fuerza que contrarresta la gravedad.",
            "Las galaxias, las estrellas, los planetas y la materia ordinaria representan solo una pequeña fracción de la composición total del universo.",
            "La materia oscura, una forma de materia invisible que no emite ni refleja luz, constituye aproximadamente el 26.8% del contenido del universo.",
            "El fondo cósmico de microondas es una radiación de fondo que se remonta al Big Bang y proporciona una ventana a los primeros momentos del universo."
        ],
        "images":[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/800px-Hubble_ultra_deep_field.jpg",
            "https://static.nationalgeographic.es/files/styles/image_3200/public/01-hubble-heic1501a.jpg",
            "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/08/hubble3.jpg"
        ]
 */

const UniverseSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    age:{
        type: String,
        require: true
    },
    size:{
        type: String,
        require: true
    },
    stars:{
        type: String,
        require: true
    },
    matter:{
        type: String,
        require: true
    },
    facts:{
        type: Array,
        require: true
    },
    images:{
        type: Array,
        require: true
    }
});

module.exports = mongoose.model('universe', UniverseSchema)