module.exports = class DepthCalculator {
    calculateDepth(arr, way = 0, count = []) {
		way++;
		count.push(way);
		arr.forEach((key) => {
			if (Array.isArray(key)) this.calculateDepth(key, way, count);
		});
		return Math.max(...count);
	}
};