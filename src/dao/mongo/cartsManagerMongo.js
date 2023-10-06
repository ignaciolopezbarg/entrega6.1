import { cartsModel } from "./models/carts.model.js";

export class CartsManagerMongo {
  constructor() {
    this.model = cartsModel;
  }

  async createCart(cartInfo) {
    try {
      const result = await this.model.create(cartInfo);
      return result;
    } catch (error) {
      console.log("createCart", error.message);
      throw new Error("No se pudo crear el carrito");
    }
  }

  async getCarts() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("getCarts", error.message);
      throw new Error("No se pudo obtener el listado de carritos");
    }
  }

  async addProduct(cartId, productId) {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("no se pudo cargar el producto al carrito");
    }
  }
}
