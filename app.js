/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
// create a function to be called when the DOM loads
function changePicture()
{
	//Repalce the img tag with the new one. *NOTE this will change all img tags.
	$('img').replaceWith('<img src="http://lorempixel.com/350/150/animals/" alt="Placeholder Image">');
}
$(changePicture);