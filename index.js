// Importar express
const express = require("express");

// Importar handelbars como template engine
const exphbs = require("express-handlebars");

//Importar Body parser que nos permite accerder al cuerpo de la peticion HTTP
const bodyParser = require("body-parser");

//Importar la funcion de calculo de metodo frances
const { calcularMetodoFrances} = require("./calculoMetodoFrances");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs"}));

app.set("view engine" , "hbs");

// Habilitar body parser para eer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true}));

// Crear una ruta para /
app.get("/", (req, res, next) => {
    res.render("formulario_prestamo");
});

app.post("/prestamo", (req, res, next) => {
    // Asignacion por destructuring
    const { monto, tasaInteres, periodo} = req.body;
    //console.log(req.body);

    calcularMetodoFrances(monto, tasaInteres, periodo);

    res.send("Peticion aceptada");
});

// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000");
});