const  express = require("express");
const app = express();

app.use((request, response) => {
  console.log("Incoming request..");
  response.send("<h1>Hey, we got your request!</h1>");
});
// line 6 is an html response for the client to see
// app.use method accepts two params: request & response, which in this case response is sent back

app.get('/r/:mypage',(request,response) => {
  const { mypage } = request.params;
  response.send(`Ayt, you are on the S{mypage} section.`);
})

app.get('/',(request,response) => {
  response.send('You are now in the homepage.');
  console.log('Well done!');
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});