function getArticle(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data....");
        resolve({ id: id, name: "radha" });
    }, 5000);
});
}

getArticle("1").then(res=> console.log(res))


getArticle1(10)
    .then((user) => getUserName(user.name))
    .then((place) => getAddress(place.city))
    .then((data) => console.log("Data", data))
    .catch((err) => console.log("Error: ", err.message))
