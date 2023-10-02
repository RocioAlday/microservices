const axios= require("axios");

module.exports= {
    list: async()=> {
        const results= await axios.get("http://database:8004/Character"); 
        return results.data;
    },
    get: async(id)=> {
        const results= await axios.get(`http://database:8004/Character/${id}`);
        return results.data
    },
    create: async (payload)=> {
        const results= await axios.post('http://database:8004/Character', payload);
        return results.data
    }
}