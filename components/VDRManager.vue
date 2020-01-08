<template>
	<div>
		<VDRPrint :tag="tag" :value="value" v-if="typeVerification('VDRPrint', componentType)" :class="cssclass"></VDRPrint>
		<VDRHtml :tag="tag" :value="value" v-if="typeVerification('VDRHtml', componentType)" :class="cssclass"></VDRHtml>
	</div>
</template>

<script>
import VDRManagerProperties from "../mixins/VDRManager/VDRManagerProperties";
import VDRManagerComputed from "../mixins/VDRManager/VDRManagerComputed";
import VDRManagerMethods from "../mixins/VDRManager/VDRManagerMethods";

export default {
	name: "VDRManager",
	mixins: [VDRManagerProperties, VDRManagerComputed, VDRManagerMethods],
	created() {
	},
};
</script>

<style></style>
