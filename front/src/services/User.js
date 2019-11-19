const fetch = require("node-fetch");

class UserService {
    static path(resource){
        return "http://user.local"  + "/" + resource;
    }
    static async fetch(){
        try {
            const response = await fetch( this.path('users') );            
            const responseJson = await response.json(); 
            return responseJson.data;

        } catch (error) {
            console.log(error);
        }
    }
};



module.exports = UserService;