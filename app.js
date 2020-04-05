let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
      ip: {
        dns: "254.33.199.100",
        server: "127.0.0.1.5500"
      }
    }
  }
};

//Обхід властивостей об'єкта та властивостей його вкладних об'єктів за допомогою рекурсії
function printUserInfo(user) {
  for (key in user) {
    if (typeof user[key] === "object") {
      printUserInfo(user[key]);
    } else {
      console.log(user[key]);
    }
  }
}

printUserInfo(user);
