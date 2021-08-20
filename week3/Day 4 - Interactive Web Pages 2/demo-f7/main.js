console.log("connected");

const getAllBtn = document.querySelector("#all");
const charBtns = document.querySelectorAll(".char-btns");
const ageForm = document.querySelector("#age-form");
const ageInput = document.querySelector("#age-input");
const createForm = document.querySelector("#create-form");
const newFirstInput = document.querySelector("#first");
const newLastInput = document.querySelector("#last");
const newGenderDropDown = document.querySelector("select");
const newAgeInput = document.querySelector("#age");
const newLikesText = document.querySelector("textarea");
const charContainer = document.querySelector("section");

// const baseURL =

function createCharacterCard(char) {
  console.log(char);
  let charCard = document.createElement("div");
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`;

  charContainer.appendChild(charCard);
}

function clearCharacters() {
  charContainer.innerHTML = ``;
}

function getAllCharacters() {
  clearCharacters();
  axios
    .get("http://localhost:4000/characters")
    .then((response) => {
      // for (let i = 0; i < response.data.length; i++) {
      //   createCharacterCard(response.data[i]);
      // }

      response.data.forEach((character) => {
        createCharacterCard(character);
      });
    })
    .catch((err) => console.log(err));
}

function getOneCharacter(event) {
  clearCharacters();

  axios
    .get(`http://localhost:4000/character/${event.target.id}`)
    .then((res) => {
      createCharacterCard(res.data);
    })
    .catch((err) => console.log(err));
}

const getAgeCharacter = (event) => {
  event.preventDefault();
  clearCharacters();

  axios
    .get(`http://localhost:4000/character/?age=${ageInput.value}`)
    .then((res) => {
      res.data.forEach((element) => {
        createCharacterCard(element);
      });
      // createCharacterCard(res.data);
    })
    .catch((err) => console.log(err));
};

const createCharacter = function (event) {
  event.preventDefault();
  clearCharacters();

  const body = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikesText.value.split(","),
  };

  axios
    .post("http://localhost:4000/character", body)
    .then((character) => {
      character.data.forEach((char) => {
        console.log(char);
        createCharacterCard(char);
      });
    })
    .catch((err) => console.log(err));
};
charBtns.forEach((characterBtn) => {
  return characterBtn.addEventListener("click", getOneCharacter);
});
getAllBtn.addEventListener("click", getAllCharacters);
ageForm.addEventListener("submit", getAgeCharacter);
createForm.addEventListener("submit", createCharacter);
