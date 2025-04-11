// test/index.test.js

const assert = require('assert');
const { greet } = require('./index.js');

try {
  assert.strictEqual(greet("Alice"), "Hello, Alice!");
  assert.strictEqual(greet("Bob"), "Hello, Bob!");
  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error.message);
  process.exit(1);
}
