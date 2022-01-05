const fs = require("fs"); //file system

const writeStream = fs.WriteStream("./noteFolder/note.txt");
const readStream = fs.ReadStream("./noteFolder/note.txt");

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

writeStream.write("my hand writing");
