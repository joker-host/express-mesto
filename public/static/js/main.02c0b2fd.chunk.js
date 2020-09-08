(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(17),a(10)),l=a(1),s=a(6),u=a.n(s);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:u.a,alt:"\u0437\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043b\u043e\u0433\u043e\u0442\u0438\u043f :)",className:"header__logo"}))},p=a(11),d=a(7),f=a(8),_="https://mesto.nomoreparties.co/v1/cohort-13",h=new(function(){function e(t){Object(d.a)(this,e),this._headers=t}return Object(f.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(_,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(_,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserUnfo",value:function(e){return fetch("".concat(_,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addCards",value:function(e){return fetch("".concat(_,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCards",value:function(e){return fetch("".concat(_,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"disLikeCards",value:function(e){return fetch("".concat(_,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCards",value:function(e){return fetch("".concat(_,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(_,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({authorization:"296925be-8e2c-44ab-b32c-580bcbc5c9b5","Content-Type":"application/json"}),v=a(9),E=a.n(v),b=r.a.createContext();var C=function(e){var t=e.name,a=e.link,n=e.likes,o=e.owner,c=e._id,i=e.onCardClick,l=e.onCardLike,s=e.onCardDelete,u=(e.isOpen,r.a.useContext(b)),m=o._id===u._id,p="element__delete ".concat(m?"element__delete_visible":"element__delete_hidden"),d=n.some((function(e){return e._id===u._id})),f="element__like ".concat(d?"element__like_active":"");return r.a.createElement("div",{className:"element"},r.a.createElement("img",{src:E.a,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 delete :)",className:p,onClick:function(){s({name:t,link:a,likes:n,owner:o,_id:c})}}),r.a.createElement("img",{alt:"\u0423\u043f\u0441, \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0432\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043d\u0435 \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443",className:"element__photo",src:a,onClick:function(){i({name:t,link:a})}}),r.a.createElement("div",{className:"element__capture-container"},r.a.createElement("p",{className:"element__capture"},t),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{type:"button",className:f,onClick:function(){l({name:t,link:a,likes:n,owner:o,_id:c})}}),r.a.createElement("p",{className:"element__like-counter"},n.length))))};var k=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,o=e.onCardImageClick,c=e.onCardDelete,i=e.onCardLike,l=e.cards,s=r.a.useContext(b);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-wrapper",onClick:n},r.a.createElement("div",{className:"profile__avatar-overlay"}),r.a.createElement("img",{alt:"\u0437\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 :)",className:"profile__avatar",src:s.avatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h2",{className:"profile__author"},s.name),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:t}),r.a.createElement("p",{className:"profile__description"},s.about)),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),r.a.createElement("section",{className:"elements"},l.map((function(e){var t=e._id,a=Object(p.a)(e,["_id"]);return r.a.createElement(C,Object.assign({key:t,_id:t,onCardClick:o,onCardLike:i,onCardDelete:c},a))}))))};var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__capture"},"\xa9 2020 Mesto Russia"))};var N=function(e){var t=e.selectedCard,a=e.onClose,n="",o="";return t&&(n=t.name,o=t.link),r.a.createElement("div",{className:"popup popup_type_image ".concat(t?"popup_opened":"")},r.a.createElement("figure",{className:"popup__container-image"},r.a.createElement("img",{alt:"\u0437\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"popup__image",src:o}),r.a.createElement("figcaption",{className:"popup__capture"},n),r.a.createElement("button",{type:"button",className:"popup__close-icon popup__close-icon_image",onClick:a})))};var j=function(e){var t=e.name,a=e.title,n=e.isOpen,o=e.onClose,c=e.buttonText,i=e.onSubmit,l=e.children;return r.a.createElement("div",{className:"popup popup_type_".concat(t," ").concat(n?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("h2",{className:"popup__title"},a),r.a.createElement("form",{action:"#",method:"POST",name:"form",className:"popup__form popup__form_".concat(t),onSubmit:i,noValidate:!0},l,r.a.createElement("button",{type:"submit",className:"popup__save-button popup__save-button_".concat(t)},c)),r.a.createElement("button",{type:"button",className:"popup__close-icon popup__close-icon_".concat(t),onClick:o})))};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,o=r.a.useContext(b),c=r.a.useState(""),i=Object(l.a)(c,2),s=i[0],u=i[1],m=r.a.useState(""),p=Object(l.a)(m,2),d=p[0],f=p[1];return r.a.useEffect((function(){u(o.name),f(o.about)}),[o]),r.a.createElement(j,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:s,about:d})}},r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:s||"",onChange:function(e){u(e.target.value)},type:"text",name:"name",className:"popup__form-input",defaultValue:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",required:!0,autoComplete:"off",id:"name-input",placeholder:"\u0418\u043c\u044f",minLength:2,maxLength:40,pattern:"[\u0410-\u042f\u0401\u0430-\u044f\u0451A-Za-z-\u2013\u2014\\s]*"}),r.a.createElement("span",{id:"name-input-error",className:"error"}),r.a.createElement("input",{value:d||"",onChange:function(e){f(e.target.value)},type:"text",name:"about",className:"popup__form-input",defaultValue:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",required:!0,autoComplete:"off",id:"job-input",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:2,maxLength:200}),r.a.createElement("span",{id:"job-input-error",className:"error"})))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,o=r.a.useRef();return r.a.createElement(j,{name:"avatar",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value}),o.current.value=""}},r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:o,type:"url",name:"link",id:"avatar-input",className:"popup__form-input single-input",required:!0,autoComplete:"off",placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",minLength:2}),r.a.createElement("span",{id:"avatar-input-error",className:"error"})))};var S=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,o=r.a.useState(""),c=Object(l.a)(o,2),i=c[0],s=c[1],u=r.a.useState(""),m=Object(l.a)(u,2),p=m[0],d=m[1];return r.a.createElement(j,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:i,link:p})}},r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:i,onChange:function(e){s(e.target.value)},type:"text",name:"title",className:"popup__form-input",required:!0,autoComplete:"off",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:1,maxLength:30}),r.a.createElement("span",{id:"title-input-error",className:"error"}),r.a.createElement("input",{value:p,onChange:function(e){d(e.target.value)},type:"url",name:"link",className:"popup__form-input",required:!0,autoComplete:"off",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r.a.createElement("span",{id:"link-input-error",className:"error"})))};var P=function(e){var t=e.isOpen,a=e.onClose,n=e.card,o=e.onDeleteCard;return r.a.createElement(j,{name:"delete-cards",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:a,buttonText:"\u0414\u0430",onSubmit:function(e){e.preventDefault(),o(n)}})};var x=function(){function e(){E(!1),c(!1),d(!1),D(null),L(!1)}var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),p=u[0],d=u[1],f=Object(n.useState)(!1),_=Object(l.a)(f,2),v=_[0],E=_[1],C=Object(n.useState)(!1),j=Object(l.a)(C,2),x=j[0],L=j[1],T=Object(n.useState)(null),A=Object(l.a)(T,2),U=A[0],D=A[1],w=Object(n.useState)({name:"",about:"",avatar:"",_id:"",cohort:""}),I=Object(l.a)(w,2),q=I[0],J=I[1];r.a.useEffect((function(){h.getUserInfo().then((function(e){J(e)})).catch((function(){console.error("error")}))}),[]);var F=Object(n.useState)([]),V=Object(l.a)(F,2),z=V[0],G=V[1];function H(t){h.addCards(t).then((function(t){G([].concat(Object(i.a)(z),[t])),e()}))}r.a.useEffect((function(){h.getInitialCards().then((function(e){G(e)})).catch((function(){console.error("error")}))}),[]);var M=r.a.useState({}),R=Object(l.a)(M,2),B=R[0],Z=R[1];return r.a.createElement(b.Provider,{value:q},r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"page"},r.a.createElement(m,null),r.a.createElement(k,{onEditProfile:function(){c(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){E(!0)},onCardImageClick:function(e){D({name:e.name,link:e.link})},onCardLike:function(e){e.likes.some((function(e){return e._id===q._id}))?h.disLikeCards(e._id).then((function(t){var a=z.map((function(a){return a._id===e._id?t:a}));G(a)})):h.likeCards(e._id).then((function(t){var a=z.map((function(a){return a._id===e._id?t:a}));G(a)}))},onCardDelete:function(e){L(!0),Z(e)},cards:z}),r.a.createElement(g,null),r.a.createElement(O,{isOpen:o,onClose:e,onUpdateUser:function(t){h.setUserUnfo(t).then((function(t){J(t),e()}))}}),r.a.createElement(S,{isOpen:p,onClose:e,onAddPlace:H}),r.a.createElement(y,{isOpen:v,onClose:e,onUpdateAvatar:function(t){h.changeAvatar(t).then((function(t){J(t),e()}))}}),r.a.createElement(N,{selectedCard:U,onClose:e,onAddPlace:H}),r.a.createElement(P,{isOpen:x,onClose:e,card:B,onDeleteCard:function(t){h.deleteCards(t._id).then((function(a){console.log(a);var n=z.filter((function(e){return e._id!=t._id}));G(n),e()}))}}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},9:function(e,t,a){e.exports=a.p+"static/media/delete.4220563a.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.02c0b2fd.chunk.js.map