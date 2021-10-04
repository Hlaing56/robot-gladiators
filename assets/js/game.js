// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 12;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;


var fight = function(may) {
      
    while(playerHealth>0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
            }
        }   


            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + may + ". " + may + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(may + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;
            break;
            } else {
            window.alert(may + " still has " + enemyHealth + " health left.");
            }
        
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(may + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
        
            // check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        
    //end of while loop
    }
}
  
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
}