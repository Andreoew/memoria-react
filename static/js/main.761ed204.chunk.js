(this["webpackJsonpmemoria-react"]=this["webpackJsonpmemoria-react"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var r=c(1),i=c.n(r),s=c(7),a=c.n(s),n=(c(12),c(5)),d=c(6),o=c(0);function h(t){return Object(o.jsxs)("div",{onClick:function(){t.handleFlip(t.card)},id:t.card.id,className:"card ".concat(t.card.flipped?"flip":""),children:[Object(o.jsx)("div",{className:"card_front",children:Object(o.jsx)("img",{className:"icon",src:"assets/images/".concat(t.card.icon,".png"),alt:t.card.icon})}),Object(o.jsx)("div",{className:"card_back",children:"</>"})]})}function l(t){return Object(o.jsx)("div",{id:"gameBoard",children:t.cards.map((function(e,c){return Object(o.jsx)(h,{handleFlip:t.handleFlip,card:e},c)}))})}function f(t){return t.show?Object(o.jsxs)("div",{id:"gameOver",children:[Object(o.jsx)("div",{children:"Parab\xe9ns, voc\xea completou o jogo!"}),Object(o.jsx)("button",{id:"restart",onClick:t.handleRestart,children:"Jogue Novamente"})]}):Object(o.jsx)(r.Fragment,{})}var u={lockMode:!1,firstCard:null,secondCard:null,techs:["bootstrap","css","electron","firebase","html","javascript","jquery","mongo","node","react"],cards:null,setCard:function(t){var e=this.cards.filter((function(e){return e.id===t}))[0];return console.log(e),!e.flipped&&!this.lockMode&&(this.firstCard?(this.secondCard=e,this.secondCard.flipped=!0,this.lockMode=!0,!0):(this.firstCard=e,this.firstCard.flipped=!0,!0))},checkMatch:function(){return!(!this.firstCard||!this.secondCard)&&this.firstCard.icon===this.secondCard.icon},clearCards:function(){this.firstCard=null,this.secondCard=null,this.lockMode=!1},unflipCards:function(){this.firstCard.flipped=!1,this.secondCard.flipped=!1,this.clearCards()},checkGameOver:function(){return 0===this.cards.filter((function(t){return!t.flipped})).length},createCardsFromTechs:function(){var t=this;return this.cards=[],this.techs.forEach((function(e){t.cards.push(t.createPairFromTech(e))})),this.cards=this.cards.flatMap((function(t){return t})),this.shuffleCards(),this.cards},createPairFromTech:function(t){return[{id:this.createIdWithTech(t),icon:t,flipped:!1},{id:this.createIdWithTech(t),icon:t,flipped:!1}]},createIdWithTech:function(t){return t+parseInt(1e3*Math.random())},shuffleCards:function(t){for(var e=this.cards.length,c=0;0!==e;){c=Math.floor(Math.random()*e),e--;var r=[this.cards[e],this.cards[c]];this.cards[c]=r[0],this.cards[e]=r[1]}},flipCard:function(t,e,c){var r=this;this.setCard(t)&&this.secondCard&&(this.checkMatch()?(this.clearCards(),this.checkGameOver()&&e()):setTimeout((function(){r.unflipCards(),c()}),1e3))}};function j(){var t=Object(r.useState)(!1),e=Object(d.a)(t,2),c=e[0],i=e[1],s=Object(r.useState)([]),a=Object(d.a)(s,2),h=a[0],j=a[1];return Object(r.useEffect)((function(){j(u.createCardsFromTechs())}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{handleFlip:function(t){u.flipCard(t.id,(function(){i(!0)}),(function(){j(Object(n.a)(u.cards))})),j(Object(n.a)(u.cards))},cards:h}),Object(o.jsx)(f,{show:c,handleRestart:function(){u.clearCards(),j(u.createCardsFromTechs()),i(!1)}})]})}var p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,r=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),r(t),i(t),s(t),a(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.761ed204.chunk.js.map