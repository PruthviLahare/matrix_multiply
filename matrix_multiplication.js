const areMatrixEmpty = (matrixA, matrixB) =>
  matrixA.length === 0 || matrixB.length === 0;

const areMatricesValid = function (matrixA, matrixB) {};

const multiplyMatrices = function ([matrixA, matrixB]) {
  if (areMatrixEmpty(matrixA, matrixB)) {
    return [];
  }

  // if (areMatricesValid(matrixA, matrixB)) {
  //   return NaN;
  // }

  // return matrixMultiplication(matrixA, matrixB);
};

const objectEquality = function (object1, object2) {
  return areEqual(
    Object.entries(object1).sort(),
    Object.entries(object2).sort()
  );
};

const areEqual = function (value1, value2) {
  if (typeof value1 !== "object") {
    return value1 === value2;
  }

  if (value1.length !== value2.length) {
    return false;
  }

  if (Array.isArray(value1)) {
    return value1.every((element, index) => areEqual(element, value2[index]));
  }

  return objectEquality(value1, value2);
};

const test = function ([func, matrixA, matrixB, expected]) {
  const actual = func([matrixA, matrixB]);

  return !areEqual(actual, expected);
};

function testFramework() {
  const testCases = [[multiplyMatrices, [], [], []]];

  const failed = testCases.filter(test);

  console.table(failed);
}

testFramework();
