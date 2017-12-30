var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	
	var element = document.createElement('li'),
		max = list.getElementsByTagName('li').length;	
		
	list.appendChild(element).innerHTML = 'item ' + max;

});