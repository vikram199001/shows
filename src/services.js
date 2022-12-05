import http from "./http-comman.js"

export async function getShows() {
  let response = await http.get("/shows");
  console.log('----dfdf', response);
  return response
}

export async function getShow(id) {
  let response = await http.get(`/shows/${id}`);
  console.log('----dfdf', response);
  return response
}