import VDRManager from "./components/VDRManager";
import VDRPrint from "./components/VDRPrint";
import VDRHtml from "./components/VDRHtml";

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

const VueDynamicRender = {
	install(Vue, options) {
		Vue.prototype.$VDR = {
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
		};

		if (options) {
			if (options.Default) {
				if (options.Default.Type) Vue.prototype.$VDR.Default.Type = options.Default.Type;
				if (options.Default.Tag) Vue.prototype.$VDR.Default.Tag = options.Default.Tag;

				if (options.Default.VDRPrint) {
					Vue.prototype.$VDR.Default.VDRPrint.Class = options.Default.VDRPrint.Class;
					Vue.prototype.$VDR.Default.VDRPrint.Tag = options.Default.VDRPrint.Tag;
				}
				if (options.Default.VDRHtml) {
					Vue.prototype.$VDR.Default.VDRHtml.Class = options.Default.VDRHtml.Class;
					Vue.prototype.$VDR.Default.VDRHtml.Tag = options.Default.VDRHtml.Tag;
				}
			}
			if (options.Type) {
				Vue.prototype.$VDR.Type.VDRPrint = options.Type.VDRPrint || Vue.prototype.$VDR.Type.VDRPrint;
				Vue.prototype.$VDR.Type.VDRHtml = options.Type.VDRHtml || Vue.prototype.$VDR.Type.VDRHtml;
			}
		}
		Vue.component(VDRManager.name, VDRManager);
		Vue.component(VDRPrint.name, VDRPrint);
		Vue.component(VDRHtml.name, VDRHtml);
	},
};

export default VueDynamicRender;
