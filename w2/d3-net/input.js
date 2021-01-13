const { stdin } = require("process");
let connection;
const EXITGAME = '\u0003';
const MOVE_UP = '\u0077';
const MOVE_DOWN = '\u0073';
const MOVE_LEFT = '\u0061';
const MOVE_RIGHT = '\u0064';

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', x => {
    handleUserInput(x);
  });
  return stdin;
};

const handleUserInput = function(input) {
  if (input === EXITGAME) {
    process.exit();
  }
  if (input === MOVE_UP) {
    connection.write('Move: up');
  } else if (input === MOVE_DOWN) {
    connection.write('Move: down');
  } else if (input === MOVE_LEFT) {
    connection.write('Move: left');
  } else if (input === MOVE_RIGHT) {
    connection.write('Move: right');
  } else {
    connection.write(`Say: Ghost`);
  }
};
module.exports = {
  setupInput : setupInput
};