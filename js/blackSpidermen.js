class BlackSpiderman {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 2500;
      this.blackPositions= [30,100,200,300,400,420];
     //this.buldingPositions= [50];
      this.top = this.blackPositions[Math.floor(Math.random()*this.blackPositions.length)];
      this.width = 70;
      this.height = 100;

      this.directionX = -8;
       //this.directionY = -4;

      this.element = document.createElement("img");
  
      this.element.src = "./images/octapus6.png";
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
      this.left += -5;
      //this.top+= this.directionY;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
    highermove() {
      // Move the obstacle 
      this.left += -8;
      //this.top+= this.directionY;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }
