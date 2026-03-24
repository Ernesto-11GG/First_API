const express = require("express");


const app = express();
app.use(express.json());

const users= [];


app.get('/hello', (request, respoonse)=>{
respoonse.send("Hello World");
})

app.post('/user', (request, response)=>{
   users.push(request.body);
   response.send("Usuario Agregado exitosamente")
})

app.get("/users", (request, response)=>{
   response.send(users);
})

app.delete("/user/:id", (request,response)=>{
const id = request.params.id;
const user = users.find((user) => user.id == id);
users.splice(users.indexOf(user), 1);
response.send("Usuario eliminado");
})

app.put("/user/:id", (request,response)=>{
    const id = request.params.id;
    const user = users.find((user) => user.id == id);
    const newPassword = request.body.password;
    user.pwd = newPassword;
    users.push(user);

    response.send("Usuario Actualizado");
})

app.listen(3000, () =>{
    console.log("Example app on port"+3000);
});