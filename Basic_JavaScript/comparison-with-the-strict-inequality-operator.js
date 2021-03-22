// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Strictly not equal to 17
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);