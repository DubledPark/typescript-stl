/// <reference path="../API.ts" />

namespace std.example
{
	export function test_for_of(): void
	{
		let container = new std.TreeSet<number>();
		container.push(0, 1, 2, 3, 4, 5);

		for (let val of container)
			console.log(val);

		for (let val of container)
			console.log(val);
	}
}