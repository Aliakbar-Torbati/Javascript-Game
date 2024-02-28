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
      
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }

    move() {
      //game.player.directionX=0;
      if (this.left < 0){
        this.directionX=0;
        this.left=1;
      }
      if (this.left >= 920){
        this.directionX=0;
        this.left=919;
      }
      if (this.top <= 0){
        this.directionY=0;
        this.top=1;
      }
      if (this.top > 450){
        this.directionY=0;
        this.top=449;
      }


        // if(this.left >= 0){
         this.left += this.directionX;
        // }
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