// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
    var div = document.createElement('div');
    div.id = 'injectedEl';
	div.style.position = 'fixed';
	div.style.top = 0;
    div.style.right = 0;
    div.style.background = 'blue';
    div.style.zIndex = 2147483647;
    div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');

})();