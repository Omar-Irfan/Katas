const repeatNumbers = function(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    let lastData = 0;
    for (let j = 0; j < data[i][1]; j++) {
      if (lastData !== data[i][0]) {
        str = str.concat(", ");
        str = str.concat(data[i][0]);
        lastData = data[i][0];
      } else {
        str = str.concat(data[i][0]);
        lastData = data[i][0];
      }
    }
  }
  return str.substring(2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));