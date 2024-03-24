export function logTimeAndHeap(func, ...inputs) {
  const [startTime, startHeap] = [process.hrtime(), process.memoryUsage().heapUsed];

  func(...inputs);

  const [endTime, endHeap] = [process.hrtime(startTime), process.memoryUsage().heapUsed];

  const result = {
    time: endTime[0] * 1000 + endTime[1] / 1000000,
    memory: endHeap - startHeap,
  }

  console.table(result);
}