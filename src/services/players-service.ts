import { findAllPlayers, findPlayerById } from "../repositories/players-repository";
import { noContent, notFound, ok } from "../utils/http-helper"


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
		
