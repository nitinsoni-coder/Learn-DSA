class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get left and right child indices
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new element
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    console.log("===index====", index)

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);

      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Remove and return the minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  // Get the smallest element without removing it
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// Example Usage:
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
console.log(heap.extractMin()); // Output: 2
console.log(heap.extractMin()); // Output: 5
console.log(heap.extractMin()); // Output: 10
console.log(heap.extractMin()); // Output: 20
