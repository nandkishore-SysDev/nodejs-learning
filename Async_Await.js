async function showImages() {
    try {
    const article = await getArticale(10);
    const place = await getPlaces(article.name);
    const city = await getCity(place)
        console.log(city);
    } catch (error) {
        console.log("Error: ", error.message);
    }
} 

showImages();