(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{87:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(9),o=n.n(r),a=n(30),c=n.n(a),s=n(1),i=n.n(s),u=n(85),l=n(4),f=n(22),b=n(10),p=n(46),d=n(74),j=n(86),O=n(56),x=n(14),h=n(0),y="black",w="#3A3D40",g="#5C5C60",m=n(49),D=n(123),v=n(2);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(){var e=Object(h.useState)(!0),t=c()(e,2),n=t[0],r=t[1],a=Object(h.useState)(""),s=c()(a,2),l=s[0],y=s[1],g=Object(h.useState)({}),P=c()(g,2),S=P[0],T=P[1],z=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)};return Object(h.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m.a.getItem("@toDos"));case 2:(e=t.sent)&&T(JSON.parse(e));case 4:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(v.jsxs)(b.a,{style:C.container,children:[Object(v.jsx)(u.a,{style:"auto"}),Object(v.jsxs)(b.a,{style:C.header,children:[Object(v.jsx)(p.a,{onPress:function(){return r(!0)},children:Object(v.jsx)(f.a,{style:{fontSize:42,fontWeight:"600",color:n?"white":w},children:"Work"})}),Object(v.jsx)(p.a,{onPress:function(){return r(!1)},children:Object(v.jsx)(f.a,{style:{fontSize:42,fontWeight:"600",color:n?w:"white"},children:"Travel"})})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(d.a,{onSubmitEditing:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==l){t.next=2;break}return t.abrupt("return");case 2:return e=k(k({},S),{},o()({},Date.now(),{text:l,working:n})),T(e),t.next=6,i.a.awrap(z(e));case 6:y("");case 7:case"end":return t.stop()}}),null,null,null,Promise)},onChangeText:function(e){return y(e)},returnKeyType:"done",value:l,placeholder:n?"Add a To DO":"Where do you want to go?",style:C.input}),Object(v.jsx)(j.a,{children:Object.keys(S).map((function(e){return S[e].working===n?Object(v.jsxs)(b.a,{style:C.toDo,children:[Object(v.jsx)(f.a,{style:C.toDoText,children:S[e].text}),Object(v.jsx)(p.a,{children:Object(v.jsx)(f.a,{onPress:function(){return function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("web"!==x.a.OS){n.next=10;break}if(!confirm("Do you wantto delete this To Do?")){n.next=8;break}return delete(t=k({},S))[e],T(t),n.next=8,i.a.awrap(z(t));case 8:n.next=12;break;case 10:return O.a.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm sure",onPress:function(){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return delete(t=k({},S))[e],T(t),n.next=5,i.a.awrap(z(t));case 5:case"end":return n.stop()}}),null,null,null,Promise)}}]),n.abrupt("return");case 12:case"end":return n.stop()}}),null,null,null,Promise)}(e)},children:Object(v.jsx)(D.a,{name:"trash",size:18,color:w})})})]},e):null}))})]})]})}var C=l.a.create({container:{flex:1,backgroundColor:y,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:g,marginBottom:10,paddingVertical:20,paddingHorizontal:40,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"}})},88:function(e,t,n){e.exports=n(115)}},[[88,1,2]]]);
//# sourceMappingURL=app.d1c548ef.chunk.js.map