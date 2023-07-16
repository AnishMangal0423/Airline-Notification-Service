const express=require('express')
const router=express.Router();
const airplane_routes=require('./airplane-routes');
const {Ticketcontroller}=require('../../controllers')

// router.get('/info' , Info);
router.use('/airplanes' , airplane_routes);
router.post('/tickets', Ticketcontroller.createticket)


module.exports=router



