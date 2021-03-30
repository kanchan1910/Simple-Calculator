let screen = document.getElementById('screen');
/*The getElementById() method returns the element that has the ID attribute with the specified value.*/
/*The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s)*/
buttons = document.querySelectorAll('button');
/*The document.addEventListener() method attaches an event handler to the document.*/
let screenValue = '';
/*e.target is the bottpn which is clicked and e.target.innerhtml is the text of that target element*/
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') 
        {
/*The eval() function evaluates or executes an argument.*/
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'X')
        {
        	buttonText = '*';
        	screenValue += buttonText;
        	screen.value =  screenValue;
        }
        else 
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}




