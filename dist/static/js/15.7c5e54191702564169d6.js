webpackJsonp([15],{"+ajZ":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});t("PBmY");var a=t("I4Nl"),n=t.n(a),s={name:"tracking",components:{helmet:t("aM3M").a},data:function(){return{orderTracking:{}}},created:function(){var e=this,r=this.$route.params.ordersCode;this.api.orderServer.orderTracking(r).then(function(r){"200"==r.code?e.orderTracking=r.model:n()(r.message)})}},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"tracking"},[t("helmet",{attrs:{title:"物流跟踪","show-right":!0}}),e._v(" "),t("div",{staticClass:"head"},[t("p",[t("span",[e._v("订单编号：")]),e._v(e._s(e.orderTracking.ordersCode))])]),e._v(" "),t("ul",{staticClass:"list"},e._l(e.orderTracking.orderTrackingModels,function(r,a){return t("li",{key:a},[t("i"),e._v(" "),t("div",{staticClass:"msg_box"},[t("p",[e._v(" \n              "+e._s(r.flowDesc)+"\n            ")])]),e._v(" "),t("small",[e._v(e._s(r.flowDateTime))])])}))],1)},staticRenderFns:[]};var o=t("vSla")(s,i,!1,function(e){t("5x4T")},"data-v-75cb012f",null);r.default=o.exports},"5x4T":function(e,r){}});
//# sourceMappingURL=15.7c5e54191702564169d6.js.map