module.exports = function towelSort (matrix) {
  if (!(matrix instanceof Array)) return [];
  return matrix.map((line, index) => index % 2 === 0 ? line : line.reverse()).flat();
}
