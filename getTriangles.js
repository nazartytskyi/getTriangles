const COS_120_ANGLE = -0.5;
const MIN_LENGTH = 1;

const isEqual = (x, y) => Math.abs(x - y) <= Number.EPSILON;

const is120DegTriangle = (a, b, c) =>
  isEqual(COS_120_ANGLE, (a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

const getTriangles = perimeter => {
  let count = 0;
  const maxSide = Math.floor(perimeter / 2);

  for (let a = MIN_LENGTH; a < maxSide; ++a) {
    for (let b = a; b < maxSide; b++) {
      for (let c = MIN_LENGTH; c < a + b && a + b + c <= perimeter; c++) {
        if (is120DegTriangle(a, b, c)) {
          count++;
        }
      }
    }
  }

  return count;
};
