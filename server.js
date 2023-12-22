const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const server = app.listen(port, () => {
    console.log(`Listening to port no ${port}`);
})

const io = require("socket.io")(server, {
    cors:{
        origin:"*"
    }
})


    io.on("connection", (socket) => {

        

        //This is Server Waiting for a message on Client id
        socket.on("Client", (data) => {
            console.log(data);
            socket.emit("Data", data);
        })
        //This is Server Waiting for a message
    })
