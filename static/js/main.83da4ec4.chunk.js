(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{463:function(e,t,n){},465:function(e,t,n){},466:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(68),o=n.n(s),i=n(27),u=n(12),j=n(5),b=n(28),l=n.n(b),O=n(56),h="https://connections-api.herokuapp.com",d=Object(i.b)("user/register",function(){var e=Object(O.a)(l.a.mark((function e(t,n){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch(h+"/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,console.log(a),e.next=8,a.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(1),r({error:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(i.b)("user/login",function(){var e=Object(O.a)(l.a.mark((function e(t,n){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch(h+"/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),r({error:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(i.b)("user/current",function(){var e=Object(O.a)(l.a.mark((function e(t,n){var r,a,c,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,c=a(),s=c.auth.token){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch(h+"/users/current",{headers:{Authorization:"Bearer ".concat(s)}});case 8:return o=e.sent,console.log(o),e.next=12,o.json();case 12:return i=e.sent,console.log(i),e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(5),r({error:e.t0.message});case 20:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(i.b)("user/logout",function(){var e=Object(O.a)(l.a.mark((function e(t,n){var r,a,c,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,a=n.getState,c=a(),s=c.auth.token,e.prev=3,e.next=6,fetch(h+"/users/logout",{method:"POST",headers:{Authorization:"Bearer ".concat(s)}});case 6:return o=e.sent,console.log(o),e.next=10,o.json();case 10:return i=e.sent,console.log(i),e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(3),r({error:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(i.c)({name:"auth",initialState:{user:{name:"",email:""},token:"",error:null,isLoading:!1,isAuth:!1,myProp:"Hello"},reducers:{renameProp:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{myProp:t.payload})}},extraReducers:(r={},Object(u.a)(r,d.pending,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})})),Object(u.a)(r,d.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:t.payload.user,token:t.payload.token,isAuth:!0})})),Object(u.a)(r,d.rejected,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(u.a)(r,p.pending,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})})),Object(u.a)(r,p.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:t.payload.user,token:t.payload.token,isAuth:!0})})),Object(u.a)(r,p.rejected,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(u.a)(r,f.pending,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})})),Object(u.a)(r,f.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:t.payload,isAuth:!0})})),Object(u.a)(r,f.rejected,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload,isAuth:!1})})),Object(u.a)(r,x.pending,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})})),Object(u.a)(r,x.fulfilled,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:{name:"",email:""},token:"",isAuth:!1})})),Object(u.a)(r,x.rejected,(function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload})})),r)}),m=(g.actions.renameProp,g.reducer),v=n(29),y=n(145),k=n.n(y),w=(n(155),{key:"authToken",storage:k.a,whiteList:["token"]}),A=Object(v.g)(w,m),L=Object(i.a)({reducer:{auth:A},middleware:function(e){return e({serializableCheck:{ignoredActions:[v.a,v.f,v.b,v.c,v.d,v.e]}})}}),S=Object(v.h)(L),C=n(35),P=n(44),T=n(3),D=(n(463),n(2));function F(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("h2",{children:"Contacts"})})}var V=n(18);function B(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(V.a)(c,2),o=s[0],i=s[1],u=Object(C.b)(),j=function(e){switch(e.target.name){case"email":r(e.target.value);break;case"password":i(e.target.value);break;default:alert("Check input name please")}},b=function(){r(""),i("")};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{children:"Login form"}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(p({email:n,password:o})),b()},children:[Object(D.jsx)("input",{type:"text",name:"email",value:n,placeholder:"email",onChange:j}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{type:"text",name:"password",value:o,placeholder:"password",onChange:j}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{type:"submit",children:"ADD"})]})]})}function J(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(V.a)(c,2),o=s[0],i=s[1],u=Object(a.useState)(""),j=Object(V.a)(u,2),b=j[0],l=j[1],O=Object(C.b)(),h=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"email":i(e.target.value);break;case"password":l(e.target.value);break;default:alert("Check input name please")}},p=function(){r(""),i(""),l("")};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{children:"Register form"}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(d({name:n,email:o,password:b})),p()},children:[Object(D.jsx)("input",{type:"text",name:"name",value:n,placeholder:"name",onChange:h}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{type:"text",name:"email",value:o,placeholder:"email",onChange:h}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{type:"text",name:"password",value:b,placeholder:"password",onChange:h}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{type:"submit",children:"ADD"})]})]})}function R(e){var t=e.isAuth,n=e.component;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{children:"PRIVATE"}),t?Object(D.jsx)(n,{}):Object(D.jsx)(T.a,{to:"/login"})]})}function W(e){var t=e.isAuth,n=e.component;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{children:"PUBKIC"}),t?Object(D.jsx)(T.a,{to:"/"}):Object(D.jsx)(n,{})]})}var z=!1;var E=function(){var e=Object(C.b)();return Object(a.useEffect)((function(){e(f())}),[e]),Object(D.jsxs)("div",{children:[Object(D.jsx)("header",{children:Object(D.jsx)("nav",{children:Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(P.b,{to:"/",children:"Home"})}),Object(D.jsx)("li",{children:Object(D.jsx)(P.b,{to:"/login",children:"Login"})}),Object(D.jsx)("li",{children:Object(D.jsx)(P.b,{to:"/register",children:"Register"})}),Object(D.jsx)("li",{children:Object(D.jsx)("button",{type:"button",onClick:function(){e(x())},children:"Log out"})})]})})}),Object(D.jsx)("main",{children:Object(D.jsxs)(T.d,{children:[Object(D.jsx)(T.b,{path:"/",element:Object(D.jsx)(R,{isAuth:z,component:F})}),Object(D.jsx)(T.b,{path:"/login",element:Object(D.jsx)(W,{isAuth:z,component:B})}),Object(D.jsx)(T.b,{path:"/register",element:Object(D.jsx)(W,{isAuth:z,component:J})})]})})]})},I=n(148);n(465);o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(C.a,{store:L,children:Object(D.jsx)(I.a,{persistor:S,loading:null,children:Object(D.jsx)(P.a,{children:Object(D.jsx)(E,{})})})})}),document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.83da4ec4.chunk.js.map