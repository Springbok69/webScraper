//const fetch = require('node-fetch');
import fetch from 'node-fetch';


//get the raw data
const getRawData = (URL) => {
    return fetch(URL).then((response)=>response.text()).then((data)=>{return data});
}

//URL for data
const URL = "https://en.wikipedia.org/wiki/Cricket_World_Cup";

//start the program
const getList = async()=> {
    const getD = await getRawData(URL);
    console.log(getD);
}

//invoke program
getList();