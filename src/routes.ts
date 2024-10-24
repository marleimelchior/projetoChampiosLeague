import { Router } from "express";
import { getPlayer, getPlayerById } from "./controllers/players-controller";

const router =  Router();
//rota para obter todos os jogadores
router.get("/players", getPlayer);

//rota para obter um jogador pelo id
router.get("/players/:id", getPlayerById);


export default router;