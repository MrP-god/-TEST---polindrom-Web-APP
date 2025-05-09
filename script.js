const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function displayResult(isPolindrom){
    resultText.style.display = "block";
    if(isPolindrom){
        resultText.innerText = `${inputText.value} is a palindrome`;
    } else {
        resultText.innerText = `${inputText.value} is not a palindrome`;
    }
};


function isPalindrome(str){
    // here all the concition to check if is a palindrome

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(`${cleanStr}`);
    return cleanStr === cleanStr.split('').reverse().join('');
};




checkButton.addEventListener("click", () => {
    // check if there is a value in the text field if not trow
    // error
    if(inputText.value === ""){
        alert("Please input a value");
        return
    }


    const result = isPalindrome(inputText.value);
    displayResult(result);
});