class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.scoreElement=document.getElementById("score");
      this.livesElement=document.getElementById("lives");

      this.player = new Player(
        this.gameScreen,
        70,
        200,
        50,
        80,
        "../images/spiderman-logo.png"
      );;
      this.height = 500;  //600
      this.width = 1000;   //500 
      this.buildings = [new Building(this.gameScreen)];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.gameIntervalId;
      this.gameLoopFrequency = Math.round(1000/60); 
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      
      
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
      this.gameIntervalId = setInterval(() => {
        this.gameLoop()
      }, this.gameLoopFrequency)
    }
  
    gameLoop() {
      console.log("in the game loop");
      
      this.update();
  
      // If "gameIsOver" is set to "true" clear the interval to stop the loop
      if (this.gameIsOver) {
        clearInterval(this.gameIntervalId)
        this.gameOver()
      }
    }
  

     update() {
       this.player.move();
    //   let delay=0;
      // for (let i=0; i<1; i++) {
      //   // const buildingDelay= setTimeout(this.buildings[i].move(), delay);
      //   this.buildings[i].move();
      //   if (this.buildings[i].left< 300){
      //     this.buildings.push(new Building(this.gameScreen))
      //     this.buildings[i+1].move();
      //   }
      //   if (this.buildings[i].left< -100){
      //     console.log("good")
      //     this.buildings.splice(i,1);
      //     this.buildings[i].element.remove()
      //     // this.buildings.push(new Building(this.gameScreen))
      //   }
      //   if (this.player.didCollide(this.buildings[i])){
      //     console.log("bang")
      //   }
        
      // } 

      this.buildings.forEach((building, indexOfBuilding) =>{
        building.move();
        if (building.left< -100){
          console.log("good")
          this.buildings.splice(indexOfBuilding,1);
          building.element.remove()
          this.score ++
          this.scoreElement.innerText= this.score;
          this.buildings.push(new Building(this.gameScreen))
        }
        if (this.player.didCollide(building)){
          this.buildings.splice(indexOfBuilding,1);
          building.element.remove()
          this.lives --; 
          this.livesElement.innerText= this.lives;
          this.buildings.push(new Building(this.gameScreen))
          
          if (this.lives===0){
            this.gameIsOver= true;
          }
        }
      })
    
     }
     gameOver (){
      console.log('over')
      this.gameScreen.style.display= "none";
      this.gameEndScreen.style.display= "block";

     }

     restart (){
      this.gameIsOver= false;

      this.score = 0;
      this.lives = 3;

      this.gameEndScreen.style.display= "none";
      this.gameScreen.style.display= "block";

      this.buildings.push(new Building(this.gameScreen))

      // calling the start method
      this.start() 
     }
  }