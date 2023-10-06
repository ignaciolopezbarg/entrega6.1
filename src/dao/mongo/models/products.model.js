import mongoose from "mongoose";

const productsCollection = "products";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    enum:['deportivas','tiempo libre','playeras']
  },
  precio: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },

  stock: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
  },
});

export const productsModel = mongoose.model(productsCollection, productSchema);
