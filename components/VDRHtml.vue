<template>
	<component :is="componentTag($options.name)" v-html="value"></component>
</template>

<script>
import VDRProperties from "../mixins/VDR/VDRProperties";
import VDRComputed from "../mixins/VDR/VDRComputed";
import VDRMethods from "../mixins/VDR/VDRMethods";

export default {
	name: "VDRHtml",
	mixins: [VDRProperties, VDRComputed, VDRMethods],
};
</script>

<style></style>
