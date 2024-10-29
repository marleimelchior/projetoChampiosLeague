import { PlayerModel } from "../models/player-model";
import playersData from "../database.json";

const database: PlayerModel[] = playersData as PlayerModel[];


//função que retona todos os jogadores
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
	return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
	return database.find(player => player.id === id);
}

export const addPlayer = async (player: PlayerModel): Promise<void> => {
	const newId = database.length > 0 ? Math.max(...database.map(p => p.id)) + 1 : 51;
	player.id = newId;
	database.push(player);
  }
