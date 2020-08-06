export const updateFilter = (name, value) => {
	return {
		type: "UPDATE_FILTER",
		name,
		value,
	};
};
