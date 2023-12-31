import express from "express";
import {__dirname } from "./utils.js";
import path from "path";
import {engine} from "express-handlebars";
import {Server} from "socket.io";
//importamos la funcion para conexion
import {connectDB} from "./config/dbConnection.js";

import { chatService} from "./dao/index.js";

import { productsRouter } from "./routes/products.routes.js";

const port = 8080;
const app = express();

//middlewares:
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//servidor express http:
const httpServer = app.listen (port,()=>console.log(`server listening on port ${port}`));

//servidor de websocket
const io = new Server(httpServer);

//ejecucion conexion base de datos:
connectDB();


//handlebars:
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use("/api/products", productsRouter);

//socket server
io.on("connection",async(socket)=>{
    console.log("cliente conectado");
    //ahora aca estamos usando un servicio que utiliza el manager de mongo
});


