class Building {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      //this.left = Math.floor(Math.random() * 300 + 70);
      this.left = 1100;
      this.top = 15;
      this.width = 50;
      this.height = 400;

    //   this.directionX = 0;
    //   this.directionY = 0;

      this.element = document.createElement("img");
  
      this.element.src = "./images/building-1.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      // Update the obstacle's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the obstacle down by 3px
      this.left += -3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }