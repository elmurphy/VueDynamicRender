const VDRManagerMethods = {
	methods: {
		typeVerification(componentName, componentType) {
			componentType = componentType.toString();
			if (componentType.length > 0 || this.$VDR.Type[componentName])
				try {
					let numberType = parseInt(componentType);
					return this.$VDR.Type[componentName].includes(numberType);
				} catch (e) {
					return this.$VDR.Type[componentName].includes(componentType);
				}
			throw "this.$VDR.Type[componentName] => " + JSON.stringify(this.$VDR.Type[componentName]) + " typeof =>" + typeof this.$VDR.Type[componentName] + "\ncomponentType is => " + componentType;
		},
	},
};

export default VDRManagerMethods;
