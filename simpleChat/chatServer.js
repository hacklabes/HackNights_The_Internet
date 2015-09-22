//based on https://gist.github.com/creationix/707146

/*jslint node: true */
var net = require('net');
var ip = require("ip");

// Keep track of the chat clients
var clients = [];

var port = 5000;

if(process.argv[2]){
	port = process.argv[2];
}

console.log("This is my IP:" + ip.address());

// Start a TCP Server
net.createServer(function (socket) {
	
	// Identify this client
	socket.name = socket.remoteAddress + ":" + socket.remotePort;

	// Put this new client in the list
	clients.push(socket);

	// Send a nice welcome message and announce
	socket.write("Welcome " + socket.name + "\n");
	broadcast(socket.name + " joined the chat\n", socket);

	// Handle incoming messages from clients.
	socket.on('data', function (data) {
		var rData = data.toString('utf8');

		if(rData.split(">")[0] == "name"){
				var newName = rData.split(">")[1];
				broadcast(socket.name + " now :" + newName);
				socket.name = newName;
				return;
		}
		broadcast(socket.name + " : " + rData, socket);
	});

	// Remove the client from the list when it leaves
	socket.on('end', function () {
		clients.splice(clients.indexOf(socket), 1);
		broadcast(socket.name + " left the chat.\n");
		
	});
	// Send a message to all clients
	function broadcast(message, sender) {
	clients.forEach(function (client) {
		// Don't want to send it to sender
		if (client === sender) return;
		
		client.write(message);
	});
	// Log it to the server output too
	process.stdout.write(message);
	}

}).listen(port);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port " + port + "\n");