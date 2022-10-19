import { withCalculatePerformance } from "../withCalculateTime.js";
import { mapInsert } from "./mapFunctions/index.js";
import { objInsert } from "./objectFunctions/index.js";

// Number of operations
const n = 10_000_00;
const options = {
	n,
	avg: 100,
};

function calcTime(options, mapFunc, objFunc) {
	const performanceMapFunction = withCalculatePerformance(mapFunc);
	const performanceObjectFunction = withCalculatePerformance(objFunc);

	let insertMapTotal = 0;
	let insertObjTotal = 0;

	for (let i = 0; i < options.avg; i++) {
		insertMapTotal += performanceMapFunction(new Map(), options.n);
		insertObjTotal += performanceObjectFunction({}, options.n);
	}

	const table = {
		mapInset: { avg: insertMapTotal / options.avg, total: insertMapTotal },
		objInsert: { avg: insertObjTotal / options.avg, total: insertObjTotal },
	};

	console.table(table);
}

/*
	Insert
*/

calcTime(options, mapInsert, objInsert);
