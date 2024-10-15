const fs = require ("fs");
let dataString = "";
fs.createReadStream("GLB.Ts+dSST.csv")
.on("data",(lolo) => {
    dataString += lolo;
})
.on("end", () =>{
    console.log(dataString);
})
.on("error", (err) => {
    console.error("Error", err);
});
