const server= require("./src/server");
// const {Character} = require("./src/database");

// Character.list().then((res=> console.log(res)));
// Character.get(2).then((res=> console.log(res)));

server.listen(8004, ()=> {
    console.log("Database service on PORT 8004")
})