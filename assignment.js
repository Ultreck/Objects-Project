
// Defining an empty arrays.....

const person = [];
// Function of add button or submit button
const addPersonInfo = () => {
      let Fname =document.getElementById("first").value;
      first.value = "";
      let Lname = document.getElementById("last").value;
      last.value = "";
      person.push(
            {
                  "firstName": Fname, 
                  "lastName": Lname
            },
            )
            uniqueNumber(7);
            // displayInfo()
      console.log(person)

};



// Function of display button.
const displayInfo = () => {
      var uniqueId = uniqueNumber(7);
      let addperson = "";
      for (p = 0; p < person.length; p++)
      {
            addperson += "<tr>";
            addperson += "<th>" + (p+1) + "</th><td>" + person[p].firstName + "</td><td>" +  person[p] .lastName + "</td><td>" + uniqueId + "</td>";
            addperson += "</tr>";
      }
      document.getElementById("display").innerHTML = addperson;
      console.log(addperson);
}
displayInfo()

// Function of Unique Id.
function uniqueNumber(randomLength) {
      let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefjhijklmopqrstuvwxyz";
      var chooseRandom = "";
      for (r = 0; r < randomLength; r++) {
            chooseRandom += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
      }
      //   console.log(chooseRandom);
      return chooseRandom;
}