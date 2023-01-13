(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),o=s(29),a=s.n(o),i=(s(59),s(60),s(28),s(24)),c=s(19),l=s(20),d=s(21),j=s(22),h=s(11),b=s(17),p=s(15),u=s.n(p),m="GET_ERRORS",O="SET_CURRENT_USER",x=function(e){e?(u.a.defaults.headers.common.Authorization=e,console.log("axios headers",u.a.defaults.headers)):delete u.a.defaults.headers.common.Authorization},g=s(50),f=s(33),y=s(53),v=s(13),N=s(93),w={authDetails:{isAuthenticated:!1,user:{}},errors:{}};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(v.a)(Object(v.a)({},e),{},{authDetails:{isAuthenticated:!Object(N.a)(t.payload),user:t.payload}});case m:return Object(v.a)(Object(v.a)({},e),{},{errors:t.payload});default:return e}},k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.b,C=Object(f.c)(U,k(Object(f.a)(y.a))),E=function(){return function(e){localStorage.removeItem("jwtToken"),x(!1),e({type:O,payload:{}})}},S=function(){return function(e){e({type:m,payload:{}})}},A=s(5),D=s(16),T=s.n(D),R=s(6),F=s(1),I=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(i.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault();var t={email:r.state.email,password:r.state.password};r.props.loginUser({userData:t})},r.state={email:"",password:""},r}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.authDetails.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillUnmount",value:function(){console.log("login comp unmounted: errors will be cleared now"),this.props.clearErrors()}},{key:"componentDidUpdate",value:function(e){this.props.authDetails.isAuthenticated&&(console.log("pushed to dash"),this.props.history.push("/dashboard"))}},{key:"render",value:function(){var e={email:T()(Object(A.isUndefined)(this.props.errors.email)?"input-field":"input-field error"),password:T()(Object(A.isUndefined)(this.props.errors.password)?"input-field":"input-field error"),passwordincorrect:T()(Object(A.isUndefined)(this.props.errors.passwordincorrect)?"input-field":"input-field error"),emailnotfound:T()(Object(A.isUndefined)(this.props.errors.emailnotfound)?"input-field":"input-field error")};return Object(F.jsxs)("div",{className:"content-box",children:[Object(F.jsx)(h.b,{to:"/",children:Object(F.jsxs)("h3",{className:"redirect-btn home",children:[Object(F.jsx)(R.a,{style:{height:"0.7em"}}),"Back to Home"]})}),!Object(A.isUndefined)(this.props.errors.tokenExpired)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.tokenExpired]}),Object(F.jsxs)("h1",{children:["Log In",Object(F.jsx)(R.j,{style:{marginInlineStart:"20px",height:"0.8em"}})]}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.c,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{type:"email",name:"email",placeholder:"Enter your registered Email",autoComplete:"on",autoFocus:"on",className:e.email,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.email)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.email]}),!Object(A.isUndefined)(this.props.errors.emailnotfound)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.emailnotfound]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.f,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",className:e.password,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.password)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.password]}),!Object(A.isUndefined)(this.props.errors.passwordincorrect)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.passwordincorrect]}),Object(F.jsx)("br",{}),Object(F.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),Object(F.jsx)(h.b,{to:"/register",children:Object(F.jsx)("h3",{className:"redirect-btn",children:"Create New Account"})})]})]})}}]),s}(r.Component),L=Object(b.b)((function(e){return console.log("state from login react comp",e),{authDetails:e.authDetails,errors:e.errors}}),(function(e){return{loginUser:function(t){var s;e((s=t.userData,function(e){u.a.post("/api/users/login",s).then((function(t){console.log("res.data from loginUser",t.data);var s=t.data.token;localStorage.setItem("jwtToken",s),x(s),u.a.get("/dashboard").then((function(t){console.log(t),e({type:O,payload:t.data.user})})).catch((function(e){return console.log(e)}))})).catch((function(t){e({type:m,payload:t.response.data})}))}))},clearErrors:function(){e(S())}}}))(I),P=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(i.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault();var t={name:r.state.name,email:r.state.email,password:r.state.password,password2:r.state.password2};r.props.registerUser({newUser:t})},r.state={name:"",email:"",password:"",password2:""},r}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.authDetails.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillUnmount",value:function(){this.props.clearErrors()}},{key:"render",value:function(){var e={name:T()(Object(A.isUndefined)(this.props.errors.name)?"input-field":"input-field error"),email:T()(Object(A.isUndefined)(this.props.errors.email)?"input-field":"input-field error"),password:T()(Object(A.isUndefined)(this.props.errors.password)?"input-field":"input-field error"),password2:T()(Object(A.isUndefined)(this.props.errors.password2)?"input-field":"input-field error"),loginbtn:T()(Object(A.isUndefined)(this.props.errors)?"login-button":"login-button error")};return Object(F.jsxs)("div",{className:"content-box",children:[Object(F.jsx)(h.b,{to:"/",children:Object(F.jsxs)("h3",{className:"redirect-btn home",children:[Object(F.jsx)(R.a,{style:{height:"0.7em"}}),"Back to Home"]})}),!Object(A.isUndefined)(this.props.errors.displayMsg)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.displayMsg]}),Object(F.jsxs)("h1",{className:"create-acc-heading",children:["Create New Account",Object(F.jsx)(R.l,{style:{marginInlineStart:"20px",height:"0.8em"}})]}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.k,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{name:"name",placeholder:"Enter your name",autoComplete:"on",autoFocus:"on",className:e.name,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.name)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.name]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.c,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{type:"email",name:"email",placeholder:"Enter your Email",autoComplete:"on",className:e.email,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.email)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.email]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.f,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",className:e.password,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.password)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.password]}),Object(F.jsx)("br",{}),Object(F.jsx)("label",{htmlFor:"password2",children:"Confirm Password:"}),Object(F.jsx)("br",{}),Object(F.jsx)(R.f,{style:{position:"absolute",height:"5%",color:"grey"}}),Object(F.jsx)("input",{type:"password",name:"password2",placeholder:"Confirm Password",className:e.password2,onChange:this.handleChange}),!Object(A.isUndefined)(this.props.errors.password2)&&Object(F.jsxs)("div",{className:"error-msg",children:["*",this.props.errors.password2]}),Object(F.jsx)("br",{}),Object(F.jsx)("button",{type:"submit",className:e.loginbtn,children:"Sign Up"}),Object(F.jsx)(h.b,{to:"/login",children:Object(F.jsx)("h3",{className:"redirect-btn",children:"Already Registered?Login"})})]})]})}}]),s}(r.Component),_=Object(b.b)((function(e){return console.log("state",e),{authDetails:e.authDetails,errors:e.errors}}),(function(e,t){return{registerUser:function(s){var r,n;e((r=s.newUser,n=t.history,function(e){u.a.post("/api/users/register",r).then((function(e){console.log("register -> then res:",e),n.push("/login")})).catch((function(t){console.log("err.response.data in registerUser(authActions.js)",t.response.data),e({type:m,payload:t.response.data})}))}))},clearErrors:function(){e(S())}}}))(P),M=s(25),q=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"content-box-landing",children:[Object(F.jsx)("h1",{children:"Welcome to Full Stack MERN Auth App"}),Object(F.jsx)("h2",{className:"sub-heading",children:"Get Started"}),Object(F.jsx)(h.b,{to:"/login",children:Object(F.jsx)("button",{className:"landing-button",children:"Login"})}),Object(F.jsx)(h.b,{to:"/register",children:Object(F.jsx)("button",{className:"landing-button",children:"Register"})}),Object(F.jsx)("h1",{className:"sub-heading",children:"Tech Stack:"}),Object(F.jsx)("div",{className:"marquee-box",children:Object(F.jsxs)("ul",{className:"marquee-content",children:[Object(F.jsx)("li",{children:Object(F.jsx)(R.i,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.g,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(M.c,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(M.e,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(M.a,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.d,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.i,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(M.d,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.e,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.b,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(M.b,{className:"icons"})}),Object(F.jsx)("li",{children:Object(F.jsx)(R.h,{className:"icons"})})]})})]})}}]),s}(r.Component),W=q,B=s(4),H=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleLogout=function(t){e.props.logoutUser()},e.handleNextReq=function(){u.a.get("/api/users/login/1").then((function(e){return console.log(e)})).catch((function(e){return console.log("err in handleNextReq dashabord",e)}))},e}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isAuthenticated?Object(F.jsxs)("div",{className:"dashboard-bkg",children:[Object(F.jsxs)("h1",{children:["Welcome ",this.props.name," "]}),Object(F.jsx)("h2",{children:"You have successfully logged in"}),Object(F.jsx)("button",{onClick:this.handleLogout,children:"Logout"}),Object(F.jsx)("button",{onClick:this.handleNextReq,children:"send further req to check auth header"})]}):Object(F.jsx)(B.a,{to:"/login"})}}]),s}(r.Component),J=Object(b.b)((function(e){return{isAuthenticated:e.authDetails.isAuthenticated,name:e.authDetails.user.name}}),(function(e){return{logoutUser:function(){e(E())}}}))(H),z=s(54),G=["component","isAuthenticated"];Object(b.b)((function(e){return{isAuthenticated:e.authDetails.isAuthenticated}}))((function(e){var t=e.component,s=e.isAuthenticated,r=Object(z.a)(e,G);return Object(F.jsx)(B.b,Object(v.a)(Object(v.a)({},r),{},{render:function(e){return s?Object(F.jsx)(t,Object(v.a)({},e)):Object(F.jsx)(B.a,{to:"/login"})}}))}));!function(){if(localStorage.jwtToken){var e=localStorage.jwtToken;x(e);var t=Object(g.a)(e);console.log(t.exp,Math.round(Date.now()/1e3)),u.a.get("/dashboard").then((function(e){console.log("then res from keepUserLoggedIn",e),C.dispatch({type:O,payload:e.data.user})})).catch((function(e){console.log("catch err in keepUserLoggedIn",e),console.log("token expired"),C.dispatch(E()),C.dispatch({type:m,payload:{tokenExpired:"Token Expired or Invalid. Please Login again"}})}))}}();var X=function(){return Object(F.jsx)(b.a,{store:C,children:Object(F.jsx)(h.a,{children:Object(F.jsxs)("div",{className:"flexbox-container",children:[Object(F.jsxs)("div",{className:"flexbox-item1",children:["Flexbox Item1",Object(F.jsx)("h1",{className:"cover-heading",children:"PASSPORT-JWT AUTHORIZATION"})]}),Object(F.jsxs)("div",{className:"flexbox-item2",children:[Object(F.jsx)("div",{className:"top-bar",children:"MERN Auth App"}),Object(F.jsx)(B.b,{exact:!0,path:"/",component:W}),Object(F.jsx)(B.b,{exact:!0,path:"/login",component:L}),Object(F.jsx)(B.b,{exact:!0,path:"/register",component:_}),Object(F.jsx)(B.b,{exact:!0,path:"/dashboard",component:J})]})]})})})};var V=function(){return Object(F.jsx)("div",{className:"app",children:Object(F.jsx)(X,{})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,94)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),o(e),a(e)}))};a.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(V,{})}),document.getElementById("root")),Y()}},[[91,1,2]]]);
//# sourceMappingURL=main.dde5da37.chunk.js.map