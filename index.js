const  express = require("express");
const app = express();

app.use((request, response) => {
  console.log("Incoming request..");
  response.send("<h1>Hey, we got your request!</h1>");
});
// line 6 is an html response for the client to see
// app.use method accepts two params: request & response, which in this case response is sent back


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});