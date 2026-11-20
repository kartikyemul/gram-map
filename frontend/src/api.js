const API_URL = "http://localhost:8080/api";

export async function getData(path) {
  const response = await fetch(API_URL + path);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response.json();
}
