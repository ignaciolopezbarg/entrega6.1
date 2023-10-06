import { Router} from "express";
import {cartsService} from "../dao/index.js";

const router = Router();

router.get("/",async(req,res)=>{
    try {
        const result = await cartsService.getCarts();
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});//error servidor
    }
});

router.post("/", async(req,res)=>{
    try {
        const cart = req.body;
        const result = await cartsService.createCart(cart);
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

router.delete("/:cartId", async(req,res)=>{
    try {
        const cartId = req.params.cartId;
        const result = await cartsService.deletecart(cartId);
        res.json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status:"error", message:error.message});
    }
});

export { router as cartsRouter};