import express from "express";
import { createUser, getUsers, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

/*router.post("/", (req, res) => {
    res.send({ message: "its a post request" });
});*/

router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/", getUsers);

/*router.get("/", (req, res) => { res.send({message: "its a GET request"}) })*/

export default router;