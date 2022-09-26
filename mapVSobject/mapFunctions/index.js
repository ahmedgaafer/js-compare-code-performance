/**
 *
 * @param {Map} map
 * @param {number} n
 */
export const mapInsert = (map, n) => {
	for (let i = 0; i < n; i++) {
		map.set(i, i);
	}
};
