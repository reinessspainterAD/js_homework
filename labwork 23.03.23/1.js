let users = [
    {
      name: "Daniel",
      login: "reinessspainter",
      password: "1234",
    },
    {
      name: "Madonna",
      login: "mialove",
      password: "12345",
    },
    {
      name: "Lexa",
      login: "doter007",
      password: "123",
    },
  ];
  
  function authorization() {
    let login = prompt("Введите логин");
    let password = prompt("Введите пароль");
  
    for (let i = 0; i < users.length; i++) {
      if (login == users[i].login && password == users[i].password) {
        alert(`Здравствуйте ${users[i].login}`);
        break;
      } else {
        alert("Неверный логин или пароль!");
        break;
      }
    }
  }
  authorization();