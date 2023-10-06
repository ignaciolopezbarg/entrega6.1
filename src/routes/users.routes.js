//este archivo es par crear ruta de acceso a la bd, y gestionar consultas o creacion en la bd
import { Router } from "express";

//creamos un metodo para consultas, para gestionar la peticion del listado de usuarios que tengamos en la bd
router.get("/",(req,res) => {res.json({status:"success",message:"listado usuarios"})});

const router = Router();

export {router as usersRouter};//ahora lo importamos en app.js