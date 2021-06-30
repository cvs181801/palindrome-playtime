//grab the elements from the DOM
const string = document.getElementById("textBox");
const goButton = document.getElementById("go-btn");
const resultDiv = document.getElementById("parentDiv");
const renderResult = document.createElement("p");

let originalArray = [];

function caseInsensitivePalindromeChecker(text) {
        originalArray.push(text);
       //convert all letters to lower case.  
       originalArray = text.toLowerCase().split("");
       //clone the array
       const clonedArray = [...originalArray];
       //reverse the cloned array's order
       clonedArray.reverse();

            //console.log("Cloned Array:", clonedArray);
            //console.log("Original Array:", originalArray);
       
     // check to see if the reversed cloned array matches the original array
         if (JSON.stringify(clonedArray) === JSON.stringify(originalArray) ) {
    //if it is, return true
            console.log("yep");
            renderResult.innerHTML = "";
            renderResult.innerHTML = `Yes, it's a palindrome!`;
            resultDiv.appendChild(renderResult); 
             //else return false
         } else {
             console.log("nope");
            renderResult.innerHTML = "";
            renderResult.innerHTML = `No, it's not a palindrome.`;
            resultDiv.appendChild(renderResult); 
         }     
 }
 //console.log(caseInsensitivePalindromeChecker("hhOhh"));

//make the button work
goButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!!");
    //return (caseInsensitivePalindromeChecker(string.value));
})
