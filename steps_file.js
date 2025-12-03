// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    
    // Assertions customizadas para substituir métodos não existentes
    assertTrue(condition, message) {
      if (!condition) {
        throw new Error(message || 'Assertion failed');
      }
    },
    
    assertEqual(actual, expected, message) {
      if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, got ${actual}`);
      }
    }

  });
}
