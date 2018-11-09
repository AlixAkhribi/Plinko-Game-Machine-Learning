// output = [dropPosition, bounciness, size, bucketLabel]
const outputs = []

const k = 3

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Runs every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel])
}

function runAnalysis() {
  // K-Nearest Neighbors algorithm with one independent variable using lodash
  const bucket =   console.log('Your point will probably fall into', bucket);
}

function knn(data, point){
  return _.chain(data)
      // Map returns the distance and the bucket number
      .map(row => [distance(row[0], point), row[3]])
      // Sort from least to greatest
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
}

// returns the distance from a point a to b (preditionPoint)
function distance(pointA, pointB) {
  return Math.abs(pointA - pointB)
}

function splitDataSet(data, testCount) {
  // shuffle our data
  const shuffled = _.shuffled(data)

  // Split shuffled into two sets. Test set and training set. // 

  // Slice our shuffled set from 0 to test cout
  const testSet = _.slice(shuffled, 0, testCount)
  // Slice our shuffled set from testCount on 
  const trainingSet = _.slice(shuffled, testCount)

  return [testSet, trainingSet]
}