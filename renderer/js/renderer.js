const path = require('path');
const ipcRenderer = require('electron').ipcRenderer;
var mainResponse = document.querySelector('#main-response')

async function sleep_and_add(ms, num1, num2) {
   await new Promise(resolve => setTimeout(resolve, ms));
   return num1 + num2
} 

document.querySelector('#form-submit-button').addEventListener('click', function() {
   let firstName = document.getElementById("fname").value;
   let lastName = document.getElementById("lname").value;

   // send username to main.js 
   ipcRenderer.sendSync('synchronous-message', [firstName, lastName] );
});

// receive message from main.js
ipcRenderer.on('synchronous-reply', (event, response) => {
   console.log('response received!');
   mainResponse.innerHTML = response;
})
