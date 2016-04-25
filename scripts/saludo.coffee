# Description:
#   Saludo del bot 2brains aka 2bender
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Author:
#   nicoQ

module.exports = (robot) ->

    robot.hear / hola-2bender/i, (msg) ->
      msg.send 'Hola que tal soy el bot :robot_face: de 2brains :simple_smile:'
      msg.send 'escribe `@2bender: help` y podras ver los comandos para consultar '