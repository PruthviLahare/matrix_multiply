const areMatricesEmpty = (matrixA, matrixB) =>
  matrixA.length === 0 || matrixB.length === 0;

const wrapFirstRowElements = function (firstRow) {
  return firstRow.map((element) => {
    return [element];
  });
};

const transposeMatrix = function (transposed, matrix) {
  matrix.map((array) => {
    array.map((element, index) => {
      transposed[index].push(element);
      return transposed;
    });
  });
  return transposed;
};

const multiply = function (matrixb) {
  return function (element) {
    return matrixb.map((num) => {
      return num.map((ele, index) => ele * element[index]);
    });
  };
};

const sumRows = function (numbers) {
  return numbers.map((element) =>
    element.reduce((sum, num) => {
      return sum + num;
    }, 0)
  );
};

export const multiplyMatrices = function (matrixA, matrixB) {
  if (areMatricesEmpty(matrixA, matrixB)) {
    return [];
  }

  const wrappedFirstRow = wrapFirstRowElements(matrixB[0]);
  const remainingRows = structuredClone(matrixB);
  remainingRows.shift();

  const transposedMatrixB = transposeMatrix(wrappedFirstRow, remainingRows);

  return matrixA.map(multiply(transposedMatrixB)).map(sumRows);
};
