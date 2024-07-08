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

function knightMoves(coordStart, coordEnd) {
  let path = [...coordStart];
  let i = graph[coordStart[0]][coordStart[1]].length - 1;
  for (i; i >= 0; i--) {
    let startPossibleValues = graph[coordStart[0]][coordStart[1]][i];
    if (JSON.stringify(startPossibleValues) == JSON.stringify(coordEnd)) {
      return [path, [...coordEnd]];
    }

    let j = graph[startPossibleValues[0]][startPossibleValues[1]][i].length - 1;
    for (j; j >= 0; j--) {
      let spvPossibleValues =
        graph[startPossibleValues[0]][startPossibleValues[1]][j];
      if (JSON.stringify(spvPossibleValues) == JSON.stringify(coordEnd)) {
        return [path, [...startPossibleValues], [...coordEnd]];
      }
    }
  }
}
function bfs(coordStart, coordEnd) {
  let queue = [[...coordStart]];
  let path;
  let shiftedElems = [];
  while (queue.length > 0) {
    let shifted = queue.shift();
    shiftedElems.push(shifted);
    let i = graph[shifted[0]][shifted[1]].length - 1;
    for (i; i >= 0; i--) {
      let possibleValues = graph[shifted[0]][shifted[1]][i];
      queue.push(possibleValues);
      if (JSON.stringify(possibleValues) == JSON.stringify(coordEnd)) {
        let before;
        let after = [...coordEnd];
        path = [[...coordEnd]];
        while (shiftedElems.length > 0) {
          before = shiftedElems.pop();
          let j = graph[before[0]][before[1]].length - 1;
          for (j; j >= 0; j--) {
            let values = graph[before[0]][before[1]][j];
            if (JSON.stringify(values) == JSON.stringify(after)) {
              path.unshift(before);
              after = before;
            }
          }
        }
        return path;
      }
    }
  }
}

console.log(graph);
console.log(bfs([3, 3], [4, 3]));
