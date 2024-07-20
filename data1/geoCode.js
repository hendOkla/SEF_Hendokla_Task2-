const request = require("request")

const geoCode = (address, callback)=>{
    const geoCodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url : geoCodeURL , json:true}, (error, response)=>{
       if(error){
          //to display  low level error 
          callback("unable to connect geoCode services",undefined)
       }else if(response.body.message){
          //to display if token has error
          callback(response.body.message, undefined)
       }else if(response.body.features.length == 0){
          //to display error if i have problem in country name
          callback("unable to find location", undefined)
       }else{
 
          //display it if i don't have any problem 
          callback(undefined, {
             longitude : response.body.features[0].center[0],
             latitude : response.body.features[0].center[1]
          })         
       }
    })
 }


 module.exports = geoCode