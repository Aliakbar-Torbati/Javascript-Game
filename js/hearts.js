class Heart {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 2500;
      this.heartPositions= [20,100,200,300,400,470];
     //this.buldingPositions= [50];
      this.top = this.heartPositions[Math.floor(Math.random()*this.heartPositions.length)];
      this.width = 50;
      this.height = 50;

      this.directionX = -2;
       //this.directionY = -4;

      this.element = document.createElement("img");
  
      this.element.src = "./images/heart3.png";
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
      // Move the obstacle 
      this.left += -3;
      //this.top+= this.directionY;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }
