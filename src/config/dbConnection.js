// en este archivo hacemos la conexion a la bd
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://nachito1957ilb:ignacio1957@cluster0.fbicdhl.mongodb.net/eCommerce?retryWrites=true&w=majority");
    console.log("base de datos conectada");
  } catch (error) {
    console.log(`error al conectarse a la base de datos: ${error.message}`);
  }
};
//vamos a mongoDBAtlas para encontrar la ruta y traer