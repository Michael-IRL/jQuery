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

//add the variables 
var listElements;
var articleItems;
var nav;

// get all the list elements on a page and print them to the console
listElements = $("li");
console.log(listElements);

//get all the elements with article item as there class and print them to the console
articleItems = $(".article-item");
console.log(articleItems);

//get all the nav elements on the page by there id and print them to the console
nav = $('#nav');
console.log(nav);

/**  DOM navigation how to traverse the DOM using jQery selectors **/
//get the element with areticle-list as it's class.
var articleList = $('.article-list');

// get the element with tag h1 that is the sibling (same layer with the same parent)
// of the element that has class article-list.
var h1 = articleList.siblings("h1");

// get all the element that are offspring of article-list, and also get there offsping and so on
// must have a selector paramitor passed to it '*' is the wild card.
var kids = articleList.find("*");

// get the immediate offsping of the element with article-list as it's class.
var children = articleList.children();

// get all the ancestors of the element with class article-list
var parents = articleList.parents("div");

// get the immediate parent of the element with class article-list
var mom = articleList.parent();

// print of all the element lists that where found by traversal
console.log(h1);
console.log(kids);
console.log(children);
console.log(parents);
console.log(mom);

/**  Use jQuery to manipulate the DOM   **/
// use toggleClass to toggle a class on and off an element.
// get the element that has the class featured. Print it's state 
var featuredArticle = $(".featured");
console.log(featuredArticle);

// toggle the class on the element.
featuredArticle.toggleClass("featured");

// use .next() to find the featuredArticles next sibling. Print it's state
var article3 = featuredArticle.next();
console.log(article3);

// toggle the calss featured on to article 3 
article3.toggleClass("featured");

// print both elements state now
console.log(featuredArticle);
console.log(article3);

// use .first() to get the first link 
var navList = $("a").first();

// use .attr() to add a key value pair to the element in navList. Print the state
navList.attr("href", "#1");
console.log(navList);

// get the next sibling to article3
var article4 = article3.next();

// Use .css() to alter a style key pair.
// ** This is bad pratice, always try to solve with css or javascript.
article4.css("font-size", "20px");

