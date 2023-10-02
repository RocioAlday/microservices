const axios= require("axios");

module.exports= {
    list: async()=> {
        const results= await axios.get("http://database:8004/Film");  //cambiar x database:8004
        return results.data;
    },
    get: async(id)=> {
        const results= await axios.get(`http://database:8004/Film/${id}`);
        return results.data
    },
    create: async (payload)=> {
        const results= await axios.post('http://database:8004/Film', payload);
        return results.data
    }
}