window.onload = function() {
	hide('bbb');
}

function show(name){
	var items = document.getElementsByName(name);
	for (var i = items.length - 1; i >= 0; i--) {
		items[i].style.display = '';
	}
}

function hide(name){
	var items = document.getElementsByName(name);
	for (var i = items.length - 1; i >= 0; i--) {
		items[i].style.display = 'none';
	}
}
