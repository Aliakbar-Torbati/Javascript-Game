class Player {
    constructor(gameScreen, playerLeft, playerTop, playerWidth, playerHeight, imgSrc) {
      this.gameScreen = gameScreen;
      this.left = playerLeft;
      this.top = playerTop;
      this.width = playerWidth;
      this.height = playerHeight;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.element.src = imgSrc;
      
      this.element.style.position = "absolute";
      // Set up the default element's property values
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }

    move() {
        // Update player's car position based on directionX and directionY
        if(this.left >= 50){
        this.left += this.directionX;
        }
        this.top += this.directionY;



        this.updatePosition(); 
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

      didCollide(building) {
        const playerRect = this.element.getBoundingClientRect();
        const buildingRect = building.element.getBoundingClientRect();
    
        if (
          playerRect.left < buildingRect.right &&
          playerRect.right > buildingRect.left &&
          playerRect.top < buildingRect.bottom &&
          playerRect.bottom > buildingRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }

}