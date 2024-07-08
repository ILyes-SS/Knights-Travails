let board = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
];
let graph = [];
for (let i = 0; i <= 7; i++) {
  graph[i] = [];
  for (let j = 0; j <= 7; j++) {
    graph[i][j] = [];
  }
}

for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    let possiblePaths = [
      [i + 1, j + 2],
      [i + 1, j - 2],
      [i - 1, j + 2],
      [i - 1, j - 2],
      [i + 2, j + 1],
      [i - 2, j + 1],
      [i + 2, j - 1],
      [i - 2, j - 1],
    ];
    graph[i][j] = [...possiblePaths];
  }
}
graph.forEach((arr1) => {
  arr1.forEach((arr2) => {
    for (let k = arr2.length - 1; k >= 0; k--) {
      let coordinate = arr2[k];
      if (
        coordinate[0] > 7 ||
        coordinate[0] < 0 ||
        coordinate[1] > 7 ||
        coordinate[1] < 0
      ) {
        arr2.splice(k, 1);
      }
    }
  });
});

function move(coordinates) {
  let x = coordinates[0];
  let y = coordinates[1];
  let possiblePaths = [
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y - 1],
  ];
  if (
    possiblePaths[0][0] >= 0 &&
    possiblePaths[0][0] <= 7 &&
    possiblePaths[0][1] >= 0 &&
    possiblePaths[0][1] <= 7
  )
    return possiblePaths[0];
  else return null;
}
console.log(move([6, 0]));
console.log(graph);
