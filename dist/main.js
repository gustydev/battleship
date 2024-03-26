(()=>{var t={636:t=>{function r(t,r,o){let i,e;i="Computer"===r.name?document.querySelector("div#board-2"):document.querySelector("div#board-1"),e=o?t.attack(r,o):t.attack(r);const s=document.getElementById(`p${i.id.slice(-1)}-${e}`);return!!e&&(r.board.grid.find((t=>t.coord===e)).ship?s.style.backgroundColor="red":s.style.backgroundColor="green",!0)}t.exports={craftBoards:function(){[document.querySelector("div#board-1"),document.querySelector("div#board-2")].forEach((t=>{const r=t.id.match(/\d+$/);for(let o=1;o<11;o++){const i=document.createElement("div");i.classList.add("row"),i.id=`p${r}-row${o}`,t.appendChild(i)}t.childNodes.forEach((t=>{for(let o=65;o<75;o++){const i=String.fromCharCode(o),e=t.id.match(/\d+$/),s=document.createElement("div");s.classList.add("square"),s.id=`p${r}-${i}${e}`,t.appendChild(s)}}))}))},fillBoard:function(t){t.board.grid.forEach((t=>{t.ship&&(document.getElementById(`p1-${t.coord}`).style.backgroundColor="black")}))},sendAttack:r,clickAttack:function(t,o){document.querySelector("div#board-2").querySelectorAll("div.square").forEach((i=>{i.addEventListener("click",(()=>{[...i.classList].includes("hit")||(i.classList.add("hit"),r(t,o,i.id.substring(3,6)),r(o,t))}))}))}}},176:(t,r,o)=>{const i=o(636),e=i.craftBoards,s=i.fillBoard,n=i.clickAttack,d=o(432),c=o(211);function a(t,r){const o=setInterval((()=>{const i=[t,r],e=i.find((t=>t.board.allSunk())),s=i.find((t=>!t.board.allSunk()));e&&(alert(`All of ${e.name}'s ships sunk! ${s.name} wins!`),clearInterval(o))}),100,t,r)}function l(t,r){return Math.round(Math.random()*(r-t)+t)}function h(t){const r=[new d("Carrier",5),new d("Battleship",4),new d("Cruiser",3),new d("Submarine",3),new d("Destroyer",2)],o=["horizontal","vertical"];r.forEach((r=>{let i,e,s,n,d;for(;!d;)i=l(65,74),e=l(1,10),s=`${String.fromCharCode(i)}${e}`,n=o[l(0,1)],d=t.board.placeShip(r,s,n)}))}t.exports={loadGame:function(){const t={human:new c("Human"),comp:new c("Computer")},r=t.human,o=t.comp;e(),function(t,r){h(t),h(r)}(r,o),s(r),n(r,o),a(r,o)},checkWin:a,randomizeShips:h}},906:t=>{t.exports=class{constructor(){this.grid=[];for(let t=1;t<11;t++)for(let r=65;r<75;r++)this.grid.push({coord:String.fromCharCode(r)+t,ship:void 0,isHit:!1});this.ships=[]}isOutOfBounds(t,r){return r<1||t.charCodeAt(0)>=75}coordIsTaken(t){return!!this.grid.find((r=>r.coord===t)).ship}placeShip(t,r,o){let i=r.slice(0,1),e=Number(r.slice(1));for(let r=0;r<t.size;r++){if(this.isOutOfBounds(i,e)||this.coordIsTaken(i+e))return!1;t.positions[r]={coord:i+e,isHit:!1},"vertical"===o?e-=1:i=String.fromCharCode(i.charCodeAt(0)+1)}const s=[];return t.positions.forEach((r=>{const o=this.grid.find((t=>t.coord===r.coord));o.ship=t.name,s.push(o)})),!this.ships.includes(t)&&(this.ships.push(t),s)}receiveAttack(t){const r=this.grid.find((r=>r.coord===t));if(r.isHit)return!1;r.isHit=!0;const o=this.ships.find((r=>r.positions.some((r=>r.coord===t))));return o&&o.hit(t),!0}allSunk(){return this.ships.every((t=>t.isSunk()))}}},211:(t,r,o)=>{const i=o(906);t.exports=class{constructor(t){this.name=t,this.board=new i}attack(t,r){if(!r){let r=t.board.grid[Math.floor(Math.random()*t.board.grid.length)];for(;!1!==r.isHit;)r=t.board.grid[Math.floor(Math.random()*t.board.grid.length)];return t.board.receiveAttack(r.coord),r.coord}return t.board.receiveAttack(r),r}}},432:t=>{t.exports=class{constructor(t,r){this.name=t,this.size=r,this.positions=Array(r);for(let t=0;t<this.positions.length;t++)this.positions[t]={coord:void 0,isHit:!1}}hit(t){const r=this.positions.find((r=>r.coord===t));return!r.isHit&&(r.isHit=!0,!0)}isSunk(){return this.positions.every((t=>!0===t.isHit))}}}},r={};(0,function o(i){var e=r[i];if(void 0!==e)return e.exports;var s=r[i]={exports:{}};return t[i](s,s.exports,o),s.exports}(176).loadGame)()})();