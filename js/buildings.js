class Building {
    constructor(gameScreen, left) {
      this.gameScreen = gameScreen;
      this.left = left;
      // this.buldingPositions= [50,100,200,300,400,500];
      this.buldingPositions= [50];
      this.top = this.buldingPositions[Math.floor(Math.random()*this.buldingPositions.length)];
      this.width = 30;
      this.height = 300;

    //   this.directionX = 0;
       this.directionY = -4;

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
      // Move the obstacle 
      this.left += -1.5;
      this.top+= this.directionY;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
    highermove(){
      this.left += -2;
      this.updatePosition();
    }

    highermove2(){
      this.left += -3.5;
      this.updatePosition();
    }

    backmove(){
      this.top+= this.directionY;
      this.updatePosition();
    }
  }
