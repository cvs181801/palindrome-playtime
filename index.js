//grab the elements from the DOM
const string = document.getElementById("textBox");
const goButton = document.getElementById("go-btn");

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
             console.log(true);
             //else return false
         } else {
             console.log(false);
         }     
 }
 //console.log(caseInsensitivePalindromeChecker("hhOhh"));

//make the button work
goButton.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('it worked!!');
    return caseInsensitivePalindromeChecker(string.value);
})
