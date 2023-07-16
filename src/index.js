const express = require("express");
const { PORT } = require("./config");
const mountRoutes = require("./routes");
const mailsender=require('./config/email-config')
const {Server_config}=require('./config')
const amqplib=require('amqplib')
const {email_Service}=require('./services')

async function connectQueue(){
  try {
    
  const connection = await amqplib.connect("amqp://localhost");

  const channel= await connection.createChannel();

  await channel.assertQueue("noti-queue");
       channel.consume("noti-queue", async (data) => {

    // console.log(`${Buffer.from(data.content)}`)
    
    const object= JSON.parse(Buffer.from(data.content).toString());
    await email_Service.sendEmail("mangalanisha692@gmail.com" ,object.recepientEmail , object.subject , object.text )
    channel.ack(data)
  })

  } catch (error) {
    console.log(error);
  }
}


const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Anish",
    fg: "Pranu Bhandari",

  });

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", mountRoutes);



app.listen(4500, async function exec() {
  console.log(`Starting My server at Port ${4500}`);

  await connectQueue()
  console.log("queueu is up")
}); 

