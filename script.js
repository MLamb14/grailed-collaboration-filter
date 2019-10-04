let feedItems = document.getElementsByClassName("feed-item");

function checkText(feedIndex, wordToCheck) {
    console.log(feedItems);
    if (feedItems[feedIndex].textContent.includes(wordToCheck)) {
        console.log("True");
    } else {
        console.log("No dice");
    }
}

// Steps needed:
// Add in the delete div bit after the if check
// make a foreach loop to apply the function to all the divs 
// test it!