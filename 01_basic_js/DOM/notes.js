// Methods of document object
// We can access and change the contents of document by its methods.

// The important methods of document object are as follows:

// Method	Description
// write("string")	writes the given string on the doucment.
// writeln("string")	writes the given string on the doucment with newline character at the end.
// getElementById()	returns the element having the given id value.
// getElementsByName()	returns all the elements having the given name value.
// getElementsByTagName()	returns all the elements having the given tag name.
// getElementsByClassName()	returns all the elements having the given class name.
/**
 The HTML DOM Document Object
The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.

Finding HTML Elements
Method	Description
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
Changing HTML Elements
Property	Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
Adding and Deleting Elements
Method	Description
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
 */


