import Vue from "vue";
import App from "./App.vue";

import VueDynamicRender from "./plugins/VueDynamicRender/index";

const VDRPrintAcceptedTypes = [0, 1];
const VDRHtmlAcceptedTypes = [2];

const VDRGlobalDefaults = {
	Type: 0,
	Tag: "div",
	Class: "",
};

const VDRComponentDefaultBuilder = (Class = "", Tag = "div") => {
	return { Class, Tag };
};

Vue.use(VueDynamicRender, {
	Default: {
		VDRPrint: VDRComponentDefaultBuilder(),
		VDRHtml: VDRComponentDefaultBuilder(),
		Type: VDRGlobalDefaults.Type,
		Tag: VDRGlobalDefaults.Tag,
		Class: VDRGlobalDefaults.Class,
	},
	Type: {
		VDRPrint: VDRPrintAcceptedTypes,
		VDRHtml: VDRHtmlAcceptedTypes,
	},
});

// Vue.use(VueDynamicRender); use like this available. Default options available plugin if you dont't send your own options.

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
