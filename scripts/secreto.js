// Description:
//   Tu secreto queda entre tú y :2bender:
//   Dile un secreto a @2bender por DM y éste lo anunciará en el canal #plebe sin mencionarte.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot mi secreto <secreto>
//
// Author:
//   @jorgeepunan

module.exports = function(robot) {
	return robot.respond(/mi secreto (.*)/i, function(msg) {
		var secreto = msg.match[1];

		var words = ['@here', '@channel', '@group', '@everyone'];

		for (var i = 0; i < words.length; i++) {
			if (secreto.indexOf(words[i]) !== -1) {
				return robot.messageRoom('#plebe', "El tonto de " + msg.message.user.name + " trató de usar @");
			}
		}

		return robot.messageRoom('#plebe', ":speak_no_evil: *Un secreto:* " + secreto);
	});
};