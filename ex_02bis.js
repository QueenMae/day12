const fs = require("fs");
let dataString = "";

fs.createReadStream("GLB.Ts+dSST.csv")
    .on("data", (lolo) => {
       dataString += lolo;
    })
    .on("end", () => {
        parseAndDisplayData(dataString);
  })
    .on("error", (err) => {
        console.error("Error", err);
});
function parseAndDisplayData(data) {
    const rows = data.split("\n");

    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].split(',');

      if (columns.length > 1) {
     const year = columns[0].trim();      
    const janTemp = columns[1].trim();  
     console.log(`Year: ${year}, January Temp: ${janTemp}`);
     }
   }
}
