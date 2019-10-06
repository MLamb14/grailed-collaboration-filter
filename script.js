let staffPicks = document.getElementsByClassName("Module--ListingsFromFeed");
let feedItems = document.getElementsByClassName("feed-item");

function deleteStaff () {
    staffPicks[0].parentElement.removeChild(staffPicks[0]);
}
// Currently need to call this function before performing the for loop

function checkText(feedIndex, wordToCheck) {
    if (feedItems[feedIndex].textContent.includes(wordToCheck)) {
        feedItems[feedIndex].parentNode.removeChild(feedItems[feedIndex]);
    }
}

for (let i = 0; i < feedItems.length; i++) {
    checkText(i, "Uniqlo");
    console.log(i);
}

// Steps needed:
// make a foreach loop to apply the function to all the divs 
// test it!