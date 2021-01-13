const net = require('net');
// const { stdin } = require('process');
/**
 * Establishes connection with the game server
 */
// `135.23.222.131`
const connect = function() {
  const conn = net.createConnection({
    host: `135.23.222.131`,
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    // conn.write("Arm");
    console.log("aaa");
    conn.write("Name: ARM");
    conn.write("Move: up");
    // conn.write("Move: down");

  });
  conn.on('data', (data) => {
    console.log(`Message from client: ${data}`, data);
  });

  return conn;
};

 

  // conn.on('connect', () => {
  //   conn.write('Hello from client!');
  // });
  // // interpret incoming data as text
  // conn.write(`it's me ${name}`);
  
  // stdin.on('data',(input) => {
  //   conn.write(`${name} :${input}`);
  // });
 
  

module.exports = connect;