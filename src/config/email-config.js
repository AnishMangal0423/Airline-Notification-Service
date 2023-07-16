const nodemailer = require("nodemailer");

const {GMAIL_EMAIL , GMAIL_PASS}=require('./Server_config')

const mailsender= nodemailer.createTransport({

    // host: 'smtp.gmail.com',\
    secure: true,
    service:'Gmail',
    auth:{
        user:GMAIL_EMAIL,
        pass:GMAIL_PASS
    }


})

module.exports=mailsender
