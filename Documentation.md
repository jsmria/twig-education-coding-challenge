# Documentation

## **why?**

I chose to create a React Web Application because that's is what i use daily at work. It also lets me showcase my JavaScript skills, as encouraged in the coding challenge spec. I wanted to be able to show off what i could do to the best of my abilities, using technology that was relevant, as well as what was familar to me.

## **how?**

To setup the project, i copied the setup we usually have for our in house projects. We use a few different packages:

- Prettier
- EsLint
- Babel

I use prettier because it allows me to format code cleanly and consistently.

EsLint is used to make sure that all of my code follows the preset rules that i've set up. It also catches and spelling mistakes or errors that i may make in my code that would cause it to crash or not build.

Babel is what i decided on to compile my code. I used this because i had recently created a project with some tutorials that used it and i found it was fitting for this.

In the Project, there are two classes: `App.js` and `ArraySeparator.js`.

#### `index.html`

The index is the main page. This includes the style, as well as the script to run the `App.js`.

#### `App.js`

The `App.js` is the main class. It is what is called to render when the project is build. It contains the `ArraySeparator.js` - which makes it appear on the home screen. This is where routing would go in bigger projects, but since mine is small i decided to just have the `ArraySeparator.js` on the main page.

#### `ArraySeparator.js`

The `ArraySeparator.js` class is where all of the code happens. This class contains the form where the user will input a number, as well as display the results, and it also contains the function that calculates the array.

The class first renders the form, which will allow for the user to input a number between 1-5 to separate the array into.

When this is inserted the `validation` function is called. This ensures that the input is a number between 1-5. It will not allow under or over 5, as well as letters or special characters. This was done to ensure that there would be no errors / breaking the code.

After the input is verified, the submit button becomes available to press. When this is pressed, the Split Array Function is called.

In the `SplitArray` function, the array is firsty created containing 5 objects. Then, another empty array is created to house the new data.

After this, ive implemented a `while loop`. While the array is over 0, it will run this code.

Inside the `while loop`, we get the size of the array and then slice the array into that size.

After this, we push the data into the new empty array and slice the information off the end of the array to make it smaller.

This will mean that the array will get smaller until it hits 0, and knows its done.

Then the data is returned using a hook and displayed onto the form for the user to see.

#### `style.css`

The `style.css` was found online, for free use under CC 3.0 by colorlib.com. I altered this slightly to match what i needed. I wanted to focus on the JavaScript but also have a good looking form, so i used this.
