(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},236:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(24),o=c.n(n),l=(c(110),c(111),c(112),c(113),c(32)),i=c(18),d=c(10),b=c(3),j=c(4),m=c(5),u=c(6),h=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{className:"parallax-window","data-parallax":"scroll",children:Object(a.jsx)("div",{className:"tm-section-wrap",children:Object(a.jsx)("section",{id:"intro",className:"tm-section",children:Object(a.jsxs)("div",{className:"tm-bg-white-transparent tm-intro",children:[Object(a.jsx)("h2",{className:"tm-section-title mb-5 text-uppercase tm-color-primary",children:"Extract Data From Files"}),Object(a.jsx)("p",{className:"tm-color-gray",children:"The system is able to receive files/images, and extract data from them by linking the content with the document owner's data, according to the user's request. ."}),Object(a.jsx)("p",{className:"mb-0 tm-color-gray",children:"Since there are a lot of them in many administrative organizations, so a technology was needed to speed up the extraction of information from paper documents."})]})})})})})}}]),c}(s.Component),p=function(e){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsxs)("div",{class:"tm-section-wrap bg-white",children:[Object(a.jsx)("div",{class:"tm-sidebar-sticky",children:Object(a.jsx)("div",{className:"tm-brand-box",children:Object(a.jsx)("div",{className:"tm-double-border-1",style:{borderColor:"#707172"},children:Object(a.jsxs)("div",{className:"tm-double-border-2",style:{borderColor:"#707172"},children:[Object(a.jsx)("h1",{className:"tm-brand text-uppercase",style:{color:"#069"},children:"404"}),Object(a.jsx)("h4",{className:"tm-section-title mb-5 text-uppercase tm-color-primary",children:"Not Found"})]})})})}),Object(a.jsxs)("h6",{className:"tm-section-title   tm-color-primary",style:{textAlign:"center"},children:["This path ",e.location.pathname," is not available  :("]})]})})},x=c(20),O=c(31),f=c(7),g=c(12),v=c(9),y=c.n(v),N=r.a.createContext({clearFiles:function(){}});function w(e){for(var t=e.title,c=e.p1,r=e.p2,n=e.p3,o=e.Trash,l=[],i=0;i<n.length;i++)l[i]=n[i];var d,b=Object(s.useContext)(N);return"Trash"===o&&(d=Object(a.jsx)(x.a,{icon:O.d,onClick:b.clearFiles})),Object(a.jsx)("div",{className:"col-xl-6 mb-5",id:"im",children:Object(a.jsx)("div",{className:"tm-double-border-1 tm-border-gray",children:Object(a.jsxs)("div",{className:"tm-double-border-2 tm-border-gray tm-box-pad",children:[Object(a.jsx)("h2",{className:"tm-color-primary tm-section-title mb-4",children:t}),Object(a.jsxs)("p",{className:"mb-4",children:[c," "]}),Object(a.jsxs)("p",{className:"mb-3",children:[" ",r," ",d," "]}),Object(a.jsx)("span",{style:{textAlign:"inherit",fontSize:"15px",color:"#707172"},children:l.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})]})})})}var k=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"Talk to Us",p1:"Get support from our website Experts and explore your service options, some of which can be handled fully online.",p2:"Just send us your questions or concerns and we will give you the help you need.",p3:[]},e.OnSubmit=function(e){console.log(e),y.a.post("https://retoolapi.dev/nEViEc/testlog",e).then((function(e){console.log(e)}))},e.form=function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:"tm-contact-form",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"contact_name",id:"contact_name",placeholder:"Your Name",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"contact_name"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"contact_email",id:"contact_email",placeholder:"Your Email",type:"email",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"contact_email"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"contact_message",id:"contact_message",placeholder:"Message...",as:"textarea",rows:"4",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"contact_message"})})]}),Object(a.jsx)("div",{className:"form-group mb-0",children:Object(a.jsx)("button",{type:"submit",className:"btn rounded-0 d-block ml-auto tm-btn-primary",children:"SEND"})})]})},e.Schema=function(){return g.a().shape({contact_name:g.c().required("Your Name is important for us"),contact_email:g.c().required("Your Email is important for us"),contact_message:g.c().required("What is your message...!!")})},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{class:"tm-section-wrap bg-white",children:Object(a.jsxs)("section",{id:"talk",class:"row tm-section",children:[Object(a.jsx)(w,{title:this.state.title,p1:this.state.p1,p2:this.state.p2,p3:this.state.p3}),Object(a.jsx)("div",{className:"col-xl-6 mb-5",children:Object(a.jsx)("div",{className:"tm-contact-form-wrap",children:Object(a.jsx)(f.c,{initialValues:{contact_name:"",contact_email:"",contact_message:""},onSubmit:this.OnSubmit,render:this.form,validationSchema:this.Schema()})})})]})})})}}]),c}(s.Component),S=c(42),C=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{className:"nav flex-row tm-social-links",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/fardous-tarsha-72bb09207/",className:"nav-link tm-social-link",children:Object(a.jsx)(x.a,{icon:S.c})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"https://fardoos.tar@gmail.com",className:"nav-link tm-social-link",children:Object(a.jsx)(x.a,{icon:S.b})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"https://www.facebook.com/fardos.tarsha.7",className:"nav-link tm-social-link",children:Object(a.jsx)(x.a,{icon:S.a})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"https://twitter.com/fardos_ta",className:"nav-link tm-social-link",children:Object(a.jsx)(x.a,{icon:S.d})})})]}),Object(a.jsx)("footer",{className:"text-center text-white small",children:Object(a.jsxs)("p",{className:"mb--0 mb-2",children:["Copyright 2021 Extract Data  ",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"mb-0",children:["Design by: \xa0",Object(a.jsx)("a",{rel:"nofollow",href:"https://fardoos.tar@gmail.com",className:"tm-footer-link",children:"Fardous_Ta"})]})," "]})})," "]})}}]),c}(s.Component),I=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"Log In",p1:"You can organize all your files with us , start by loging in...",p2:Object(a.jsx)("span",{children:Object(a.jsxs)("p",{class:"text-black ",children:[" ","Don't have an account?",Object(a.jsx)(i.b,{to:"SignUp",children:" Go here to SignUp..."})," ",Object(a.jsx)("br",{})," "]})}),p3:[],userId:""},e.OnSubmit=function(t){console.log(t);var c=t.username,a=t.password1,s=t.email;try{y.a.post("http://127.0.0.1:8000/api/v1/user/authenticate/",{username:c,password:a,email:s},{headers:{"content-type":"application/json"}}).then((function(t){console.log(t.data.id),200===t.status||201===t.status?(e.setState({userId:t.data.id}),localStorage.setItem("logeed","true"),console.log("loggin!!"),console.log(e.state.userId),localStorage.setItem("userid",e.state.userId),e.props.history.push("/user/".concat(e.state.userId,"/"))):alert("SomeThing was wrong..check if your username,email and password is correct..!!")})).catch((function(e){alert("Somthing was Wrong.. Check if your username,email or password are correct...! ")}))}catch(r){console.error(r.response.data)}},e.form=function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:"tm-contact-form",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"username",id:"username",placeholder:"username",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"username"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"email",id:"email",placeholder:"Your Email",type:"email",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"email"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"password1",id:"password1",placeholder:"password",type:"password",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"password1"})})]}),Object(a.jsx)("div",{className:"form-group mb-0",children:Object(a.jsx)("button",{type:"submit",className:"btn rounded-0 d-block ml-auto tm-btn-primary",children:"Log In"})})]})},e.Schema=function(){return g.a().shape({username:g.c().required("Your Name is important for us"),email:g.c().required("Your Email is important for us")})},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{className:"tm-section-wrap bg-white",children:Object(a.jsxs)("section",{id:"talk",className:"row tm-section",children:[Object(a.jsx)(w,{title:this.state.title,p1:this.state.p1,p2:this.state.p2,p3:this.state.p3})," ",Object(a.jsx)("div",{className:"col-xl-6 mb-5",children:Object(a.jsx)("div",{className:"tm-contact-form-wrap",children:Object(a.jsx)(f.c,{initialValues:{username:"",email:"",password1:""},onSubmit:this.OnSubmit,render:this.form,validationSchema:this.Schema()})})})]})})})}}]),c}(s.Component),F=c(43);function _(e){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{class:"tm-section-wrap bg-white",children:Object(a.jsx)("section",{id:"work",class:"row tm-section",children:Object(a.jsx)("div",{class:"col-12",children:Object(a.jsx)("div",{class:"w-100 tm-double-border-1 tm-border-gray",children:Object(a.jsx)("div",{class:"tm-double-border-2 tm-border-gray tm-box-pad",children:Object(a.jsxs)("div",{class:"tm-gallery-wrap",children:[Object(a.jsxs)("h2",{class:"tm-color-primary tm-section-title mb-4 ml-2",children:[Object(a.jsx)(F.a.Header,{closeButton:!0,children:Object(a.jsx)(F.a.Title,{children:"title"})}),Object(a.jsx)(F.a.Body,{children:Object(a.jsx)("p",{children:"test"})}),Object(a.jsxs)(F.a.Footer,{children:[Object(a.jsx)("div",{class:"col d-flex .justify-content-sm-start",children:Object(a.jsx)("button",{class:"btn rounded-1  d-block ml-auto tm-btn-primary",type:"button",style:{color:"#fff",backgroundColor:"rgba(1, 7, 56, 0.815)"},children:"Download Data"})}),Object(a.jsx)("button",{class:"btn rounded-1 d-block ml-auto tm-btn-secondry",type:"button",style:{color:"#fff",backgroundColor:"red"},children:"close"})]})]}),Object(a.jsx)("div",{class:"tm-gallery "})]})})})})})})})}var D=c(44),T=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"Upload your files",p1:"Your files and their language must be uploaded to extract data from them ",p2:Object(a.jsxs)("span",{children:[" ","You choose these files \xa0",Object(a.jsx)(x.a,{icon:O.a}),"\xa0"," "]}),filesName:[],selectedFile:null,fileType:""},e.handleselectedFile=function(t){for(var c=t.currentTarget.files,a=[],s=[],r=0;r<c.length;r++)a[r]=c[r].name,s[r]=c[r].type;e.setState(Object(D.a)(Object(D.a)({},e.state),{},{selectedFile:c,filesName:a,fileType:s}))},e.clearFiles=function(){e.setState(Object(D.a)(Object(D.a)({},e.state),{},{selectedFile:null,filesName:[]}))},e.OnSubmit=function(t){var c=t.datatype,a=e.state.selectedFile,s=localStorage.getItem("userid");t.file=a;var r=new FormData,n={headers:{"content-type":"multipart/form-data"}};console.log(e.state.fileType);for(var o=0;o<e.state.selectedFile.length;o++)"application/pdf"==e.state.fileType?(console.log("pddddf"),r.append("pdf_input",a[o]),r.append("user",s),console.log(e.state.selectedFile),y.a.post("http://127.0.0.1:8000/api/v1/ocr_uploader/documents/",r,n).then((function(e){console.log(e.data)})).catch((function(e){return console.error(e)}))):(console.log("immmmmmage"),r.append("image",a[o]),r.append("lang",c),r.append("user",s),console.log(e.state.selectedFile),y.a.post("http://127.0.0.1:8000/api/v1/ocr_uploader/images/",r,n).then((function(e){console.log(e.data)})).catch((function(e){return console.error(e)})))},e.form=function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,className:"tm-contact-form",children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)(f.b,{name:"datatype",as:"select",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0",children:[Object(a.jsx)("option",{defaultValue:!0,children:"Choose File Type "}),Object(a.jsx)("option",{value:"EN",children:"EN"}),Object(a.jsx)("option",{value:"AR",children:"AR"})]})}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"datatype"})}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"file",id:"actual-btn",name:"selectedFile",onChange:function(t){return e.handleselectedFile(t)},hidden:!0,multiple:!0}),Object(a.jsx)("label",{htmlFor:"actual-btn",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0",children:"Upload File Here"}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"file"})})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"form-group mb-0",children:[Object(a.jsx)("button",{type:"submit",className:"btn rounded-0 d-block ml-auto tm-btn-primary",children:"Extract"}),Object(a.jsx)("div",{})]})]})},e.Schema=function(){return g.a().shape({datatype:g.c().required("You need to add Type of your file")})},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)(N.Provider,{value:{clearFiles:this.clearFiles},children:Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{className:"tm-section-wrap bg-white",children:Object(a.jsxs)("section",{id:"talk",className:"row tm-section",children:[Object(a.jsx)(w,{title:this.state.title,Trash:"Trash",p1:this.state.p1,p3:this.state.filesName,p2:this.state.p2,clearFiles:this.clearFiles}),Object(a.jsx)("div",{className:"col-xl-6 mb-5",children:Object(a.jsx)("div",{className:"tm-contact-form-wrap",children:Object(a.jsx)(f.c,{initialValues:{selectedFile:"",datatype:""},onSubmit:this.OnSubmit,render:this.form,validationSchema:this.Schema()})})})]})})})})}}]),c}(s.Component),E=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"SIGN UP",p1:"Extract data from your paper files and keep it in your personal account and have full control over your data",p2:"Accurately provide your required personal information to be able to create an account on our website.",p3:[]},e.OnSubmit=function(t){console.log(t.password1);var c=t.username,a=t.password1,s=t.password2,r=t.email;try{y.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:c,password1:a,password2:s,email:r},{headers:{"content-type":"application/json"}}).then((function(t){console.log(t.data),200===t.status&&(console.log("Sined Up !!"),e.props.history.push("/login"))}))}catch(n){console.error(n.response.data)}e.props.history.push("/login")},e.form=function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:"tm-contact-form",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"username",id:"username",placeholder:"username",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"username"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"email",id:"email",placeholder:"Your Email",type:"email",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"email"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"password1",id:"password1",placeholder:"password",type:"password",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"password1"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.b,{name:"password2",id:"password2",placeholder:"Re_password",type:"password",className:"form-control rounded-0 border-top-0 border-right-0 border-left-0"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"error",children:Object(a.jsx)(f.a,{name:"password2"})})]}),Object(a.jsx)("div",{className:"form-group mb-0",children:Object(a.jsx)("button",{type:"submit",className:"btn rounded-0 d-block ml-auto tm-btn-primary",children:"Sign Up"})})]})},e.Schema=function(){return g.a().shape({username:g.c().required("Your Name is important for us"),email:g.c().required("Your Email is important for us"),password1:g.c().required("Please Enter your password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),password2:g.c().required("Enter your password again").oneOf([g.b("password1")],"Passwords does not match")})},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{className:"tm-section-wrap bg-white",children:Object(a.jsxs)("section",{id:"talk",className:"row tm-section",children:[Object(a.jsx)(w,{title:this.state.title,p1:this.state.p1,p2:this.state.p2,p3:this.state.p3})," ",Object(a.jsx)("div",{className:"col-xl-6 mb-5",children:Object(a.jsx)("div",{className:"tm-contact-form-wrap",children:Object(a.jsx)(f.c,{initialValues:{username:"",email:"",password1:"",password2:""},onSubmit:this.OnSubmit,render:this.form,validationSchema:this.Schema()})})})]})})})}}]),c}(s.Component),A=c.p+"static/media/logo.e6e0cadf.png",Y=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(b.a)(this,c),(s=t.call(this,e)).form=function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("div",{class:"mb-2",children:Object(a.jsx)("h5",{children:"Basic Information :"})}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"center"},children:Object(a.jsx)("label",{children:"Username:"})}),Object(a.jsx)("div",{class:"col",children:Object(a.jsx)(f.b,{name:"username",class:"form-control rounded-0 border-top-0 border-right-0 border-left-0"})})]}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"center"},children:Object(a.jsx)("label",{children:" Your Email :"})}),Object(a.jsx)("div",{class:"col",children:Object(a.jsx)(f.b,{name:"email",class:"form-control rounded-0 border-top-0 border-right-0 border-left-0"})})]}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"center"},children:Object(a.jsx)("label",{children:"Your Name:"})}),Object(a.jsx)("div",{class:"col",children:Object(a.jsx)(f.b,{name:"first_name",class:"form-control rounded-0 border-top-0 border-right-0 border-left-0"})})]}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"center"},children:Object(a.jsx)("label",{children:" Last Name :"})}),Object(a.jsx)("div",{class:"col",children:Object(a.jsx)(f.b,{name:"last_name",class:"form-control rounded-0 border-top-0 border-right-0 border-left-0"})})]})]})}),Object(a.jsx)("div",{class:"row",children:Object(a.jsx)("div",{class:"col d-flex justify-content-end",children:Object(a.jsx)("button",{class:"btn rounded-0 d-block ml-auto tm-btn-primary",type:"submit",children:"Save Changes"})})})]})},s}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(f.c,{enableReinitialize:!0,initialValues:this.props.values,onSubmit:this.props.OnSubmit,render:this.form})})}}]),c}(s.Component);function U(e){try{return y.a.get("http://127.0.0.1:8000/api/v1/user/profile/".concat(e,"/"))}catch(t){console.error(t)}}function q(e){try{return y.a.get("http://127.0.0.1:8000/api/v1/user/user/".concat(e,"/"))}catch(t){console.error(t)}}function L(e,t){return y.a.put("http://127.0.0.1:8000/api/v1/user/user/".concat(e,"/"),t)}function P(){localStorage.removeItem("userid"),localStorage.setItem("logeed",!1)}function V(e){if(e){var t=e.toString().match(/.*\/(.+?)\./);if(t&&t.length>1)return t[1]}return""}var M=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){return Object(b.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{class:"col-12 col-md-3 mb-3",children:[Object(a.jsx)("div",{class:"card mb-3",children:Object(a.jsx)("div",{class:"card-body",children:Object(a.jsx)("div",{class:"px-xl-6",children:Object(a.jsxs)(i.b,{to:"/",className:"nav-link active",children:[Object(a.jsxs)("button",{class:"btn btn-block btn d-block ml-auto tm-btn-primary",style:{color:"#fff",backgroundColor:"rgba(1, 7, 56, 0.815)"},onClick:P,children:[Object(a.jsx)("i",{class:"fa fa-sign-out"}),Object(a.jsx)("span",{children:"Logout"})]})," "]})})})}),Object(a.jsx)("div",{class:"card",children:Object(a.jsxs)("div",{class:"card-body",children:[Object(a.jsx)("h6",{class:"card-title font-weight-bold",children:"Support"}),Object(a.jsx)("p",{class:"card-text",children:"Get fast, free help from our friendly assistants."})," ",Object(a.jsx)(i.b,{to:"/contact",children:Object(a.jsxs)("button",{type:"button",class:"btn btn-block btn d-block ml-auto tm-btn-primary",style:{color:"#fff",backgroundColor:"rgba(1, 7, 56, 0.815)"},children:["Contact Us"," "]})})]})})]})}}]),c}(s.Component),z=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(b.a)(this,c),(a=t.call(this,e)).state={userid:localStorage.getItem("userid"),images:[]},a.getimages=function(e){try{return y.a.get("http://127.0.0.1:8000/api/v1/user/user/".concat(e,"/images/"))}catch(t){console.error(t)}},a.deleteimg=function(e){return y.a.delete("http://127.0.0.1:8000/api/v1/ocr_uploader/images/".concat(e,"/"))},a.delImage=function(e){a.deleteimg(e.id).then((function(){var t=a.state.images,c=t.indexOf(e);t.splice(c,1),a.setState({images:t})})).catch((function(e){alert("Somthing was Wrong.. Check if your username,email or password are correct...! ")}))},a.componentDidMount=function(){a.getimages(a.state.userid).then((function(e){console.log(e.data),a.setState({images:e.data.OCRText})}))},a}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("div",{class:"mb-2",children:Object(a.jsx)("h5",{children:"Pictures that you uploaded:"})}),Object(a.jsx)("ul",{className:"list-group list-group-flush",children:this.state.images.map((function(t){return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"left"},children:Object(a.jsxs)("p",{children:[V(t.image)," "]})}),Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("button",{class:"btn btn-outline-primary",style:{color:"#fff",textAlign:"right",backgroundColor:"rgba(1, 7, 56, 0.815)"},children:"view"}),"   "," ",Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.delImage(t)},children:"Delete"})]})]})},t.id)}))})]})})}}]),c}(s.Component),W=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(b.a)(this,c),(a=t.call(this,e)).state={userid:localStorage.getItem("userid"),getdoc:[]},a.getdoc=function(e){try{return y.a.get("http://127.0.0.1:8000/api/v1/user/user/".concat(e,"/docs/"))}catch(t){console.error(t)}},a.deletedoc=function(e){return y.a.delete("http://127.0.0.1:8000/api/v1/ocr_uploader/documents/".concat(e,"/"))},a.deldoc=function(e){a.deletedoc(e.id).then((function(){var t=a.state.getdoc,c=t.indexOf(e);t.splice(c,1),a.setState({getdoc:t})})).catch((function(e){alert("Somthing was Wrong.. Check if your username,email or password are correct...! ")}))},a.componentDidMount=function(){a.getdoc(a.state.userid).then((function(e){console.log(e.data),a.setState({getdoc:e.data.Document})}))},a}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("div",{class:"mb-2",children:Object(a.jsx)("h5",{children:"Documents that you uploaded:"})}),Object(a.jsx)("ul",{className:"list-group list-group-flush",children:this.state.getdoc.map((function(t){return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col form-group",style:{textAlign:"left"},children:Object(a.jsxs)("p",{children:[V(t.pdf_input)," "]})}),Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("button",{class:"btn btn-outline-primary",style:{color:"#fff",textAlign:"right",backgroundColor:"rgba(1, 7, 56, 0.815)"},children:"view"}),"   "," ",Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.deldoc(t)},children:"Delete"})]})]})},t.id)}))})]})})}}]),c}(s.Component),B=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(b.a)(this,c),(a=t.call(this,e)).state={userid:localStorage.getItem("userid"),voic:[]},a.getimages=function(e){try{return y.a.get("http://127.0.0.1:8000/api/v1/user/user/".concat(e,"/voices/"))}catch(t){console.error(t)}},a.deleteimg=function(e){return y.a.delete("http://127.0.0.1:8000/api/v1/ocr_uploader/images/".concat(e,"/"))},a.delImage=function(e){a.deleteimg(e.id).then((function(){var t=a.state.voic,c=t.indexOf(e);t.splice(c,1),a.setState({voic:t})})).catch((function(e){alert("Somthing was Wrong.. Check if your username,email or password are correct...! ")}))},a.componentDidMount=function(){a.getimages(a.state.userid).then((function(e){console.log(e.data),a.setState({voic:e.data.Voice})}))},a}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"col",children:[Object(a.jsx)("div",{class:"mb-2",children:Object(a.jsx)("h5",{children:"The audios you uploaded:"})}),Object(a.jsx)("ul",{className:"list-group list-group-flush",children:"test"})]})})}}]),c}(s.Component),R=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(b.a)(this,c);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={tabClicked:{info:!0,img:!1,doc:!1,voc:!1},userId:"",profileId:"",profile:{},user:{}},e.updateUserData=function(t){L(e.state.user.id,t).then((function(t){console.log(t.data),200!==t.status&&201!==t.status||(alert("Edit Done!!"),e.props.history.push("/user/".concat(e.state.userId,"/")))}))},e.componentDidMount=function(){U(e.props.match.params.id).then((function(t){console.log(t.data),e.setState({profile:t.data,userId:t.data.user}),q(e.state.userId).then((function(t){console.log(t.data),e.setState({user:t.data})}))})).catch((function(e){alert("Somthing was Wrong.. so cannot  show your profile")}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this,t="tab-pane fade ",c="tab-pane fade show active";return Object(a.jsx)("main",{role:"main",className:"ml-sm-auto col-12",children:Object(a.jsx)("div",{className:"tm-section-wrap bg-white",children:Object(a.jsx)("section",{id:"talk",className:"row tm-section",children:Object(a.jsx)("div",{class:"col",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col mb-3",children:Object(a.jsx)("div",{class:"card",children:Object(a.jsx)("div",{class:"card-body",children:Object(a.jsxs)("div",{class:"e-profile",children:[Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-12 col-sm-auto mb-3",children:Object(a.jsx)("div",{className:"mx-auto",style:{width:"140px"},children:Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center rounded",style:{height:"140px",backgroundColor:"rgb(233, 236, 239)"},children:Object(a.jsx)("span",{style:{color:"rgb(166, 168, 170)",font:"bold 8pt Arial"},children:Object(a.jsx)("img",{src:"https://bootdey.com/img/Content/avatar/avatar1.png",style:{height:"139px"},alt:"add photo"})})})})}),Object(a.jsxs)("div",{class:"col d-flex flex-column flex-sm-row justify-content-between mb-3",children:[Object(a.jsxs)("div",{class:"text-center text-sm-left mb-2 mb-sm-0",children:[Object(a.jsx)("h4",{class:"pt-sm-2 pb-1 mb-0 text-nowrap",children:this.state.user.username}),Object(a.jsx)("p",{class:"mb-0",children:this.state.user.email}),Object(a.jsx)("div",{class:"mt-2",children:Object(a.jsxs)("button",{class:"btn btn-block btn d-block ml-auto tm-btn-primary",style:{color:"#fff",backgroundColor:"rgba(1, 7, 56, 0.815)"},type:"button",children:[Object(a.jsx)("i",{class:"fa fa-fw fa-camera"}),Object(a.jsx)("span",{children:"Change Photo"})]})})]}),Object(a.jsxs)("div",{class:"text-center text-sm-right",children:[Object(a.jsx)("div",{class:"text-muted",children:Object(a.jsx)("small",{})}),Object(a.jsx)("div",{class:"text-muted",children:Object(a.jsx)("small",{})})]})]})]}),Object(a.jsx)("nav",{children:Object(a.jsx)("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist",children:Object(a.jsxs)("ul",{class:"nav nav-tabs",role:"tablist",children:[Object(a.jsx)("li",{class:"nav-item",role:"presentation",children:Object(a.jsx)("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true",onClick:function(){return e.setState({tabClicked:{info:!0,img:!1,doc:!1}})},children:"Information"})}),Object(a.jsx)("li",{class:"nav-item",role:"presentation",children:Object(a.jsx)("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false",onClick:function(){return e.setState({tabClicked:{info:!1,img:!0,doc:!1}})},children:"Your Photos"})}),Object(a.jsx)("li",{class:"nav-item",role:"presentation",children:Object(a.jsx)("button",{class:"nav-link ",id:"doc","data-bs-toggle":"tab","data-bs-target":"#doc",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false",onClick:function(){return e.setState({tabClicked:{info:!1,img:!1,doc:!0}})},children:"Documents"})}),Object(a.jsx)("li",{class:"nav-item",role:"presentation",children:Object(a.jsx)("button",{class:"nav-link ",id:"voc","data-bs-toggle":"tab","data-bs-target":"#voc",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false",onClick:function(){return e.setState({tabClicked:{info:!1,img:!1,doc:!1,voc:!0}})},children:"Voices"})})]})})}),Object(a.jsxs)("div",{class:"tab-content pt-3",id:"nav-tabContent",children:[Object(a.jsx)("div",{className:this.state.tabClicked.info?c:t,id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab",children:Object(a.jsx)(Y,{values:this.state.user,OnSubmit:this.updateUserData})}),Object(a.jsx)("div",{className:this.state.tabClicked.img?c:t,id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab",children:Object(a.jsx)(z,{})}),Object(a.jsx)("div",{className:this.state.tabClicked.doc?c:t,id:"nav-doc",role:"tabpanel","aria-labelledby":"nav-home-tab",children:Object(a.jsx)(W,{})}),Object(a.jsx)("div",{className:this.state.tabClicked.voc?c:t,id:"nav-voc",role:"tabpanel","aria-labelledby":"nav-home-tab",children:Object(a.jsx)(B,{})})]})]})})})}),Object(a.jsx)(M,{})]})})})})})}}]),c}(s.Component);function G(){var e="showIcon styleIcon ",t="hideIcon styleIcon",c=localStorage.getItem("userid"),r="/user/".concat(c,"/"),n=Object(s.useState)(!0),o=Object(l.a)(n,2),b=o[0],j=o[1];return Object(a.jsxs)(i.a,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("nav",{id:"tmSidebar",className:b?"tm-bg-black-transparent tm-sidebar ":"tm-bg-black-transparent tm-sidebar show",children:[Object(a.jsxs)("button",{className:"navbar-toggler",type:"button",style:{background:"rgba(255, 255, 255, 0.3)"},"aria-label":"Toggle navigation",children:[Object(a.jsx)(x.a,{icon:O.b,className:b?e:t,onClick:function(){return j(!b)}}),Object(a.jsx)(x.a,{icon:O.c,className:b?t:e,onClick:function(){return j(!b)}})]}),Object(a.jsx)("div",{className:"tm-sidebar-sticky",onClick:function(){return j(!b)},children:Object(a.jsx)("img",{src:A,className:"logo"})}),Object(a.jsxs)("ul",{id:"tmMainNav",className:"nav flex-column text-uppercase text-right tm-main-nav",onClick:function(){return j(!b)},children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(i.b,{to:"/extractData",className:"nav-link active",href:"#intro",children:[Object(a.jsx)("span",{className:"d-inline-block mr-3",children:"Home"}),Object(a.jsx)("span",{className:"d-inline-block tm-white-rect"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(i.b,{to:"/extract",className:"nav-link active",href:"#intro",children:[Object(a.jsx)("span",{className:"d-inline-block mr-3",children:"Extract Data "}),Object(a.jsx)("span",{className:"d-inline-block tm-white-rect"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(i.b,{to:"/login",className:"nav-link active",href:"#intro",children:["true"==localStorage.getItem("logeed")?Object(a.jsxs)("span",{className:"d-inline-block mr-3",onClick:function(){localStorage.removeItem("userid"),localStorage.setItem("logeed","false")},children:["LogOut"," "]}):Object(a.jsx)("span",{className:"d-inline-block mr-3",children:"Log In "}),Object(a.jsx)("span",{className:"d-inline-block tm-white-rect"})]})}),Object(a.jsxs)("li",{className:"nav-item",children:[" ","true"==localStorage.getItem("logeed")?Object(a.jsxs)(i.b,{to:r,className:"nav-link active",children:[Object(a.jsx)("span",{className:"d-inline-block mr-3",children:" Your Profile"}),Object(a.jsx)("span",{className:"d-inline-block tm-white-rect"})]}):Object(a.jsxs)(i.b,{to:"/contact",className:"nav-link active",children:[Object(a.jsx)("span",{className:"d-inline-block mr-3",children:"LET'S TALK"}),Object(a.jsx)("span",{className:"d-inline-block tm-white-rect"})]})]})]}),Object(a.jsx)(C,{})]})}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/extractData",exact:!0,component:h}),Object(a.jsx)(d.a,{path:"/contact",exact:!0,component:k}),"true"==localStorage.getItem("logeed")?Object(a.jsx)(d.a,{path:"/extract",exact:!0,component:T}):Object(a.jsx)(d.a,{path:"/extract",exact:!0,component:I}),Object(a.jsx)(d.a,{path:"/login",exact:!0,component:I}),Object(a.jsx)(d.a,{path:"/show",exact:!0,component:_}),Object(a.jsx)(d.a,{path:"/SignUp",exact:!0,component:E}),Object(a.jsx)(d.a,{path:"/user/:id",exact:!0,component:R}),Object(a.jsx)(d.a,{component:p})]})]})}function H(){return Object(a.jsx)("div",{children:Object(a.jsx)("main",{className:"container-fluid",children:Object(a.jsx)(G,{})})})}var J=function(){return Object(a.jsx)(H,{})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,238)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),$()}},[[236,1,2]]]);
//# sourceMappingURL=main.6fbc7983.chunk.js.map