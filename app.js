/*
* I'm useing this as a template to hold my jQuery notes 
* If you are reading this please check out.
*
* https://classroom.udacity.com/courses/ud245
* 
* The above course is great for strating out with jQery





This was the last quiz of lesson 3 
*/
// create a function to be called when the DOM loads
function changePicture()
{
	//Repalce the img tag with the new one. *NOTE this will change all img tags.
	$('img').replaceWith('<img src="http://lorempixel.com/350/150/animals/" alt="Placeholder Image">');
}
$(changePicture);