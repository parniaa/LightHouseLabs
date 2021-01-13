const net = require('net');
const { stdin } = require('process');
/**
 * Establishes connection with the game server
 */
const name = "ghost";
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 3001
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
 

  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.write(`it's me ${name}`);
  
  stdin.on('data',(input) => {
    conn.write(`${name} :${input}`);
  });
  return conn;
  
};
module.exports = connect;