const { Schema }= require("mongoose");

const charactersSchema= new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planet" },
    films: [{ type: String, ref: "Film"}]
})

charactersSchema.statics.list= async function () {
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

charactersSchema.statics.get= async function(id) {
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

charactersSchema.statics.insert= async function(character) {
    await this.create(character);
    return 'Character created successfully'
}

module.exports= charactersSchema;