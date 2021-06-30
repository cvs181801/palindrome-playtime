//grab the elements from the DOM
//const string = document.getElementById("textBox");
//const goButton = document.getElementById("go-btn");

//convert all letters to lower case.  
//Check to see if they match (use the inner 1 or 2 characters to start out both).
//if they do, return true.  If they don't return false.
let originalArray = [];

function caseInsensitivePalindromeChecker(text) {
        
       //clone the array 
       originalArray = text.toLowerCase().split("");
       const clonedArray = [...originalArray];
       //const half = originalArray.length/2 + 1;
       //const halfOriginal = originalArray.slice(0, half);
       //console.log("Half Original:", halfOriginal);
       
     //reverse the cloned array's order
       clonedArray.reverse();
       console.log("Cloned Array:", clonedArray);
       //const halfCloned = clonedArray.slice(0, half);
       console.log("Original Array:", originalArray);
       
     // check to see if the reversed cloned array matches the original array
     
         if (JSON.stringify(clonedArray) === JSON.stringify(originalArray) ) {
    //if it is, return true
             console.log(true);
             //else return false
         } else {
             console.log(false);
         }     
 }
 console.log(caseInsensitivePalindromeChecker("hhOhh"));

// //make the button work
// goButton.addEventListener('click', (e) => {
//     e.preventDefault;
//     caseInsensitivePalindromeChecker(string.value);
// })
