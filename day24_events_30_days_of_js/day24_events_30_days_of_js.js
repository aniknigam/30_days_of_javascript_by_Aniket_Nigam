/*
JavaScript Events
The change in the state of an object is known as an Event. In html, 
there are various events which represents that some activity is performed by the user or by the browser.
 When javascript code is included in HTML, js react over these events and allow the execution. 
 This process of reacting over the events is called Event Handling. 
 Thus, js handles the HTML events via Event Handlers

 JavaScript Events

The change in the state of an object is known as an Event. In html, there are various events which 
represents that some activity is performed by the user or by the browser. When javascript code is
 included in HTML, js react over these events and allow the execution. This process of reacting over
  the events is called Event Handling. Thus, js handles the HTML events via Event Handlers

  Mouse events:
Event Performed	       Event Handler	                      Description
click	                 onclick	         When mouse click on an element
mouseover              	onmouseover	         When the cursor of the mouse comes over the element
mouseout	            onmouseout	         When the cursor of the mouse leaves an element
mousedown	            onmousedown	         When the mouse button is pressed over the element
mouseup             	onmouseup	         When the mouse button is released over the element
mousemove	            onmousemove	         When the mouse movement takes place.




Keyboard events:
Event Performed	        Event Handler	                       Description
Keydown & Keyup	       onkeydown & onkeyup	     When the user press and then release the key


Form events:
Event Performed	        Event Handler	                        Description
focus	                onfocus	             When the user focuses on an element 
submit                 	onsubmit               	When the user submits the form
blur                    onblur	                 When the focus is away from a form element
change                	onchange	             When the user modifies or changes the value of a form element


Window/Document events
Event Performed	         Event Handler                         	Description
load	                    onload	              When the browser finishes the loading of the page
unload                  	onunload	          When the visitor leaves the current webpage, the browser unloads it
resize	                    onresize	          When the visitor resizes the window of the browser

*/


//example

tap = () =>{
    alert("this is onclick event");
}

over = () =>{
    alert("this is displayed by onmouseover() event ");
}

f = () => {
    document.getElementById("focus").style.background = "blue";
}

function keydownevent()
	{
		document.getElementById("input1");
		alert("Pressed a key");
	}