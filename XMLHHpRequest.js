function makeReq(requestType, url, toSend) {
   return new Promise((resolve, reject) => {

       let request = new XMLHttpRequest();
        request.onload = () => {
           if(request.status == 200) {
              resolve(request);
             }
           else { const reason = new Error ("Page not found/working");
               reject(reason);
           };
         };
       request.open(requestType, url);
       request.send(toSend);
    });

};

function onGetAllAccountsClicked() {
   makeReq("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts").then((res) => {
     console.log('it worked!', res.responseText);
     result.innerText = res.responseText;
   }).catch(function (error){
     console.log(error.message);
   });
};

function onGetAnAccountClicked(){
  let id=idNum.value;
  makeReq("GET", `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`).then((res) => {
    console.log('it worked', res.responseText);
    result.innerText = res.responseText;
  }).catch(function (error){
    console.log(error.message);
  });
};

function onGetCreateAccountClicked(){
  const newAccount = {
    accountNumber: accountNum.value,
    firstName: fName.value,
    lastName: lName.value
  };
  makeReq("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount", JSON.stringify(newAccount)).then((res) => {
    console.log('it worked', res.responseText);
    result.innerText = res.responseText;
  }).catch(function (error){
    console.log(error.message);
  });
};

function onDeleteAccountClicked(){
  let id=idDelete.value;
  makeReq("DELETE", `http://localhost:8080/AccountSETemplate/api/account/deleteAccount/${id}`).then((res) => {
    console.log('it worked', res.responseText);
    result.innerText = res.responseText;
    }).catch(function (error){
      console.log(error.message);
    });
};

// //deleteAccount
// function deleteAccount(){
//   let id=idDelete.value;
//
//   request.onload = function(){
//   console.log('it worked', request.responseText);
//   result.innerText = request.responseText;
//   };
//
//   request.open("DELETE", `http://localhost:8080/AccountSETemplate/api/account/deleteAccount/${id}`);
//   request.send();
// };

// //createAccount
// function createAccount(){
//   const newAccount = {
//     accountNumber: accountNum.value,
//     firstName: fName.value,
//     lastName: lName.value
//   };
//   console.log(newAccount);
//   let request = new XMLHttpRequest();
//   request.onload = function(){
//     console.log('it worked', request.responseText);
//     result.innerText = request.responseText;
//   };
//   request.open("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount");
//   request.send(JSON.stringify(newAccount));
// };

//
// // Get all accounts
// function getAllAccounts(){
//   let request = new XMLHttpRequest();
//   request.onload = function(){
//     console.log('it worked!', request.responseText);
//     result.innerText = request.responseText;
//   };
//   request.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts");
//   request.send();
// };

// //get an account
// function getAnAccount(){
//   let id=idNum.value;
//   let request = new XMLHttpRequest();
//     request.onload = function(){
//       console.log('it worked', request.responseText);
//       result.innerText = request.responseText;
//   };
//   request.open("GET", `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`);
//   request.send();
// };

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
//}
