(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t.p+"static/media/agencyIcon.5598da6a.svg"},129:function(e,a,t){e.exports=t(152)},137:function(e,a,t){},139:function(e,a,t){},143:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(111),o=t.n(r),c=(t(137),t(94)),i=t(92),m=(t(139),t(141),t(166)),s=t(167),u=(t(143),t(27)),p=[{label:"First Name",placeholder:"Enter your first name",value:"firstName"},{label:"Last Name",placeholder:"Enter your last name",value:"lastName"},{label:"Mobile Number",placeholder:"Enter your mobile number",value:"mobileNumber"},{label:"Email Id",placeholder:"Enter your email id",value:"email"},{label:"Company name",placeholder:"Enter your company name",value:"companyName"},{label:"Company website",placeholder:"Enter your company website",value:"companyWebsite"}],d=["firstName","mobileNumber","email","companyName","companyWebsite"],b=[{heading:"Finding Opportunities",description:"Discover powerful growth opportunities based on your data"},{heading:"Execute Growth",description:"Execute full-services including inbound, paid and other channels"},{heading:"Adjust and scale",description:"Review data and adjust for real business impact"}];var E=function(){var e=Object(n.useState)({firstName:"",lastName:"",mobileNumber:"",email:"",companyName:"",companyWebsite:"",showError:""}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=function(e,a){var n=Object(u.cloneDeep)(t);n[a]=e.target.value,r(function(e){return Object(c.a)({},e,n)})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"popupBox"},l.a.createElement("div",{className:"box"},l.a.createElement("span",{className:"close-icon",onClick:""},"X"),l.a.createElement("h4",{className:"fontFamily headingDecor",style:{marginBottom:"2rem"}},"Book Intro Call"),l.a.createElement(m.a,{className:"form"},p.map(function(e){return l.a.createElement(m.a.Field,{key:e.value,style:{marginBottom:"1rem"}},l.a.createElement("label",{className:"subHeadingDecor"},e.label,d.includes(e.value)?l.a.createElement("span",{style:{color:"red"}},"*"):null),l.a.createElement("br",null),l.a.createElement("input",{placeholder:e.placeholder,onChange:function(a){return o(a,e.value)},onPaste:function(a){return o(a,e.value)},className:"inputWidth"}),d.includes(e.value)&&t.showError&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("span",{className:"errorLine"},t.showError)))}),l.a.createElement(s.a,{className:"blue",type:"submit",onClick:function(e){e.preventDefault();var a=Object(u.cloneDeep)(t);console.log("payload: ",a),Object(u.isEmpty)(a.firstName)||Object(u.isEmpty)(a.mobileNumber)||Object(u.isEmpty)(a.email)||Object(u.isEmpty)(a.companyName)||Object(u.isEmpty)(a.companyWebsite)?(a.showError="This field is required",console.log("why>")):(a.showError="",console.log("why> not>>>")),r(function(e){return Object(c.a)({},e,a)})}},"Submit")))))},g=t(114),f=t.n(g);var y=function(){var e=Object(n.useState)({openPopUp:!1}),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app fontFamily"},l.a.createElement("div",{className:"navBar navBarDisplay"},l.a.createElement("span",null,l.a.createElement("img",{src:f.a,className:"imgSize pointerCursor",alt:"logo",onClick:function(){return window.location.reload()}})),l.a.createElement("span",{className:"pointerCursor"},"About Us"),l.a.createElement("span",{className:"pointerCursor"},"Blog"),l.a.createElement("span",{className:"blueBtn pointerCursor",onClick:function(){return function(){var e=Object(u.cloneDeep)(t);e.openPopUp=!e.openPopUp,r(function(a){return Object(c.a)({},a,e)})}()}},"Book an Intro Call")),t.openPopUp?l.a.createElement(E,null):null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"intro"},l.a.createElement("label",{className:"font55px"},"Scientific ",l.a.createElement("span",{style:{color:"#1e90ff"}},"Performance Marketing"),l.a.createElement("br",null),"Agency for SaaS Companies"),l.a.createElement("br",null),l.a.createElement("label",{className:"font18px"},"We plan, execute, and manage integrated digital marketing campaigns across organic,",l.a.createElement("br",null),"paid, and social channels that grow your marketing and sales pipeline."))),l.a.createElement("div",{className:"greyBg"},l.a.createElement("h1",{className:"lineHeight"},"We've developed a Framework",l.a.createElement("br",null),"that drives conversions!"),l.a.createElement("h2",{className:"txtGradient lineHeight my-4"},"The Three Stages of SaaS Growth"),l.a.createElement("div",{className:"d-flex flex-row justify-content-between"},b.map(function(e){return l.a.createElement("div",{key:e.heading,className:"box"},l.a.createElement("h5",{className:"bold"},e.heading),l.a.createElement("br",null),l.a.createElement("p",null,e.description))}))))))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,165)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null))),h()}},[[129,3,2]]]);
//# sourceMappingURL=main.82ebec01.chunk.js.map