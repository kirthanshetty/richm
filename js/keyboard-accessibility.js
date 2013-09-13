if (typeof(_richemontCareers) != 'object') {
	_richemontCareers = {};
}

_richemontCareers.KeyboardAccess = function(container, handlers){
	/*
	* Dummy input to handle keypress
	*/
	var keyHandler =  $('<input>',{
		'type':'text',
		'css': {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			opacity: 0
		}
	});
	// append it to the container
	container.append(keyHandler);
	
	// Make sure the dummy input is focused if the container or any child element get focus
	container.click(function(){ keyHandler.focus(); });
	container.focus(function(){ keyHandler.focus(); });
	// container.find('*').focus(function(){ 
	// 	if(!keyHandler.is(':focus')) 
	// 		keyHandler.focus(); 
	// });

	// Add a class to the container to show the focus outline
	keyHandler.focus(function() {
		container.addClass('focused');
	}).blur(function() {
		container.removeClass('focused')
	});;

	// Handle keypress events. Handlers is an object, with keycodes as keys and 
	// relevant functions
	keyHandler.keypress(function(e) {
		var key = e.which || e.keyCode;
		if(handlers[key]){
			handlers[key]();
		}
	});
}

// General keycodes for easy access.
_richemontCareers.KeyCodes = {
    SPACE:        32 ,
    ENTER:        13 ,
    TAB:          9  ,
    BACKSPACE:    8  ,
    SHIFT:        16 ,
    CTRL:         17 ,
    ALT:          18 ,
    CAPS_LOCK:    20 ,
    NUM_LOCK:     144,
    SCROLL_LOCK:  145,
    LEFT:         37 ,
    UP:           38 ,
    RIGHT:        39 ,
    DOWN:         40 ,
    PAGE_UP:      33 ,
    PAGE_DOWN:    34 ,
    HOME:         36 ,
    END:          35 ,
    INSERT:       45 ,
    DELETE:       46 ,
    ESCAPE:       27 ,
    PAUSE:        19
}