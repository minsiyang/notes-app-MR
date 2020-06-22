function testCircleRadiusDefaultsTo10() {
  let circle = new Circle();
  expect.isTrue(circle.radius === 10);
}

function testIfCircleIsTrue() {
  let circle = new Circle();
  expect.isTrue(circle.isCircle);
}

function testIfFalse() {
  let circle = new Circle();
  expect.isFalse(circle.isCircle);
}

testCircleRadiusDefaultsTo10();
testIfCircleIsTrue();
testIfFalse();
