class Menu {
    constructor(element) {

        //Assign this.element to the menu element
        this.element = element;

        //Get the element with the '.menu-button' class 
        this.button = this.element.querySelector('.menu-button');

        //Assign the reference to the '.menu-content' class found
        //in the menu element
        this.content = this.element.querySelector('.menu-content');

        //Add a click handler to the button reference and call the 
        //toggleContent method

        this.button.addEventListener('click', ()=>{
            this.toggleContent();
        })
    }

    toggleContent() {

        //Toggle the '.menu-hidden' class off and on
        this.content.classList.toggle('menu-hidden');
    }
}

//Get the '.menu' element

let menu = document.querySelectorAll('.menu');

//Map the element with a new instance of Menu 

menu = Array.from(menu).map( item => new Menu(item));