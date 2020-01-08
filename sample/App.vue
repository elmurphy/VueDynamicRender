<template>
	<div class="home">
		<VDCUManager v-model="example" type="1"></VDCUManager>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "App",
	data() {
		return { example: 1 };
	},
};
</script>
