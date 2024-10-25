const body = document.body

// CREATE & UPDATE ELEMENTS
body.append('You can append strings directly with .append()','. appendChild() can only append tags/nodes') 

const div = document.createElement('div')
// Two types to append an element
body.append(div) // This is more versatile as you can append multiple elements at once and can append strings
// body.appendChild(div)

// Two types of inserting text to an element
div.innerText = '.innerText does not take into account the whitespace and line breaks' 
div.textContent = '.textContent takes into account the whitespace and line breaks'

const div1 = document.querySelector('.div-showing-difference-of-textContent-and-innerText')
console.log(div1.textContent)
console.log(div1.innerText)

// Another type of inserting text to an element with HTML rendering
// But security wise, it is not recommended to use this method as it can be used to inject malicious code
div.innerHTML = '<strong>.innerHTML can render HTML tags, along with text</strong>'

const strong = document.createElement('strong')
div.append(strong)
strong.innerText = ' Another method of inserting text to an element with HTML rendering is by creating a new element and appending it to the parent element'


// DELETE ELEMENTS
const div2 = document.querySelector('.div-showing-difference-of-textContent-and-innerText')
const spanMorning = document.querySelector('#morning')
const spanNight = document.querySelector('#night')

// Types of deleting elements
// using .remove() method which deletes the element from the DOM, more versatile
// spanNight.remove() // Removes the element from the DOM

// using .removeChild() method which deletes the element from the parent element
// div2.removeChild(spanNight) // Removes the element from the parent element


// GETTING & SETTING ATTRIBUTES
// Both methods are used to get either by .getAttribute() or by .attributeName
// getAttribute() is more versatile as you can get any attribute and readable
// Getting
console.log(spanMorning.getAttribute('id')) // morning
console.log(spanMorning.id) // morning

console.log(spanMorning.getAttribute('title')) // time
console.log(spanMorning.title) // time


// Setting
spanMorning.setAttribute('title', 'おはよう') // Sets the title attribute to 'morning'
console.log(spanMorning.getAttribute('title')) // おはよう
spanMorning.setAttribute('style', 'color: orangered') // Sets the style attribute to 'color: red'

spanNight.setAttribute('title', 'こんばんは') // Sets the title attribute to 'night'
console.log(spanNight.getAttribute('title')) // こんばんは
spanNight.setAttribute('style', 'color: darkblue') // Sets the style attribute to 'color: blue'


// Removing attributes
spanMorning.setAttribute('class', 'Ohayō') // Sets the class attribute to 'morning'
console.log(spanMorning.getAttribute('class')) // Ohayō
spanMorning.removeAttribute('class') // Removes the class attribute


// Data attributes
// Data attributes are used to store custom data private to the page or application
// It is used to store data that is not visible to the user
console.log(spanMorning.dataset) // {text: 'Good Morning', number: '1'}
console.log(spanMorning.dataset.text) // Good Morning
console.log(spanMorning.dataset.number) // 1
console.log(spanNight.dataset) // {text: 'Good Night', number: '2'}

spanMorning.dataset.time = "6:00 am"
console.log(spanMorning.dataset.time) // 6:00 am

spanNight.removeAttribute('data-time') // Removes the data-number attribute
console.log(spanNight.dataset.time) // undefined

// ClassList
spanMorning.classList.remove('greetings') // Removes the class greetings
spanMorning.classList.add('greetings-for-morning') // Adds the class greetings-for-morning
spanNight.classList.remove('greetings') // Removes the class greetings
spanNight.classList.add('greetings-for-night') // Adds the class greetings-for-night


function changeColor() {
    const divRed = document.querySelector('.div-red')
    divRed.classList.toggle('div-blue')

}