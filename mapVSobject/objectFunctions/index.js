/**
 *
 * @param {object} obj
 * @param {number} n
 */
export const objInsert = (obj, n) => {
	for (let i = 0; i < n; i++) {
		obj[i] = i;
	}
};
