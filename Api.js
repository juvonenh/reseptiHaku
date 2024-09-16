function fetchRecipes(keyword) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`
  ).then((response) => {
    if (!response.ok)
      throw new Error(
        `Error in fetch: status code ${response.status} ${response.statusText}`
      );

    return response.json();
  });
}
// Apifunktioita voi olla useita
export { fetchRecipes };
