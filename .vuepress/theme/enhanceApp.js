// register Terpnet components
import Reference from "./terpnetwork-components/Reference";
import CodeSignature from "./terpnetwork-components/CodeSignature";
import JsonTreeView from "./terpnetwork-components/JsonTreeView";
import Param from "./terpnetwork-components/Param";
import TypeDesc from "./terpnetwork-components/TypeDesc";
import BoxField from "./terpnetwork-components/BoxField";
import ParamsList from "./terpnetwork-components/ParamsList";
import DarkModeSwitch from "./terpnetwork-components/DarkModeSwitch";

export default ({ Vue }) => {
  Vue.component("Reference", Reference);
  Vue.component("CodeSignature", CodeSignature);
  Vue.component("JsonTreeView", JsonTreeView);
  Vue.component("Parameter", Param);
  Vue.component("ParamsList", ParamsList);
  Vue.component("TypeDesc", TypeDesc);
  Vue.component("BoxField", BoxField);
  Vue.component("DarkModeSwitch", DarkModeSwitch);

};
