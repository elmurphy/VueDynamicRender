const VDRMethods = {
	methods: {
		componentTag(component) {
			if (this.$VDR.Default[component] != null) return this.tag || this.$VDR.Default[component].Tag || this.$VDR.Default.Tag;
			this.tag || this.$VDR.Default.Tag;
		},
		componentClass(component) {
			if (this.$VDR.Default[component] != null) return this.cssclass || this.$VDR.Default[component].Class || this.$VDR.Default.Class;
			return this.cssclass || this.$VDR.Default.Class;
		},
	},
};

export default VDRMethods;
