window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    /// let game; // added
    const game= new Game()    //me
    startButton.addEventListener("click", function () {
      startGame();
    });
    restartButton.addEventListener("click", function () {
      game.restart()

    });

  //add keyboard
  document.addEventListener("keydown", (event) =>{
    if(event.code === "ArrowUp"){
      game.player.directionY = -5;
    }else if(event.code === "ArrowDown"){
      game.player.directionY = 5;
    }else if(event.code === "ArrowRight"){
      game.player.directionX = 5;
    }else if(event.code === "ArrowLeft"){
      game.player.directionX = -5;
    }
  })
  document.addEventListener("keyup", (event) =>{
    game.player.directionX=0;
    game.player.directionY=0;

  })


    function startGame() {
      console.log("start game");
     // game = new Game(); // added
  
      game.start(); // added
    }
  };