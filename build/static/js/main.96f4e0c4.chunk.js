(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{201:function(e,t,n){e.exports=n(356)},206:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),u=n.n(c),l=(n(206),n(8)),i=n.n(l),o=n(16),s=n(22),p=n(49),m=n(19),f=n(374),d=n(368),g=n(357),b=n(367),E=n(373),v=n(40),h=n(365),w=n(372),y=n(30),O=n.n(y),x={login:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j="",k={getAll:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:j}},e.next=3,O.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e){return O.a.put("".concat("/api/blogs","/").concat(e.id),e).then((function(e){return e.data}))},setToken:function(e){j="bearer ".concat(e)},remove:function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:j}},e.next=3,O.a.delete("".concat("/api/blogs","/").concat(t.id),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("/api/blogs","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat("/api/blogs","/").concat(t,"/comments"),{comment:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data&&k.setToken(t.data.token),t.data;default:return e}},S={logout:function(){return function(e){window.localStorage.removeItem("loggedBlogAppUser"),e({type:"SET_USER",data:null})}}},U=Object(m.f)(Object(s.b)((function(e){return{loggedUser:e.loggedUser}}),S)((function(e){return r.a.createElement(w.a,null,r.a.createElement(w.a.Item,{onClick:function(){return t="/",e.history.push(t);var t}},"blogs"),r.a.createElement(w.a.Item,{onClick:r.a.createElement(m.a,{to:"/users"})},"users"),r.a.createElement(w.a.Item,{position:"right"},e.loggedUser.name," logged in"),r.a.createElement(w.a.Item,{position:"right",onClick:function(){e.logout(),e.history.push("/")}},"log out"))}))),N=n(366),T=n(370),A=n(92),C=function(e){var t=Object(a.useState)(""),n=Object(A.a)(t,2),r=n[0],c=n[1];return{input:{type:e,value:r,onChange:function(e){return c(e.target.value)}},reset:function(){return c("")}}},D=n(51),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return e.concat(t.data);case"INIT_BLOGS":return t.data;case"UPDATE_BLOG":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"VOTE":var n=t.data.id,a=e.find((function(e){return e.id===n})),r=Object(D.a)(Object(D.a)({},a),{},{upvotes:Number(a.upvotes)+1});return e.map((function(e){return e.id!==n?e:r}));case"ADD_COMMENT":return e.map((function(e){return e.id===t.data.id?Object(D.a)(Object(D.a)({},e),{},{comments:e.comments.concat(t.data.comment)}):e}));case"SHOW":return t.data;case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},B={message:"",style:""},L=function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"SET_NOTIFICATION",data:e}),setTimeout((function(){return a({type:"SET_NOTIFICATION",data:B})}),t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return{message:t.data.message,style:t.data.style};default:return e}},R={updateBlog:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.update(e);case 2:a=t.sent,n({type:"UPDATE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteBlog:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.remove(e);case 2:n({type:"DELETE",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addComment:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.addComment(e.id,e.comment);case 2:a=t.sent,n({type:"ADD_COMMENT",data:{id:e.id,comment:a}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:L},z=Object(s.b)(null,R)((function(e){var t=C("text"),n=e.blog;if(!n)return null;var a=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.updateBlog(n);case 3:e.setNotification({message:'blog "'.concat(n.title,'" updated'),style:null},2e3),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.setNotification({message:"failed to update the blog",style:"error"},2e3);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var a=Object(o.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.addComment({id:n.id,comment:t.input.value});case 3:t.reset(),e.setNotification({message:"new comment added",style:null},2e3),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),e.setNotification({message:"failed to add a new comment",style:"error"},2e3);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(E.a,{as:"h2"},n.title," ",n.author),r.a.createElement("p",null,"blog has ",n.upvotes," like(s) ",r.a.createElement(g.a,{id:"like-button",compact:!0,icon:!0,onClick:function(){return a({id:n.id,title:n.title,author:n.author,url:n.url,upvotes:Number(n.upvotes)+1,user:n.user?n.user.id:null})}},r.a.createElement(v.a,{name:"like"}),"like")),r.a.createElement("p",null,"added by ",n.user?n.user.name:"?"),r.a.createElement(h.a,null),r.a.createElement(E.a,{as:"h3"},"comments"),r.a.createElement(N.a,Object.assign({id:"new-comment"},t.input,{action:r.a.createElement(g.a,{id:"save-comment",primary:!0,onClick:c},"add comment")})),r.a.createElement(T.a,null,n.comments.map((function(e){return r.a.createElement(T.a.Item,{key:e.id},r.a.createElement(T.a.Icon,{name:"comment outline"}),r.a.createElement(T.a.Content,null,e.comment))}))))})),G=function(e){var t=e.blog;return r.a.createElement(p.b,{to:"blogs/".concat(t.id)},t.title," (",t.author,")")},J=Object(s.b)((function(e){return{blogs:e.blogs}}))((function(e){var t=e.blogs;return r.a.createElement(T.a,{selection:!0,verticalAlign:"middle",size:"large"},t.map((function(e){return r.a.createElement(T.a.Item,{key:e.id},r.a.createElement(T.a.Content,null,r.a.createElement(T.a.Header,null,r.a.createElement(G,{blog:e}))))})))})),M={addBlog:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.create(e);case 2:a=t.sent,n({type:"ADD_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:L},q=Object(s.b)(null,M)((function(e){var t=C("text"),n=C("text"),a=C("text"),c=function(){var r=Object(o.a)(i.a.mark((function r(c){return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.addBlog(c);case 3:e.setNotification({message:'a new blog "'.concat(c.title,'" by ').concat(c.author," added"),style:null},2e3),t.reset(),n.reset(),a.reset(),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),e.setNotification({message:"failed to create a new blog",style:"error"},2e3);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}();return r.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),c({title:t.input.value,author:n.input.value,url:a.input.value})}},r.a.createElement(d.a.Field,{required:!0},r.a.createElement("label",null,"title"),r.a.createElement("input",Object.assign({id:"new-blog-title"},t.input))),r.a.createElement(d.a.Field,{required:!0},r.a.createElement("label",null,"author"),r.a.createElement("input",Object.assign({id:"new-blog-author"},n.input))),r.a.createElement(d.a.Field,{required:!0},r.a.createElement("label",null,"url"),r.a.createElement("input",Object.assign({id:"new-blog-url"},a.input))),r.a.createElement(g.a,{primary:!0,type:"submit"},"save"))})),H=n(371),P=Object(s.b)((function(e){return{notification:e.notification}}))((function(e){var t=e.notification;return t.message&&""!==t.message.trim()?"error"===t.style?r.a.createElement(H.a,{negative:!0},t.message):r.a.createElement(H.a,{positive:!0},t.message):null})),V=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(A.a)(n,2),u=c[0],l=c[1],i={display:u?"none":""},o={display:u?"":"none"},s=function(){l(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,{style:i},r.a.createElement(g.a,{onClick:s},e.buttonLabel)),r.a.createElement(w.a.Item,{style:o},e.children,r.a.createElement(g.a,{onClick:s},"cancel")))})),W={getAll:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createUser:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"ADD_USER":return e.concat(t.data);default:return e}},X=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.users}));return Object(a.useEffect)((function(){e(K())}),[e]),r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("td",null,r.a.createElement("strong",null,"blogs created"))),t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(p.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement("td",null,e.blogs.length?e.blogs.length:0))}))))},Y=function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement(E.a,{as:"h2"},t.name),r.a.createElement(E.a,{as:"h3"},"added blogs"),t.blogs.length>0?r.a.createElement(T.a,null,t.blogs.map((function(e){return r.a.createElement(T.a.Item,{key:e.id},r.a.createElement(T.a.Icon,{name:"newspaper outline"}),r.a.createElement(T.a.Content,null,e.title))}))):r.a.createElement("span",null,"nothing yet!")):null},Z={fetchUser:function(){return function(e){var t=window.localStorage.getItem("loggedBlogAppUser"),n=JSON.parse(t);n&&e({type:"SET_USER",data:n})}},login:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.login({username:e.username,password:e.password});case 2:a=t.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),n({type:"SET_USER",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},initializeBlogs:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},initializeUsers:K,setNotification:L,addUser:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=W.createUser(e),n({type:"ADD_USER",data:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},$=Object(s.b)((function(e){return{loggedUser:e.loggedUser,blogs:(t=e,t.blogs.sort((function(e,t){return t.upvotes-e.upvotes}))),users:e.users};var t}),Z)((function(e){var t=e.initializeBlogs,n=e.initializeUsers,c=e.fetchUser,u=C("text"),l=C("password"),s=C("text"),w=C("text"),y=C("text");Object(a.useEffect)((function(){c()}),[c]),Object(a.useEffect)((function(){t()}),[t]),Object(a.useEffect)((function(){n()}),[n]);var O=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.login({username:u.input.value,password:l.input.value});case 4:u.reset(),l.reset(),e.setNotification({message:"Success!"},5e3),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setNotification({message:"wrong username or password",style:"error"},5e3);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.addUser({username:s.input.value,password:w.input.value,name:y.input.value});case 4:s.reset(),w.reset(),y.reset(),e.setNotification({message:"Success! Please go to the login form and login!"},5e3),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setNotification({message:"please try again",style:"error"},5e3);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(b.a,null,r.a.createElement("div",null),null===e.loggedUser?r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to my Blog Application!"),r.a.createElement("h4",null,"If you already have a profile, please log in! If you are new, please signup to create your profile, and then log in!"),r.a.createElement(P,null),r.a.createElement(V,{buttonLabel:"Sign Up"},r.a.createElement(f.a,null,r.a.createElement(d.a,{onSubmit:x},r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"username"),r.a.createElement("input",Object.assign({id:"signup-username"},s.input))),r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"name"),r.a.createElement("input",Object.assign({id:"name"},y.input))),r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"password"),r.a.createElement("input",Object.assign({id:"signup-password"},w.input))),r.a.createElement(g.a,{primary:!0,type:"submit"},"signup")))),r.a.createElement(V,{buttonLabel:"Log In"},r.a.createElement(f.a,null,r.a.createElement(d.a,{onSubmit:O},r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"username"),r.a.createElement("input",Object.assign({id:"username"},u.input))),r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"password"),r.a.createElement("input",Object.assign({id:"password"},l.input))),r.a.createElement(g.a,{primary:!0,type:"submit"},"login"))))):r.a.createElement(p.a,null,r.a.createElement(U,null),r.a.createElement(E.a,{as:"h1"},r.a.createElement(v.a,{name:"newspaper outline"}),r.a.createElement(E.a.Content,null,"blog app")),r.a.createElement(P,null),r.a.createElement(h.a,null),r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(V,{buttonLabel:"create a new blog"},r.a.createElement(q,null))),r.a.createElement(J,null))}}),r.a.createElement(m.b,{exact:!0,path:"/users",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(m.b,{path:"/users/:id",render:function(t){var n,a=t.match;return r.a.createElement(Y,{user:(n=a.params.id,e.users.find((function(e){return e.id===n})))})}}),r.a.createElement(m.b,{path:"/blogs/:id",render:function(t){var n,a=t.match;return r.a.createElement(z,{blog:(n=a.params.id,e.blogs.find((function(e){return e.id===n})))})}})))})),ee=n(62),te=n(189),ne=Object(ee.c)({loggedUser:I,blogs:_,users:Q,notification:F}),ae=Object(ee.d)(ne,Object(ee.a)(te.a));u.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement($,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.96f4e0c4.chunk.js.map