import { findAllPlayers } from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper"

export const getPlayerService = async() => {
  const data = await findAllPlayers();
	let response = null;

	//se tiver data, chama o ok, senão chama o noContent
	response = data ? await ok(data) : await noContent();

	return response;
}
		
