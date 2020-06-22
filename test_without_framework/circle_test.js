function testCircleRadiusDefaultsTo10() {
  let circle = new Circle();
  expect.isTrue(circle.radius === 10);
}
testCircleRadiusDefaultsTo10();

function testIfCircleIsTrue() {
  let circle = new Circle();
  expect.isTrue(circle.isCircle);
}
testIfCircleIsTrue();

function testIfFalse() {
  let circle = new Circle();
  expect.isFalse(circle.isCircle);
}
testIfFalse();
