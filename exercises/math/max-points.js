//leetcode149

var maxPoints = function (points) {
  let numPoints = points.length;
  let maxPoints = 0;

  // Sort the points by x-coordinate
  points.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < numPoints; i++) {
    // Start with the first point
    let startX = points[i][0];
    let startY = points[i][1];
    let slopeCount = {};
    let verticalLineCount = 0;

    // Iterate through the remaining points
    for (let j = i + 1; j < numPoints; j++) {
      let x = points[j][0];
      let y = points[j][1];

      // If the x-coordinates are the same, it is a vertical line
      if (x === startX) {
        verticalLineCount++;
        continue;
      }

      // Calculate the slope of the line
      let slope = (y - startY) / (x - startX);

      // Increment the count for the slope
      slopeCount[slope] = (slopeCount[slope] || 0) + 1;
    }

    // Update the maximum number of points
    maxPoints = Math.max(
      maxPoints,
      verticalLineCount,
      ...Object.values(slopeCount)
    );
  }

  return maxPoints + 1;
};
