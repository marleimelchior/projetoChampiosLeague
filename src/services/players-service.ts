import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { addPlayer, findAllPlayers, findPlayerById } from "../repositories/players-repository";
import { badRequest, created, noContent, notFound, ok } from "../utils/http-helper"


//função para retonar todos os jogadores
export const getPlayerService = async() => {
  const data = await findAllPlayers();
	let response = null;

	//se tiver data, chama o ok, senão chama o noContent
	response = data ? await ok(data) : await noContent();

	return response;
}

export const getPlayerByIdService = async(id: number) => {
  const data = await findPlayerById(id);
  let response = null; 

  response = data ? await ok(data) : await notFound();

  return response;
}

export const addPlayerService = async (player: PlayerModel) => {
  if (!player || !player.name || !player.club || !player.position) {
    return badRequest("Dados do jogador são obrigatórios");
  }
  player.statistics = generateRandomStatistics();
  await addPlayer(player);
  return created(player);
}

const generateRandomStatistics = (): StatisticsModel => {
  return {
    Overall: Math.floor(Math.random() * 100),
    Pace: Math.floor(Math.random() * 100),
    Shooting: Math.floor(Math.random() * 100),
    Passing: Math.floor(Math.random() * 100),
    Dribbling: Math.floor(Math.random() * 100),
    Defending: Math.floor(Math.random() * 100),
    Physical: Math.floor(Math.random() * 100)
  };
}
		
