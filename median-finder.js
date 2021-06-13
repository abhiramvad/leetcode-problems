class MedianFinder {
    constructor() {
        this.a = [];
    }

    addNum(num) {
        this.a.push(num);
    }

    findMedian() {
        this.a.sort((x, y) => x - y);
        let n = this.a.length;
        let m = n >> 1;
        return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2;
    }
}
