function rotateBy180(N, matrix) {
  //write code here

  for (var c = matrix[0].length - 1; c >= 0; c--) {
    let bag = "";
    for (var r = matrix.length - 1; r >= 0; r--) {
      bag = bag + matrix[c][r] + " ";
    }
    console.log(bag);
  }
}
