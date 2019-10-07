let staffPicks = document.getElementsByClassName("Module--ListingsFromFeed");
let feedItems = document.getElementsByClassName("feed-item");
let feedItemsLoopIndex = feedItems.length - 1; //has to be 1 less than length as the array starts at 0
let brandToAvoid = null;
let allCapsBrand = null;

function deleteStaff () {
    staffPicks[0].parentElement.removeChild(staffPicks[0]);
}
// Deletes the Staff Picks carousel so main feed can start at array index 0

function checkText(feedIndex, wordToCheck, allCapsCheck) {
    if (feedItems[feedIndex].textContent.includes(wordToCheck)) {
        feedItems[feedIndex].parentNode.removeChild(feedItems[feedIndex]);
    } else if (feedItems[feedIndex].textContent.includes(allCapsCheck)) {
        feedItems[feedIndex].parentNode.removeChild(feedItems[feedIndex]);
    } 
}

function checkTextLoop () {
    deleteStaff();
    brandToAvoid = prompt("Which brand would you like to remove? (Case-sensitive, but all caps version will also be tested)");
    allCapsBrand = brandToAvoid.toUpperCase();
    feedItemsLoopIndex = feedItems.length - 1;
    for (let i = feedItemsLoopIndex; i > -1; i--) {
    checkText(i, brandToAvoid, allCapsBrand); }
}

function refresh (event) {
    if(event.keyCode == 82){
    feedItemsLoopIndex = feedItems.length - 1;
    for (let i = feedItemsLoopIndex; i > -1; i--) {
    checkText(i, brandToAvoid, allCapsBrand);
    console.log(i); }
    }
}

document.addEventListener('keydown', refresh);

checkTextLoop();