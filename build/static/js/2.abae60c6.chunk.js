webpackJsonp([2],{146:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=r(0),s=r.n(a),c=r(6),p=r(157),u=r(12),d=r(50),l=r(11),A=r(49),b=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),f=function(e){function n(){return t(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),b(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(A.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(p.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),n}(a.Component),x=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},m=function(e){return{onFetchOrders:function(n,r){return e(l.d(n,r))}}};n.default=Object(c.b)(x,m)(Object(d.a)(f,u.a))},157:function(e,n,r){"use strict";var t=r(0),o=r.n(t),i=r(158),a=r.n(i),s=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return o.a.createElement("span",{className:a.a.SpanContainers,key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredient: ",t),o.a.createElement("p",null,"Price ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};n.a=s},158:function(e,n,r){var t=r(159);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;r(144)(t,o);t.locals&&(e.exports=t.locals)},159:function(e,n,r){n=e.exports=r(143)(!0),n.push([e.i,".Order__Order__4yi4Z{width:100%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}.Order__SpanContainers__GoZUE{text-transform:capitalize;display:inline-block;margin:0 8px;border:1px solid #ccc;padding:5px}","",{version:3,sources:["/Users/issoufzabre/workspace/burger-app/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC,AAGD,8BACI,0BAA2B,AAC3B,qBAAsB,AACtB,aAAc,AACd,sBAAuB,AACvB,WAAa,CAEhB",file:"Order.css",sourcesContent:[".Order {\n    width: 100%;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    padding: 10px;\n    margin: 10px auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n\n.SpanContainers {\n    text-transform: capitalize;\n    display: inline-block;\n    margin: 0 8px;\n    border: 1px solid #ccc;\n    padding: 5px;\n\n}\n\n\n\n\n"],sourceRoot:""}]),n.locals={Order:"Order__Order__4yi4Z",SpanContainers:"Order__SpanContainers__GoZUE"}}});
//# sourceMappingURL=2.abae60c6.chunk.js.map