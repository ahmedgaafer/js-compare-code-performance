export function withCalculatePerformance(callBack) {
	return function (...params) {
		const start = Date.now();

		callBack(...params);

		const end = Date.now();

		return end - start;
	};
}
