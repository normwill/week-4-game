$(document).ready(function() {
	var Random = Math.floor(Math.random()* 101 + 19)
	// Chooses a random number to be shown at the beginning of the game
	// Random number is between 19-120
	$('#randomNumber').text(Random);
	//
	var num1 = Math.floor(Math.random()* 11 + 1)
	var num2 = Math.floor(Math.random()* 11 + 1)
	var num3 = Math.floor(Math.random()* 11 + 1)
	var num4 = Math.floor(Math.random()* 11 + 1)
	//
	//
	//
	var userTotal = 0;
	var wins = 0;
	var losses = 0;
	//
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);
	// reset function
	function reset() {
		Random = Math.floor(Math.random()* 101 + 19);
		console.log(Random);
		$('#randomNumber').text(Random);
		num1 = Math.floor(Math.random()* 11 + 1);
		num2 = Math.floor(Math.random()* 11 + 1);
		num3 = Math.floor(Math.random()* 11 + 1);
		num4 = Math.floor(Math.random()* 11 + 1);
		userTotal = 0;
		$('#finalTotal').text(userTotal);
	}
		//
	function congratulations() {
	alert("You won!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}
	//
	function loser() {
	alert("You lose!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}
		$('#red').on ('click', function(){
			userTotal = userTotal + num1;
			console.log("New userTotal = " + userTotal);
			$('#finalTotal').text(userTotal);
			//
			if (userTotal == Random) {
				congratulations();
			}
			else if (userTotal > Random){
				loser();
			}	
		})
		$('#blue').on ('click', function(){
			userTotal = userTotal + num2;
			console.log("New userTotal = " + userTotal);
			$('#finalTotal').text(userTotal);
			if (userTotal == Random){
				congratulations();
			}
				else if (userTotal > Random) {
					loser();
				}
			
		})
		$('#yellow').on ('click', function() {
			userTotal = userTotal+ num3;
			console.log("New userTotal = " + userTotal);
			$('#finalTotal').text(userTotal);
			//
			if (userTotal == Random) {
				congratulations();
			} else if (userTotal > Random) {
				loser();
			}
		})
		$('#green').on ('click', function() {
			userTotal = userTotal + num4;
			console.log("New userTotal= " + userTotal);
			$('#finalTotal').text(userTotal);
			if (userTotal == Random) {
				congratulations();
			}
			else if (userTotal > Random){
				loser();
			} 
			
		
			
			
		
	
});
});


















