// src/index.js

function greet(name) {
    return `Hello , ${name}!`;
  }
  
  // If the script is run directly, execute this block
  if (require.main === module) {
    console.log(greet("World"));
  }
  
  module.exports = { greet };