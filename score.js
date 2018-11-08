// output = [dropPosition, bounciness, size, bucketLabel]
const outputs = []

const predictionPoint = 300;
const k = 3

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Runs every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel])
}

function runAnalysis() {
  // K-Nearest Neighbors algorithm with one independent variable using lodash
  const bucket =
    _.chain(outputs)
      // Map returns the distance to the 300 row and the bucket number
      .map(row => [distance(row[0]), row[3]])
      // Sort from least to greatest by first element (distance to predictionPoint)
      .sortBy(row => row[0])
      // Returns array of top "k" records
      .slice(0, k)
      // Returns object of key value pairs. Key being the bucket number and value being how often it showed in top "k" records
      .countBy(row => row[1])
      // Takes our object and returns it as pairs in an array of arrays
      .toPairs()
      // Sort from least to greatest by first element (bucket). Bucket that occured most will be at the end
      .sortBy(row => row[1])
      // Returns last element in our array
      .last()
      // Returns the first element in our array (bucket)
      .first()
      // Turn our string to number (bucket)
      .parseInt()
      // Use .value to close our chain
      .value()

  console.log('Your point will probably fall into', bucket);
}

// returns the distance from a point to the 300 row (preditionPoint)
function distance(point) {
  return Math.abs(point - predictionPoint)
}