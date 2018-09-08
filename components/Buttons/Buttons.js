class ButtonLink {
    constructor(element) {
      this.element = element;
  
      //Get the custom dataset attribute on the button link
      this.data = this.element.dataset.button;
      console.log(`this.data is ${this.data}`);
      //expect 1, 2, 3, 4
  
      //Using the custom dataset attribute, access its associated
      //button info element
      this.buttonInfo = document.querySelector(
        `.button-info[data-button="${this.data}"]`
      );
      console.log(`this.buttonInfo is ${this.buttonInfo}`);
      //expect this.buttonInfo is [object HTMLDivElement]
  
      //Using the buttonInfo element, create a new instance of the
      //ButtonInfo class
  
      this.buttonItem = new ButtonInfo(this.buttonInfo);
      console.log(`this.buttonItem is ${this.buttonItem}`);
      //expect this.buttonItem is [object Object]
  
      //Add a click handler to the button reference and call
      //the select method on click
  
      this.element.addEventListener("click", () => {
        this.select();
      });
    }
  
    select() {
      //Get all of the elements with the button class
      const buttons = document.querySelectorAll(".button");
  
      //Create an array. Use forEach to remove the 'button-selected'
      //class from each element
      Array.from(buttons).forEach(function(item) {
        item.classList.remove("button-selected");
      });
      this.element.classList.add("button-selected");
  
      this.buttonItem.select();
  
      //Add a class named "button-selected" to this element
  
      //Call the select method on the item associated with this link
    }
  }
  
  class ButtonInfo {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      //Select all button-info elements from the DOM
      const buttonInfo = document.querySelectorAll(".button-info");
  
      //Remove the class "button-info-selected" from each element
      buttonInfo.forEach(function(item) {
        item.classList.remove("button-info-selected");
      });
      this.element.classList.add("button-info-selected");
  
      //Add a class named "button-info-selected" to this element
    }
  }
  
  //START HERE
  // Create a reference to all the ".button" class elements
  let links = document.querySelectorAll(".button");
  
  //Iterate through an array with a new instance of the ButtonLink
  //class for each item
  links = Array.from(links).map(item => {
    return new ButtonLink(item);
  });
  
  //LAST: Once you have created an array of Tablink instances, call
  //select() on the first item in the array
  links[0].select();
  