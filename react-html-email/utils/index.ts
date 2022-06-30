// combineSimilarTypesProps
//

export const combineSimilarProps = <T extends {}>(E1: T, E2: T) => {
	const obj: T = {
		...E1,
	};

	let item: keyof T;
	for (item in E2) {
		obj[item] = {
			...obj[item],
			...E2[item],
		};
		// obj[item] = combineSimilarProps(obj[item], E2[item]);

		if (obj[item] !== E2[item]) obj[item] = E2[item];
	}

	return obj;
};
