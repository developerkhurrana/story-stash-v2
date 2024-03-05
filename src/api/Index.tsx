export async function fetchBooks() {
  const headers = {
    "X-RapidAPI-Key": "95c96b1b15msh988e94f64e1ba74p1b4f60jsn8805cd6bc21a",
    "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
  };
  const response = await fetch("https://books-api7.p.rapidapi.com/books/get/random/", {
    headers: headers,
  });
  const result = await response.json();

  return result;
}
