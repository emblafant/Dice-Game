
const dieRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const setUnsavedPoints = () => {
  unsavedPointsText.innerText = "Unsaved Points: " + unsavedPoints;
}

const setImage = (roll) => {
  switch (roll) {
    case 1:
      pictureDie.src="https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-1-Showing.png";
      break;
    case 2:
      pictureDie.src="https://library.kissclipart.com/20180830/guq/kissclipart-two-side-dice-clipart-mooncake-festival-dice-game-62346bb197dbbdad.png";
      break;
    case 3:
      pictureDie.src="https://studio.code.org/v3/assets/F5bM9CyOhEbcrMJQSErM39UAxbOe_SAmetng82HrKuE/1000px-Dice-3-b.svg.png";
      break;
    case 4:
      pictureDie.src="https://lh3.googleusercontent.com/proxy/Nx0MZJHYEhwyePwZhJJtOWCz10qeDKdwaj7SOvkK9l_o_poUQDp5XF07NdC3Vf52jVcesDDvUh_lIyy1J767HUwrTVmuKS1o_IIslL7AmZ9w";
      break;
    case 5:
      pictureDie.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png";
      break;
    case 6:
      pictureDie.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/557px-Dice-6-b.svg.png";
      break;
    default:
      pictureDie.src="https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-1-Showing.png";
  }

}

const pictureDie = document.querySelector("#picture-die");
const savePointsButton = document.querySelector("#save-button");

const savedPointsText = document.querySelector("#saved-points");
const unsavedPointsText = document.querySelector("#unsaved-points");
const remainingMovesText = document.querySelector("#remaining-moves");

const gameDiv = document.querySelector("#game-div");
const resultDiv = document.querySelector("#result-div");

let savedPoints = 0;
let unsavedPoints = 0;
let remainingMoves = 20;


pictureDie.addEventListener("click", () => {
  remainingMoves--;
  remainingMovesText.innerText = "Remaining moves: " + remainingMoves;

  const currentRoll = dieRoll();
  setImage(currentRoll);

  if (currentRoll === 6) {
    unsavedPoints *= 2;
  } else if (currentRoll === 1) {
    unsavedPoints = 0;
  } else {
    unsavedPoints += currentRoll;
  };
  setUnsavedPoints();

  
  if (remainingMoves === 0) {
    gameDiv.innerHTML = "";
    const totalScore = document.createElement("h2");
    totalScore.innerText = "Total Score: " + (savedPoints + unsavedPoints);
    const resetButton = document.createElement("button");
    resetButton.innerText = "Play Again";
    
    resultDiv.appendChild(totalScore);
    resultDiv.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      location.reload();
    });
  };
});


savePointsButton.addEventListener("click", () => {
  savedPoints += unsavedPoints;
  unsavedPoints = 0;
  savedPointsText.innerText = "Saved Points: " + savedPoints;
  setUnsavedPoints();
});



