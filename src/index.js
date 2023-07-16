const express = require("express");
const { PORT } = require("./config");
const mountRoutes = require("./routes");
const mailsender=require('./config/email-config')
const {Server_config}=require('./config')

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

  

  try {
    
  console.log(Server_config.GMAIL_EMAIL)
  const response = await mailsender.sendMail({

    from:Server_config.GMAIL_EMAIL,
    // to:'anishm0423@gmail.com',
    subject:'is service working',
    text:'yes',
   })
   

  //  console.log(response)

  } catch (error) {
    console.log("error" + error);


  }
});

