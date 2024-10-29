import { Request, Response } from 'express';
import { addPlayerService, getPlayerByIdService, getPlayerService } from '../services/players-service';
import { PlayerModel } from '../models/player-model';

//endpoint para obter todos os jogadores
export const getPlayer = async (req:Request, res:Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

//endpoint para obter um jogador pelo id
export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

//endpoint que adiciona um novo jogador
export const addPlayer = async (req: Request, res: Response) => {
  const player: PlayerModel = req.body;
  const httpResponse = await addPlayerService(player);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}