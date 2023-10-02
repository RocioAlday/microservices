const { catchAsync }= require("../utils");

module.exports= {
    getCharacters: catchAsync(require("./getCharacters")),
    getCharacterById: catchAsync(require("./getById")),
    createCharacter:  catchAsync(require("./createCharacter")),
}