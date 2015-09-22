/*jslint node: true */

var net = require('net');

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


rl.setPrompt('CHAT> ');

var client = new net.Socket();
var serverIP = process.argv[2];
 

if(serverIP === undefined){
	console.log("Error: insert Server IP Address");
	process.exit(1);
}

rl.question("Please insert your name:", function(answer) {
	//connect when user insert their name
	client.connect(5000, serverIP, function() {
		client.write("name>" + answer);
		console.log('Connected\n');
	    rl.prompt();
	});
});



client.on('data', function(data) {
	var rData = data.toString('utf8');
	console.log("\n");
	console.log(rData);
	rl.prompt();

});

client.on('close', function() {
	console.log('Connection closed');
});

//for every new line come to her
rl.on('line', function(line) {
	
  switch(line.trim()) {
    case 'exit': //if you write exit and press enter, exit
	  client.destroy(); // kill client after server's response
	  rl.close();
      break;
    default:
      client.write(line);// it sends to client	  
	  break;
  }
  rl.prompt(); //go to read a new line
	
}).on('close', function() { //if you press control C
	
  console.log('Have a great day!');
  process.exit(0);
	
});