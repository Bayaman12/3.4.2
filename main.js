// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   users.forEach(user => {
//     user.admin = false;
//   });
  
//    console.log(users);



let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
 
  users.forEach(user => {
    if (user.name === "Маша") {
      user.admin = true;
    } else {
     user.admin = false;
    }
  });
 
  console.log(users);