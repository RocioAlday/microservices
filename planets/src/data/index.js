const axios= require("axios");

module.exports= {
    list: async()=> {
        const results= await axios.get("http://database:8004/Planet");  
        return results.data;
    },
    get: async(id)=> {
        const results= await axios.get(`http://database:8004/Planet/${id}`);
        return results.data
    },
    create: async (payload)=> {
        const results= await axios.post('http://database:8004/Planet', payload);
        return results.data
    }
}