import { noContent, ok } from "../utils/http-helper"

export const getPlayerService = async() => {
  const data = {
		player: "Ronaldo",
	};
	let response = null;

	//se tiver data, chama o ok, senão chama o noContent
	response = data ? await ok(data) : await noContent();

	return response;
}
		
