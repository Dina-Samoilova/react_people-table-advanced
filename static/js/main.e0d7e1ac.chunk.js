(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(19),n=s.n(c),a=s(9),r=s(3),l=s(1),i=s.n(l),o=s(0),d=function(){return Object(o.jsx)("h2",{className:"subtitle is-3 has-text-centered",children:"Home page"})},j=s(10),b=s(7),u=s(4),h=s.n(u),m=function(){return fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json")).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.statusText)))}))},O=i.a.createContext({people:[],setPeople:function(){}}),x=function(e){var t=e.children,s=Object(l.useState)([]),c=Object(b.a)(s,2),n=c[0],a=c[1],r=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){r()}),[]);var i=Object(l.useMemo)((function(){return{people:n,setPeople:a}}),[n]);return Object(o.jsx)(O.Provider,{value:i,children:t})},p=s(8),g=s.n(p),f=s(20),v=s.n(f),N=s(21),y=function(e){var t=e.person,s=Object(r.g)().search;return Object(o.jsx)(N.a,{selector:"#".concat(t.slug),smooth:!0,scrollOptions:{block:"center"},children:Object(o.jsx)(a.b,{to:{pathname:"/people/".concat(t.slug),search:s},className:"m"===t.sex?"has-text-link":"has-text-danger",children:t.name})})},k=function(e){var t=e.person,s=e.mother,c=e.father,n=Object(a.d)(),l=Object(b.a)(n,1)[0].get("sortBy")||"",i=Object(r.i)().slug;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{className:g()({"has-background-link-light":"name"===l,"has-background-grey-lighter":t.slug===i}),children:Object(o.jsx)(y,{person:t})}),Object(o.jsx)("td",{className:g()({"has-background-link-light":"sex"===l,"has-background-grey-lighter":t.slug===i}),children:"f"===t.sex?"Female":"Male"}),Object(o.jsx)("td",{className:g()({"has-background-link-light":"born"===l,"has-background-grey-lighter":t.slug===i}),children:t.born}),Object(o.jsx)("td",{className:g()({"has-background-link-light":"died"===l,"has-background-grey-lighter":t.slug===i}),children:t.died}),Object(o.jsx)("td",{children:s?Object(o.jsx)(y,{person:s}):t.motherName||Object(o.jsx)("p",{className:"is-italic",children:"unknown"})}),Object(o.jsx)("td",{children:c?Object(o.jsx)(y,{person:c}):t.fatherName||Object(o.jsx)("p",{className:"is-italic",children:"unknown"})})]})},w=(s(40),function(){var e=Object(l.useContext)(O).people,t=Object(r.i)().slug,s=Object(a.d)(),c=Object(b.a)(s,1)[0],n=Object(r.h)(),i=c.get("sortBy")||"",d=c.get("sortOrder")||"",j=c.get("query")||"",u=Object(l.useState)(j),h=Object(b.a)(u,2),m=h[0],x=h[1],p=Object(l.useMemo)((function(){return e?e.filter((function(e){var t,s;return e.name.toLowerCase().includes(j)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(j))||(null===(s=e.fatherName)||void 0===s?void 0:s.toLowerCase().includes(j))})):[]}),[e,j]),f=Object(l.useCallback)(v()((function(e){e?c.set("query",e.toLowerCase()):c.delete("query"),n("?".concat(c.toString()))}),500),[]),N=function(e){return p.find((function(t){return t.name===e.motherName}))||null},y=function(e){return p.find((function(t){return t.name===e.fatherName}))||null};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"field is-grouped is-justify-content-space-between",children:[Object(o.jsxs)("p",{className:"control has-icons-left",style:{width:"50%"},children:[Object(o.jsx)("input",{type:"search",value:m,placeholder:"Person I'm looking for",className:"input",onChange:function(e){x(e.target.value),f(e.target.value)},style:{width:"100%"}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-search"})})]}),Object(o.jsx)("div",{className:"buttons",children:Object(o.jsx)(a.b,{to:"/people/new",className:"button is-link",children:"Add Person"})})]}),Object(o.jsxs)("table",{className:"table is-hoverable is-striped is-fullwidth PeopleTable",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-white-ter",children:[["Name","Sex","Born","Died"].map((function(e){return Object(o.jsx)("th",{className:g()("table__sort p-1",{"table__sort--asc":"asc"===d&&i===e.toLowerCase(),"table__sort--desc":"desc"===d&&i===e.toLowerCase(),"has-background-link-light":i===e.toLowerCase()}),onClick:function(){return t=e.toLowerCase(),c.set("sortBy",t),c.set("sortOrder","asc"!==d?"asc":"desc"),n("?".concat(c.toString()),{replace:!0}),void p.sort((function(e,s){switch(t){case"name":case"sex":return"asc"===d?s[t].localeCompare(e[t]):e[t].localeCompare(s[t]);case"born":case"died":return"asc"===d?s[t]-e[t]:e[t]-s[t];default:return 0}}));var t},children:e},e)})),Object(o.jsx)("th",{className:"p-1",children:"Mother"}),Object(o.jsx)("th",{className:"p-1",children:"Father"})]})}),Object(o.jsx)("tbody",{children:p.map((function(e){return Object(o.jsx)("tr",{id:e.slug,className:g()("Person",{"has-background-grey-lighter":e.slug===t}),children:Object(o.jsx)(k,{person:e,mother:N(e),father:y(e)})},e.slug)}))})]})]})}),_=function(){var e=Object(l.useContext)(O).people;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"subtitle is-3 has-text-centered",children:"People page"}),e.length>0&&Object(o.jsx)("div",{className:"box px-2",children:Object(o.jsx)(w,{})})]})},C=function(){return Object(o.jsx)("p",{className:"has-text-centered has-text-danger is-size-2",children:"Page not found"})},P=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("nav",{className:"navbar is-fixed-top is-light ml-4",role:"navigation",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return g()("navbar-item is-tab has-text-weight-semibold is-size-5",{"is-active":t})},to:"/",children:"Home"}),Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return g()("navbar-item is-tab has-text-weight-semibold is-size-5",{"is-active":t})},to:"/people",children:"People"})]})}),Object(o.jsx)("main",{className:"container is-max-widescreen mt-6 px-4",children:Object(o.jsx)(r.b,{})}),Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"content has-text-centered",children:Object(o.jsx)("p",{children:"Created 2022"})})})]})},F=s(5),L=s(2),S=s(22),z=(s(41),function(){var e=Object(l.useContext)(O),t=e.people,s=e.setPeople,c=Object(r.h)(),n=Object(S.a)({mode:"onChange"}),a=n.register,i=n.handleSubmit,d=n.formState,j=d.errors,b=d.isValid,u=n.getValues,h=n.reset,m=u(),x=(new Date).getFullYear(),p=function(e){return t.filter((function(t){return t.sex===e&&t.born+15<+m.born&&t.born+65<+m.born&&t.died>=+m.born}))},f=Object(l.useMemo)((function(){return p("f")}),[m.born]),v=Object(l.useMemo)((function(){return p("m")}),[m.born]);return Object(o.jsxs)("div",{className:"box px-2",children:[Object(o.jsx)("h2",{className:"subtitle is-3 has-text-centered",children:"Add a new person"}),Object(o.jsxs)("form",{autoComplete:"off",onSubmit:i((function(e){var n="".concat(e.name.toLowerCase().split(" ").join("-"),"-").concat(e.born),a=Object(L.a)(Object(L.a)({},e),{},{slug:n});s([].concat(Object(F.a)(t),[a])),c("/people"),h()})),children:[Object(o.jsx)("div",{className:"field",children:Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",Object(L.a)(Object(L.a)({type:"text"},a("name",{required:!0,minLength:3,maxLength:50,pattern:{value:/^[A-Za-z][A-Za-z ]*$/,message:"*Name should contain only letters and no less 3"}})),{},{placeholder:"Enter a Name",className:g()("input",{"is-success":m.name,"is-danger":null===j||void 0===j?void 0:j.name})})),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),!(null!==j&&void 0!==j&&j.name)&&m.name&&Object(o.jsx)("span",{className:"icon is-small is-right",children:Object(o.jsx)("i",{className:"fas fa-check"})}),(null===j||void 0===j?void 0:j.name)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"icon is-small is-right",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(o.jsx)("p",{className:"help is-danger",children:"Please enter valid name."}),Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.name.message})]})]})}),Object(o.jsx)("div",{className:"field",children:Object(o.jsxs)("div",{className:"control",children:[Object(o.jsxs)("label",{htmlFor:"male",className:"radio",children:[Object(o.jsx)("input",Object(L.a)(Object(L.a)({id:"male",type:"radio"},a("sex",{required:{value:!0,message:"*Please choose a gender"}})),{},{value:"m"})),"\xa0Male"]}),Object(o.jsxs)("label",{htmlFor:"female",className:"radio",children:[Object(o.jsx)("input",Object(L.a)(Object(L.a)({id:"female",type:"radio"},a("sex",{required:!0})),{},{value:"f"})),"\xa0Female"]}),null===m.sex&&Object(o.jsx)("p",{className:"help is-danger",children:"*Please choose a gender"})]})}),Object(o.jsxs)("div",{className:"field is-grouped is-justify-content-space-between",children:[Object(o.jsxs)("div",{className:"control field__year",children:[Object(o.jsx)("input",Object(L.a)(Object(L.a)({type:"number"},a("born",{required:!0,min:{value:1400,message:"*Born date can't be less then 1400"},max:{value:x,message:"*Born date can't be more then current year - ".concat(x)},pattern:/^[0-9]*$/})),{},{placeholder:"Enter a Born Year",min:"1400",max:x,className:g()("input",{"is-success":m.born,"is-danger":null===j||void 0===j?void 0:j.born})})),(null===j||void 0===j?void 0:j.born)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"help is-danger",children:"Please enter valid born year."}),Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.born.message})]})]}),Object(o.jsxs)("div",{className:"control field__year",children:[Object(o.jsx)("input",Object(L.a)(Object(L.a)({type:"number"},a("died",{required:!0,min:{value:m.born,message:"*Died date can't be less then born date - ".concat(m.born)},max:{value:+m.born+150,message:"*Age couldn't be more than 150"},pattern:/^[0-9]*$/})),{},{placeholder:"Enter a Died Year",min:m.born,max:x,className:g()("input",{"is-success":m.died,"is-danger":null===j||void 0===j?void 0:j.died}),disabled:!m.born})),(null===j||void 0===j?void 0:j.died)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"help is-danger",children:"Please enter valid died year."}),Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.died.message})]})]})]}),Object(o.jsxs)("div",{className:"field is-grouped is-justify-content-space-between",children:[Object(o.jsx)("div",{className:"control field__select",children:Object(o.jsx)("div",{className:"select select__sizing",children:Object(o.jsxs)("select",Object(L.a)(Object(L.a)({},a("motherName")),{},{className:"select__sizing",disabled:!m.born,children:[Object(o.jsx)("option",{value:"",children:"Select mother"}),f.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.slug)}))]}))})}),Object(o.jsx)("div",{className:"control field__select",children:Object(o.jsx)("div",{className:"select select__sizing",children:Object(o.jsxs)("select",Object(L.a)(Object(L.a)({},a("fatherName")),{},{className:"select__sizing",disabled:!m.born,children:[Object(o.jsx)("option",{value:"",children:"Select father"}),v.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.slug)}))]}))})})]}),Object(o.jsxs)("div",{className:"field is-grouped is-justify-content-center",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button is-link",disabled:!b,children:"Submit"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-link is-light",onClick:function(){c(-1)},children:"Cancel"})})]})]})]})}),q=(s(42),s(43),s(44),function(){return Object(o.jsx)(x,{children:Object(o.jsx)(r.e,{children:Object(o.jsxs)(r.c,{path:"/",element:Object(o.jsx)(P,{}),children:[Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(d,{})}),Object(o.jsx)(r.c,{path:"home",element:Object(o.jsx)(r.a,{replace:!0,to:"/"})}),Object(o.jsx)(r.c,{path:"people",element:Object(o.jsx)(_,{}),children:Object(o.jsx)(r.c,{path:":slug",element:Object(o.jsx)(_,{})})}),Object(o.jsx)(r.c,{path:"people/new",element:Object(o.jsx)(z,{})}),Object(o.jsx)(r.c,{path:"*",element:Object(o.jsx)(C,{})})]})})})});n.a.render(Object(o.jsx)(a.a,{children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e0d7e1ac.chunk.js.map