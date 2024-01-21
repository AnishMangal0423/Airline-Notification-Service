const {TicketRepository}=require('../repository')
const{MAILER}=require('../config')
const ticketRepository=new TicketRepository();

async function sendEmail(mailFrom , mailTo , subject , text){

    try {
        
      const response = await MAILER.sendMail({

        from:mailFrom,
        to:mailTo,
        subject:subject,
        text:text
      })

      console.log("rrresponse"+response)

      return response;

    } catch (error) {
    console.log("eeror"+error);
    throw error;    

    }

}



async function createTicket(data){

    try {
        
        const response =await ticketRepository.create(data);

        return response;
    } catch (error) {
        console.log(error);

        throw error;
        
    }
}


async function getPendingEmails(){

try {
    
 const response= await ticketRepository.getPendingTickets();

 return response;

} catch (error) {
    

    console.log(error);
    throw error;
}

}


module.exports={
    sendEmail,
    createTicket,
    getPendingEmails,
}
