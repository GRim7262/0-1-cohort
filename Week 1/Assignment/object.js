// Program that prints all the male people's first name given a complex object

const allUsers = [
  {
    firstName: "vinal",
    gender: "male",
  },
  {
    firstName: "vishu",
    gender: "male",
  },
  {
    firstName: "kalpana",
    gender: "female",
  },
];
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "female") {
    console.log(allUsers[i]["firstName"]);
  }
}
