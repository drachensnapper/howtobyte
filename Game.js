//==================================================================================================
// Game class
// Game logic
// implemented as singleton pattern.
//==================================================================================================

var Game = new function()
{
	var challengeNumber, solutionNumber;
	
	function generateRandomChallengeNumber() {
		challengeNumber = Math.floor( Math.random() * 256 );
	}
	
	function verifySolution() {
		if( challengeNumber == solutionNumber) {
			document.getElementById('output').innerHTML = 'correct';
		} else {
			document.getElementById('output').innerHTML = 'wrong';
		}
	}
	
	this.generateDec = function() {
		generateRandomChallengeNumber();
		document.getElementById('challenge_number').innerHTML = challengeNumber;
	}
	
	this.generateBin = function() {
		generateRandomChallengeNumber();
		document.getElementById('challenge_number').innerHTML = Brain.dec2bin( challengeNumber );
	}
	
	this.generateHex = function() {
		generateRandomChallengeNumber();
		document.getElementById('challenge_number').innerHTML = Brain.dec2hex( challengeNumber );
	}
	
	this.generateAscii = function() {
		generateRandomChallengeNumber();
		document.getElementById('challenge_number').innerHTML = Brain.dec2ascii( challengeNumber );
	}
		
	this.solutionDec = function() {
		solutionNumber = document.getElementById('input_dec').value;
		verifySolution();
	}
	
	this.solutionBin = function() {
		solutionNumber = Brain.bin2dec( document.getElementById('input_bin').value );
		verifySolution();
	}
	
	this.solutionHex = function() {
		solutionNumber = Brain.hex2dec( document.getElementById('input_hex').value );
		verifySolution();
	}
	
	this.solutionAscii = function() {
		solutionNumber = Brain.ascii2dec( document.getElementById('input_ascii').value );
		verifySolution();
	}
		
}
