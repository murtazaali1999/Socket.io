const fs = require("fs"); //file system

const readStream = fs.ReadStream("./noteFolder/note.txt");

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
