let staffPicks = document.getElementsByClassName("Module--ListingsFromFeed");
let feedItems = document.getElementsByClassName("feed-item");
let feedItemsLoopIndex = feedItems.length - 1; //has to be 1 less than length as the array starts at 0

function deleteStaff () {
    staffPicks[0].parentElement.removeChild(staffPicks[0]);
    feedItemsLoopIndex = feedItems.length - 1;
}
// Currently need to call this function before performing the for loop

function checkText(feedIndex, wordToCheck) {
    if (feedItems[feedIndex].textContent.includes(wordToCheck)) {
        feedItems[feedIndex].parentNode.removeChild(feedItems[feedIndex]);
    }
}

function checkTextLoop () {
    let brandToAvoid = prompt("What brand would you like to remove?");
    feedItemsLoopIndex = feedItems.length - 1;
    for (let i = feedItemsLoopIndex; i > -1; i--) {
    checkText(i, brandToAvoid);
    console.log(i);
    }
}

// Steps needed:
// make a foreach loop to apply the function to all the divs 
// test it!