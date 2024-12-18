import { HttpResponse } from "../models/http-response-model"

export const ok = async (data:any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  }
}

//criar mensagem do 404
export const notFound = async (): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { message: "Usuário não encontrado"}
  }
}

export const created = async (data:any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data
  }
}

export const badRequest = (message: string) => ({
  statusCode: 400,
  body: { error: message }
});



