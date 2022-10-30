"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[933],{933:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(791),r=n(434),i=n(829),s=function(e){return e.contacts.items},o=function(e){return e.contacts},c=function(e){return e.filter.filter},l="ContactsList_contListWrapper__pBFRU",u="ContactsList_button__EDc5e",d=n(184),p=function(){var e=(0,r.v9)(o),t=e.items,n=e.isLoading,s=e.error,p=(0,r.v9)(c),m=(0,r.I0)();(0,a.useEffect)((function(){m((0,i.yF)())}),[m]);return(0,d.jsxs)("ul",{className:l,children:[n&&!s&&(0,d.jsx)("b",{children:"Request in progress..."}),(null===t||void 0===t?void 0:t.length)>0&&t.filter((function(e){var t=e.name;return!(p&&!t.toLowerCase().includes(p.toLowerCase()))})).map((function(e){return(0,d.jsxs)("li",{children:[e.name,": ",e.phone,(0,d.jsx)("button",{type:"button",className:u,onClick:function(){return t=e.id,m((0,i.GK)(t));var t},children:"Delete"})]},e.id)}))]})},m=n(2),h={},f=function(){var e=(0,r.v9)(c),t=(0,r.I0)();return(0,d.jsxs)("div",{className:h.filterWrapper,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",value:e,id:"filter",onChange:function(e){t((0,m.a)(e.target.value))}})]})},v={wrapper:"ContactForm_wrapper__-Umw-",button:"ContactForm_button__eSwX9"},b=function(){var e=(0,r.v9)(s),t=(0,r.v9)(o).isLoading,n=(0,r.I0)();(0,a.useEffect)((function(){n((0,i.yF)())}),[n]);var c=function(t){var a=t.name;e.map((function(e){return e.name.toLocaleLowerCase()})).includes(a.toLocaleLowerCase())?alert("".concat(a," is already in contact.")):n((0,i.uK)(t))};return(0,d.jsxs)("div",{children:[t&&(0,d.jsx)("p",{children:"Wait, please..."}),(0,d.jsx)("form",{className:v.form,onSubmit:function(e){e.preventDefault();var t=e.target,n=t.inputName,a=t.inputTel,r=n.value,i=a.value;c({name:r,number:i}),t.reset()},children:(0,d.jsxs)("div",{className:v.wrapper,children:[(0,d.jsx)("h2",{children:"Phonebook"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"inputName",children:"Name"}),(0,d.jsx)("input",{id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"inputTel",children:"Number"}),(0,d.jsx)("input",{id:"inputTel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{type:"submit",className:v.button,children:"Add contact"})]})}),(0,d.jsx)(f,{}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=933.3f78a10a.chunk.js.map