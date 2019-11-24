# grailed-collaboration-filter

This is a Chrome extension that allows users to add keywords, that will then be filtered out of search results on Grailed.com.

The use/need for this comes from the inability to filter out collaborations when browsing by designer. For example, when browsing 'Lemaire' items, it also includes Uniqlo collaboration pieces. This script will remove all items that feature Uniqlo, if requested by the user, by finding that string within the item div's .textContent and deleting the div. Thankfully, Grailed is a responsive design, so white space doesn't remain after deletion.

Once the user has ran the script, when new items are loaded they can simply press the 'r' key to remove any new items that contain the unwanted brand.

There are still some issues, such as the code not running on non-designer/brand pages and also needing to be updated to ES5 and ES6 standards. This will happen before the Chrome extension step.
