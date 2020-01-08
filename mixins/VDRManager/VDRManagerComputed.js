const VDRManagerComputed = {
	computed: {
		componentType() {
			return this.type || this.$VDR.Default.Type;
		},
	},
};

export default VDRManagerComputed;
