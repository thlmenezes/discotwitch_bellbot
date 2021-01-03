import { Router } from "express";

import { Server } from "~/providers/server";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

export default new Server(router).express;