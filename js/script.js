window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const muteCheckBox= document.getElementById("makeMute")
    
    /// let game; // added
    const game= new Game()    //me
    startButton.addEventListener("click", function () {
      if (game.userName.value === "") {
        console.log("ooyyy")
        alert('Please enter your name!');
      }else{
      startGame();
      }
    });
    restartButton.addEventListener("click", function () {
      game.restart()

    });

  //add keyboard
  document.addEventListener("keydown", (event) =>{
    if(event.code === "ArrowUp"){
      game.player.directionY = -9;
    }else if(event.code === "ArrowDown"){
      game.player.directionY = 9;
    }else if(event.code === "ArrowRight"){
      game.player.directionX = 9;
    }else if(event.code === "ArrowLeft"){
      game.player.directionX = -9;
    }
  })
  document.addEventListener("keyup", (event) =>{
    game.player.directionX=0;
    game.player.directionY=0;

  })


    function startGame() {
      if (muteCheckBox.checked){
        console.log('pause')
         game.sound=false;
       }
      game.start(); 
    }
  };