const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"./config/config.env"})
const axios = require('axios');
const Model = require("./Model")

mongoose.connect(process.env.MONGOOSE_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})




const deleteData = async () => {
    try {
      await Model.deleteMany();
      console.log('Data Destroyed...');
      process.exit();
    } catch (err) {
      console.error(err);
    }
};

if (process.argv[2] === '-i') {
    axios.get('https://api.wazirx.com/api/v2/tickers')
  .then(res => {
    let a=0;
    const value = [];
    for(let k in res.data){
        // console.log(k);
        value.push(res.data[k]);
        a++;
        if(a===10){
            break;
        }
    }
    return  Model.create(value)
  })
  .then(()=>{
        console.log('Data Inserted');
        process.exit();
  })
  .catch(err => {
    console.log(err);
  });
} else if (process.argv[2] === '-d') {
    deleteData()
}


