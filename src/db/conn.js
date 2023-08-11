const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shreyanshsri2812:Shre%40123@cluster0.pf2rztk.mongodb.net/" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(()=>{
    console.log('connection successful');
}).catch((e)=>{
    console.log(`no connection ${e}` );
})