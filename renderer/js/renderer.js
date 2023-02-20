const path = require('path');

async function sleep_and_add(ms, num1, num2) {
   await new Promise(resolve => setTimeout(resolve, ms));
   return num1 + num2
} 

let $ = require('jquery');
$('#click-counter').text("result goes here");
$('#countbtn').on('click', async () => {
   result = await sleep_and_add(1000, 3, 5)
   $('#click-counter').text(result)
});