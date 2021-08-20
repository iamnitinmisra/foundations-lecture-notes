let colors = ["red", "white", "blue"];

// module.exports = {
stateAge = (age) => {
  return `i am ${age}`;
};

addUser = (name, age) => {
  let user = { name, age };
  if (user.age > 21) {
    return user;
  } else {
    return "User not old enough";
  }
};

addColor = (color) => {
  colors.push(color.toLowerCase());
  return colors;
};
// };

module.exports = { stateAge, addUser, addColor };
