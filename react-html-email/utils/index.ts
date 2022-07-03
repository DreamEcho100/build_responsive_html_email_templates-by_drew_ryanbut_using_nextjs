// combineSimilarTypesProps
//

export const combineSimilarProps = <
	T extends {
		[key: string]: any;
	}
>(
	E1: T,
	E2: T
) => {
	const obj: T = {
		...E1,
	};

	let item: keyof T;
	for (item in E2) {
		if (E2[item] && typeof E2[item] === 'object') {
			// const x = combineSimilarProps(obj[item], E2[item]);
			// obj[item] = x;
			obj[item] = {
				...obj[item],
				...E2[item],
			};
		} else obj[item] = E2[item];
		// } else if (obj[item] !== E2[item]) obj[item] = E2[item];
	}

	return obj;
};
