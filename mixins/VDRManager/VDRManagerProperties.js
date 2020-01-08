const VDRManagerProperties = {
	props: {
		tag: {
			type: String,
		},
		cssclass: {
			type: String,
			default: null,
		},
		type: {
			type: String,
		},
		value: {
			required: true,
		},
	},
};

export default VDRManagerProperties;
