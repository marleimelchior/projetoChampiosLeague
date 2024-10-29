import { Router } from "express";
import { addPlayer, getPlayer, getPlayerById } from "./controllers/players-controller";

const router =  Router();
//rota para obter todos os jogadores
router.get("/players", getPlayer);

//rota para obter um jogador pelo id
router.get("/players/:id", getPlayerById);

//rota para adicionar um novo jogador
router.post("/players", addPlayer)


export default router;