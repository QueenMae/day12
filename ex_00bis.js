function check_route(url) {
fetch(url)
 .then(response => {
if (response.ok) {
console.log("all is good");
  } else {
 throw new Error('Response was not successful');
     }
 })
 console.log("shit happens");
        });
}
check_route("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1252");
