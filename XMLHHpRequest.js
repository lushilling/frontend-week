
let request = new XMLHttpRequest();

// Get all accounts
function getAllAccounts(){
  request.onload = function(){
    console.log('it worked!', request.responseText);
    result.innerText = request.responseText;
  };
  request.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts");
  request.send();
};

//get an account
function getAnAccount(idNum){
  let id=idNum.value;

  request.onload = function(){
    console.log('it worked', request.responseText);
    result.innerText = request.responseText;
  };
  request.open("GET", `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`);
  request.send();
};


//createAccount
function createAccount(){
  const account = {
    id:
    accountNumber:
    firstName:
    lastName:
  };

  request.onload = function(){
  console.log('it worked', request.responseText);
  }

  request.open("PUT", "http://localhost:8080/AccountSETemplate/api/account/createAccount");
  request.send(JSON.stringify(acccount));
}


//deleteAccount
function deleteAccount(idNum){
  let id=idNum.value;

  request.onload = function(){
  console.log('it worked', request.responseText);
  result.innerText = request.responseText;
  }

  request.open("DELETE", `http://localhost:8080/AccountSETemplate/api/account/deleteAccount/${id}`);
  request.send();
}

// //updateAccount
// function updateAccount(idNum){
//   let id = idNum.value;
//
//   request.onload = function(){
//     console.log('it worked', request.responseText);
//     result.innerText = request.responseText;
//   }
//
//   request.open("PUT", `http://localhost:8080/AccountSETemplate/api/account/updateAccount/${id}`);
//   request.send();
//
// }
