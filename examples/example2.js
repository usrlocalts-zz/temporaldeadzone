let count = 100;
console.log(count); //prints 100

(
function(){
console.log(count);//reference error
let count = 100;
})();
