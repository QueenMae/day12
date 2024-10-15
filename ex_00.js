console.log("Indeed");

fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")
    .then((res) => {
        console.log("A promise, indeed");
        return res.json();
    })
    .then(function (dataObject) {
        console.log(dataObject);
    })
    .catch(console.null);
