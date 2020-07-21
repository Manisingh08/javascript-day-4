var playername1 = prompt('Player name 1');
var playerage1 = prompt('age = ')
var playername2 = prompt('Player name 2');
var playerage2 = prompt('age = ')

console.log('The player 1 name is' +playername1+ ' and Age is' +playerage1+ '.' );
console.log('The player 2 name is' +playername2+ ' and Age is' +playerage2+ '.' );

setTimeout(function call() 
{
	var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	console.log('dice ' +randomNumber1+ '.');
	console.log('dice ' +randomNumber2+ '.');

	if (randomNumber1 === randomNumber2)
		console.log("Draw.");
	else if(randomNumber1 < randomNumber2)
		console.log("player =" +playername2 + " Win");
	else
		console.log("player =" +playername1 + " Win");
	
	var r = confirm("Restart game");
        if (r == true) { 
			call();
        } 

        else {
            console.log("game over");
        }

   
});

        