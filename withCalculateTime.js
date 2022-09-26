export function withCalculatePerformance(callBack) {
	return function (...params) {
		const start = performance.now();

		callBack(...params);

		const end = performance.now();

		return end - start;
	};
}
