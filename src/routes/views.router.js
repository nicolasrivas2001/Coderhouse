import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("websocket");
});

router.get("/home", (req, res) => {
    res.render("home");
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts");
});

export default router;
