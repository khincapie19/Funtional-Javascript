//Tengo un array preliminar de objetos
// Recibo un nuevo array de objetos
// tomo los valores del atributo id de los objetos
// reviso si todos los id del segundo objeto estàn en el preliminar esto me retorna true or false
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {

    let goodUsersId = goodUsers.map(function(object) {
       return object.id
    });

    let submittedUsersId = submittedUsers.map(function(object) {
       return object.id
    });

    console.log(goodUsersId, submittedUsersId);

    let isInGoodUsers = (number) => {
      console.log(number,goodUsersId);
      return goodUsersId.find(element => element === number);
    };

    return submittedUsersId.every(isInGoodUsers);
  };
}
module.exports = checkUsersValid

var goodUsers = [
    { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
var submittedUsers = [
    { id: 1 },
    { id: 6 },
    { id: 5 }
    ]
let validator = checkUsersValid(goodUsers);
console.log(validator(submittedUsers));
