class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.userName = document.getElementById("userName");
    this.userId = document.getElementById("userId");
    this.finalScore = document.getElementById("finalScore");
    this.finalText = document.getElementById("finalText");

    this.player = new Player(
      this.gameScreen,
      70,
      200,
      90,
      90,
      "images/spiderman-logo-withoutbg4.png"
    );
    this.height = 500;
    this.width = 1000;
    this.buildings = [new Building(this.gameScreen, 1100)];
    this.buildings2 = [new Building(this.gameScreen, 1600)];
    this.hearts = [new Heart(this.gameScreen)];
    this.blackSpidermen = [new BlackSpiderman(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
// adding songs
    this.buildingCrashSong= new Audio ("./audio/crash3.wav")
    this.buildingCrashSong.volume= 0.1;
    this.octapusCrashSong= new Audio ("./audio/crash2.wav")
    this.octapusCrashSong.volume= 0.1;
    this.heartSong= new Audio ("./audio/heart.wav")
    this.heartSong.volume= 0.1;
    this.gameOverSong= new Audio ("./audio/gameover.wav")
    this.gameOverSong.volume= 0.1;
    this.backgroungSong= new Audio ("./audio/Grand-Song.mp3")
    this.backgroungSong.volume= 0.1;
  }


  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.userId.innerText = `${this.userName.value}`;

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";
    this.gameContainer.style.display ="block"

    //adding song
    this.backgroungSong.play()

    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);

    // }

  }

  gameLoop() {
    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
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
    //  first obstacle **************** 
    this.buildings.forEach((building, indexOfBuilding) => {
      building.move();

      if (building.top < 0) {
        building.directionY = 4;
        building.backmove();
      }
      if (building.top > 240) {
        building.directionY = -4;
        building.backmove();
      }
      if (this.score > 10) {
        building.highermove2();
      }else if (this.score > 3) {
        building.highermove();
      }
      if (building.left < -50) {
        this.buildings.splice(indexOfBuilding, 1);
        building.element.remove();
        this.buildings.push(new Building(this.gameScreen, 1100));
      }
      if (this.player.didCollide(building)) {
        this.buildings.splice(indexOfBuilding, 1);
        building.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
        this.buildings.push(new Building(this.gameScreen, 1100));

        // Adding Audio
        this.buildingCrashSong.play()

        if (this.lives === 0) {
          this.gameOverSong.play()
          this.gameIsOver = true;
          
        }
      }
    });
    // second obstacle ******************************
    this.buildings2.forEach((building, indexOfBuilding) => {
      building.move();

      if (building.top < 0) {
        building.directionY = 4;
        building.backmove();
      }
      if (building.top > 240) {
        building.directionY = -4;
        building.backmove();
      }
      if (this.score > 10) {
        building.highermove2();
      }else if (this.score > 4) {
        building.highermove();
      }
      if (building.left < -50) {
        this.buildings2.splice(indexOfBuilding, 1);
        building.element.remove();
        this.buildings2.push(new Building(this.gameScreen, 1600));
      }
      if (this.player.didCollide(building)) {
        this.buildings2.splice(indexOfBuilding, 1);
        building.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
        this.buildings2.push(new Building(this.gameScreen, 1600));
      // Adding Audio
        this.buildingCrashSong.play()

        if (this.lives === 0) {
          this.gameOverSong.play()
          this.gameIsOver = true;
          
        }
      }
    });

    // adding Heart *******************************
    this.hearts.forEach((heart, indexOfHeart) => {
      heart.move();

      if (heart.left < -500) {
        this.hearts.splice(indexOfHeart, 1);
        heart.element.remove();
        this.hearts.push(new Heart(this.gameScreen));
      }
      if (this.player.didCollide(heart)) {
        this.hearts.splice(indexOfHeart, 1);
        heart.element.remove();
        this.lives++;
        this.livesElement.innerText = this.lives;
        this.hearts.push(new Heart(this.gameScreen));
        this.heartSong.play()
      }
    });

    // adding blackSpiderMen **********************
    this.blackSpidermen.forEach((black, indexOfBlack) => {
      black.move();

      if (black.left < -50) {
        this.blackSpidermen.splice(indexOfBlack, 1);
        black.element.remove();
        this.blackSpidermen.push(new BlackSpiderman(this.gameScreen));
        this.score++;
        this.scoreElement.innerText = this.score;
      }
      if (this.player.didCollide(black)) {
        this.blackSpidermen.splice(indexOfBlack, 1);
        black.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
        this.blackSpidermen.push(new BlackSpiderman(this.gameScreen));
        //adding song
        this.octapusCrashSong.play();
      }
      if (this.score > 4) {
        black.highermove();
      }
      
      if (this.lives === 0) {
        this.gameOverSong.play();
        this.gameIsOver = true;
         
      }
    });

  }
  gameOver() {
    
    this.gameScreen.style.display = "none";
    this.gameContainer.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.backgroungSong.pause()

    this.finalScore.innerText = `Your Final Score: ${this.score}`

    if (this.score < 5) {
      this.finalText.innerText = "oh! you should try more...";
    }
    if (this.score < 12 && this.score >= 5) {
      this.finalText.innerText = "Good try! maybe onetime more...";
    }
    if (this.score < 18 && this.score >= 12) {
      this.finalText.innerText = "impressive! You are good at it.";
    }
    if (this.score >= 18) {
      this.finalText.innerText = "Amazing! You are the best.";
    }
  }

  restart() {

    location.reload();
  //   this.gameEndScreen.style.display = "none";
  //   this.gameScreen.style.display = "block";
  // //  this.buildings.pop();
  //  // building.element.remove();
  //   this.buildings.push(new Building(this.gameScreen, 1100));

  //  // this.buildings2.pop();
  // //  building.element.remove();
  //   this.buildings2.push(new Building(this.gameScreen, 1600));

  //  // this.hearts.pop();
  //  // heart.element.remove();
  //   this.hearts.push(new Heart(this.gameScreen));

  //  // this.blackSpidermen.pop();
  //   //black.element.remove();
  //   this.blackSpidermen.push(new BlackSpiderman(this.gameScreen));
  //   this.score = 0;
  //   this.lives = 3;
  //   this.gameIsOver = false;

  //   // calling the start method
  //   this.start();
  }
  songsPause(){
    this.buildingCrashSong.pause()
    this.backgroungSong.pause()
    this.octapusCrashSong.pause()
    this.heartSong.pause()
    this.gameOverSong.pause()
  };
}
