webpackJsonp([18],{LDn6:function(t,s){},Uvgb:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("PBmY");var a=e("I4Nl"),r=e.n(a),i={components:{helmet:e("aM3M").a},data:function(){return{orderDetail:{},addressObj:{},ordersProductCount:0}},methods:{routerGo:function(t){this.$router.push({name:t,params:{ordersCode:this.orderDetail.ordersCode}})},buyAgin:function(t){var s=this;this.$store.dispatch("moreAddShopcart",t).then(function(){s.$router.push({name:"shopingCart",params:{productId:obj.productId,merchantId:obj.merchantBasicId}})})},payNow:function(){this.$store.dispatch("saveOrderPay",this.orderDetail.ordersProductList),this.$router.push({name:"orderPay"})},matchCount:function(t){for(var s=0,e=0;e<t.length;e++){s+=t[e].quantity}return s},goProduct:function(t){this.$router.push({name:"productDetil",params:{productId:t.productId,merchantId:t.merchantBasicId}})},orderCancel:function(t){var s=this;MessageBox.confirm("确定执行此操作?").then(function(e){s.api.orderServer.orderCancel(t).then(function(t){"200"==t.code?s.loadOrderData():r()(t.message)})},function(){})}},filters:{filtersDate:function(t){if(!t||""==t)return"";var s=new Date(t);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()}},created:function(){var t=this,s=this.$route.params.ordersCode;this.api.orderServer.ordersDetails(s).then(function(s){if(200==s.code){var e=s.model;t.orderDetail=e,t.ordersProductCount=t.matchCount(e.ordersProductList),t.api.order.getOneDeliveryAddress(e.deliveryId).then(function(s){200==s.code?t.addressObj=s.model:r()(s.message)})}else r()(s.message)})}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order-item"},[e("helmet",{attrs:{"show-right":!0,title:"订单详情"}}),t._v(" "),e("section",{staticClass:"code-and-address"},[e("div",{staticClass:"code-row"},[e("span",{staticClass:"code"},[t._v("\n              订单号：\n              "),e("i",[t._v(t._s(t.orderDetail.ordersCode))])]),t._v(" "),e("span",{staticClass:"type"},[t._v(t._s(t.orderDetail.ordersStateDesc))])]),t._v(" "),e("div",{staticClass:"address-row"},[e("div",{staticClass:"person"},[e("span",[t._v("\n                  收货人："+t._s(t.addressObj.consignee)+"\n              ")]),t._v(" "),e("span",[t._v(t._s(t.addressObj.mobilePhone))])]),t._v(" "),e("div",{staticClass:"address"},[e("span",{staticClass:"tip"},[t._v("地址")]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.addressObj.province)+t._s(t.addressObj.city)+t._s(t.addressObj.area)+t._s(t.addressObj.deliveryAddress))])])])]),t._v(" "),e("section",{staticClass:"products"},[e("div",{staticClass:"list"},t._l(t.orderDetail.ordersProductList,function(s,a){return e("div",{key:a,staticClass:"product-item",on:{click:function(e){t.goProduct(s)}}},[e("div",{staticClass:"item-single"},[e("a",{staticClass:"info-image"},[e("img",{attrs:{src:s.productImg,alt:""}})]),t._v(" "),e("span",{staticClass:"info-name"},[e("a",{staticClass:"name"},[t._v("\n                  "+t._s(s.productName)+"\n                ")]),t._v(" "),e("p",{staticClass:"packing"},[t._v("\n                  规格："+t._s(s.specifications)+"\n                ")])]),t._v(" "),e("span",{staticClass:"info-price"},[e("p",{staticClass:"price"},[t._v("￥"+t._s(s.productPrice))]),t._v(" "),e("p",{staticClass:"num"},[t._v("x"+t._s(s.quantity))])])])])}))]),t._v(" "),e("section",{staticClass:"order-info"},[e("ul",{staticClass:"info-type"},[e("li",{staticClass:"info-item"},[e("span",{staticClass:"item-label"},[t._v("支付方式")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(t.orderDetail.paymentTypeDesc))])])]),t._v(" "),e("ul",{staticClass:"info-time"},[e("li",{staticClass:"info-item"},[e("span",{staticClass:"item-label"},[t._v("生成时间")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(t._f("filtersDate")(t.orderDetail.orderTime)))])])]),t._v(" "),e("div",{staticClass:"order-total"},[e("div",{staticClass:"total-item"},[e("span",{staticClass:"item-label"},[t._v("实付款：")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v("￥"+t._s(t.orderDetail.orderAmountPayable))])]),t._v(" "),e("div",{staticClass:"time-item number"},[e("span",{staticClass:"item-label"},[t._v("数量：")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v("x "+t._s(t.ordersProductCount))])])])]),t._v(" "),e("div",{staticClass:"detail-height"}),t._v(" "),e("div",{staticClass:"detail-bar"},[10==t.orderDetail.ordersState?e("button",{on:{click:function(s){t.orderCancel(t.orderDetail.ordersCode)}}},[t._v("取消订单")]):t._e(),t._v(" "),t.orderDetail.ordersState>=10?e("button",{on:{click:function(s){t.routerGo("tracking")}}},[t._v("订单跟踪")]):t._e(),t._v(" "),200==t.orderDetail.ordersState?e("button",{on:{click:function(s){t.buyAgin(t.orderDetail.ordersProductList)}}},[t._v("再次购买")]):t._e(),t._v(" "),10==t.orderDetail.ordersState?e("button",{staticClass:"pay",on:{click:function(s){t.payNow()}}},[t._v("立即支付")]):t._e()])],1)},staticRenderFns:[]};var n=e("vSla")(i,o,!1,function(t){e("LDn6")},"data-v-5b2025e3",null);s.default=n.exports}});
//# sourceMappingURL=18.2fad56f7e71379b979d4.js.map