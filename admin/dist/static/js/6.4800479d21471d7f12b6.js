webpackJsonp([6],{hXac:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),o=n("NYxO"),i={computed:r()({},Object(o.d)({userInfo:function(t){return t.users.userInfo},routerMetaName:function(t){return t.common.routerMetaName}})),data:function(){return{isCollapsed:!1,activeName:"",openNames:"",routerList:[{title:"管理员",icon:"md-person",children:[{name:"首页",path:"/user/index",icon:"md-list"},{name:"权限分配",path:"/user/lock",icon:"md-lock"}]},{title:"文章管理",icon:"md-list-box",children:[{name:"文章列表",path:"/article/list",icon:"md-list"},{name:"新增文章",path:"/article/create",icon:"md-add"}]},{title:"分类管理",icon:"md-pricetag",children:[{name:"分类列表",path:"/category/list",icon:"md-list"},{name:"新增分类",path:"/category/create",icon:"md-add"}]}]}},created:function(){this.handleSidebarNavActive()},methods:{handleSidebarNavActive:function(){var t=this,e=this.$route.path;this.routerList.forEach(function(n,a){n.children.forEach(function(n,r){n.path===e&&(t.activeName=Number(a)+1+"-"+(Number(r)+1),t.openNames=Number(a)+1)})})},logout:function(){this.$ls.remove("BOBLOG_ADMIN_TOKEN"),this.$ls.get("BOBLOG_ADMIN_TOKEN")||(window.location.href="/login")},routerLink:function(t){this.$router.push(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"layout"},[t.routerList?n("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"}},[n("Menu",{attrs:{"active-name":t.activeName,theme:"dark",width:"auto","open-names":[t.openNames]}},[n("div",{staticClass:"layout-logo"},[n("p",{staticClass:"layout-logo-img"},[n("img",{attrs:{src:"http://images.boblog.com/BOBLOG-02.png",alt:"LOGO"}})])]),t._v(" "),t._l(t.routerList,function(e,a){return n("Submenu",{key:a,attrs:{name:Number(a)+1}},[n("template",{staticClass:"menu-item",slot:"title"},[n("Icon",{attrs:{type:e.icon}}),t._v(" "),n("span",[t._v(t._s(e.title))])],1),t._v(" "),t._l(e.children,function(r,o){return e.children?n("MenuItem",{key:o,attrs:{name:Number(a)+1+"-"+(Number(o)+1)},nativeOn:{click:function(e){t.routerLink(r.path)}}},[n("Icon",{attrs:{type:r.icon}}),t._v("\n          "+t._s(r.name)+"\n        ")],1):t._e()})],2)})],2)],1):t._e(),t._v(" "),n("Layout",{style:{marginLeft:"200px"}},[n("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[t.userInfo?n("div",{staticClass:"header-user"},[n("Dropdown",{staticStyle:{"margin-left":"20px"}},[n("Button",{attrs:{type:"primary"}},[n("Icon",{attrs:{type:"md-person"}}),t._v("\n            "+t._s(t.userInfo.username)+"\n            "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1):t._e()]),t._v(" "),n("Content",{style:{padding:"0 16px 16px"}},[t.routerMetaName?n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",[n("Icon",{attrs:{type:t.routerMetaName.icon}}),t._v("\n          "+t._s(t.routerMetaName.name)+"\n        ")],1)],1):t._e(),t._v(" "),n("Card",[n("div",[n("router-view")],1)])],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(t){n("y+SO")},"data-v-350d0bd1",null);e.default=c.exports},"y+SO":function(t,e){}});
//# sourceMappingURL=6.4800479d21471d7f12b6.js.map