var list = document.getElementById('list');
var add = document.getElementById('addElem');
var temp = 1;

addElem.addEventListener('click', 
function() {
	var element = document.createElement('li');
	var itemsByTagName = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + temp++;
	list.appendChild(element);			
});
