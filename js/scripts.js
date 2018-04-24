addElem.addEventListener('click', 
function() {
	var element = document.createElement('li');
	var itemsByTagName = document.getElementsByTagName('li');
	console.log(itemsByTagName);
	element.innerHTML = 'item ' + itemsByTagName;
	list.appendChild(element);			
});

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {});
