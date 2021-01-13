const net = require('net');
const { IP, PORT } = require('./constant');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write("Name: ARM");
    // conn.write("Move: down");
  });
  conn.on('data', (data) => {
    console.log(`Message from client: ${data}`, data);
  });

  return conn;
};


module.exports = connect;