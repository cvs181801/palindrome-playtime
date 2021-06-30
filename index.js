//grab the elements from the DOM
//const string = document.getElementById("textBox");
//const goButton = document.getElementById("go-btn");

//convert all letters to lower case.  
//Check to see if they match (use the inner 1 or 2 characters to start out both).
//if they do, return true.  If they don't return false.
let originalArray = [];

function caseInsensitivePalindromeChecker(text) {
        //text.toLowerCase()
        //.split("");

       //clone the array 
       originalArray = text.toLowerCase().split("");
       const clonedArray = [...originalArray];

       const halfOriginal = originalArray.slice(0, (originalArray.length + 1));
       console.log(halfOriginal);
       console.log(clonedArray);
//     //reverse the cloned array's order
       //clonedArray.reverse();
//     const halfCloned = clonedArray.slice(0, clonedArray.length + 1);
//     // check to see if the first part of the cloned array matches the first part of the original array
//     //if it is, return true
//         if (halfCloned === halfOriginal ) {
//             return true;
//             //else return false
//         } else {
//             return false;
//         }     

 }
 console.log(caseInsensitivePalindromeChecker("HFLSDDSFfdd"));

// //make the button work
// goButton.addEventListener('click', (e) => {
//     e.preventDefault;
//     caseInsensitivePalindromeChecker(string.value);
// })
