(()=>{var t={636:(t,r,e)=>{const o=e(432);function i(t){t.board.grid.forEach((t=>{t.ship&&(document.getElementById(`p1-${t.coord}`).style.backgroundColor="black")}))}function n(t,r,e){let o,i;o="Computer"===r.name?document.querySelector("div#board-2"):document.querySelector("div#board-1"),i=e?t.attack(r,e):t.attack(r);const n=document.getElementById(`p${o.id.slice(-1)}-${i}`);return!!i&&(r.board.grid.find((t=>t.coord===i)).ship?n.style.backgroundColor="red":n.style.backgroundColor="green",!0)}e(211),t.exports={craftBoards:function(){[document.querySelector("div#board-1"),document.querySelector("div#board-2")].forEach((t=>{t.innerHTML="";const r=t.id.match(/\d+$/);for(let e=1;e<11;e++){const o=document.createElement("div");o.classList.add("row"),o.id=`p${r}-row${e}`,t.appendChild(o)}t.childNodes.forEach((t=>{for(let e=65;e<75;e++){const o=String.fromCharCode(e),i=t.id.match(/\d+$/),n=document.createElement("div");n.classList.add("square"),n.id=`p${r}-${o}${i}`,t.appendChild(n)}}))}))},fillBoard:i,sendAttack:n,clickAttack:function(t,r){document.querySelector("div#board-2").querySelectorAll("div.square").forEach((e=>{e.addEventListener("click",(()=>{[...e.classList].includes("hit")||(e.classList.add("hit"),n(t,r,e.id.substring(3,6)),n(r,t))}))}))},manualShips:function(t){const r=document.querySelector("div.status"),e=document.querySelector("div.message"),n=document.querySelector("div#board-1").querySelectorAll("div.square"),s=[new o("Carrier",5),new o("Battleship",4),new o("Cruiser",3),new o("Submarine",3),new o("Destroyer",2)];let a="horizontal";const c=s[Symbol.iterator]();let d=c.next().value;r.textContent=`Place your ${d.name}`,n.forEach((o=>{let n;function s(){if(!d||"black"===o.style.backgroundColor)return;n&&n.forEach((t=>{"black"!==t.style.backgroundColor&&(t.style.backgroundColor="")}));let r=[],e=o;for(let t=0;t<d.size;t++){if(!e)return;const t=e.id.substring(3,6),o=t[0],i=Number(t.substring(1,3));r.push(e),e="horizontal"===a?e.nextSibling:document.querySelector(`div#p1-${o+(i-1)}`)}r.some((t=>"black"===t.style.backgroundColor))||(r.forEach((t=>{t.style.backgroundColor="rgb(0, 0, 0, 0.25)"})),o.addEventListener("mouseleave",(()=>{r.forEach((r=>{t.board.grid.find((t=>t.coord===r.id.substring(3,6))).ship||(r.style.backgroundColor="")}))})),n=r)}o.addEventListener("click",(function(){d&&t.board.placeShip(d,`${o.id.substring(3,6)}`,a)&&(i(t),d=c.next().value,d?r.textContent=`Place your ${d.name}`:(r.textContent="",e.textContent=""))})),o.addEventListener("mouseover",s),o.addEventListener("contextmenu",(t=>{t.preventDefault(),a="horizontal"===a?"vertical":"horizontal",s()}))}))}}},176:(t,r,e)=>{const o=e(636),i=o.craftBoards,n=o.fillBoard,s=o.clickAttack,a=o.manualShips,c=e(432),d=e(211);function l(t,r){const e=setInterval((()=>{const o=[t,r],i=o.find((t=>t.board.allSunk())),n=o.find((t=>!t.board.allSunk()));i&&(alert(`All of ${i.name}'s ships sunk! ${n.name} wins!`),clearInterval(e),f())}),100,t,r)}function u(t,r){return Math.round(Math.random()*(r-t)+t)}function h(t){const r=[new c("Carrier",5),new c("Battleship",4),new c("Cruiser",3),new c("Submarine",3),new c("Destroyer",2)],e=["horizontal","vertical"];r.forEach((r=>{let o,i,n,s,a;for(;!a;)o=u(65,74),i=u(1,10),n=`${String.fromCharCode(o)}${i}`,s=e[u(0,1)],a=t.board.placeShip(r,n,s)}))}function f(){const t={human:new d("Human"),comp:new d("Computer")},r=t.human,e=t.comp;i(),function(t,r){a(t),h(r)}(r,e),n(r),s(r,e),l(r,e)}t.exports={loadGame:f,checkWin:l,randomizeShips:h}},906:t=>{t.exports=class{constructor(){this.grid=[];for(let t=1;t<11;t++)for(let r=65;r<75;r++)this.grid.push({coord:String.fromCharCode(r)+t,ship:void 0,isHit:!1});this.ships=[]}isOutOfBounds(t,r){return r<1||t.charCodeAt(0)>=75}coordIsTaken(t){return!!this.grid.find((r=>r.coord===t)).ship}placeShip(t,r,e){let o=r.slice(0,1),i=Number(r.slice(1));for(let r=0;r<t.size;r++){if(this.isOutOfBounds(o,i)||this.coordIsTaken(o+i))return!1;t.positions[r]={coord:o+i,isHit:!1},"vertical"===e?i-=1:o=String.fromCharCode(o.charCodeAt(0)+1)}const n=[];return t.positions.forEach((r=>{const e=this.grid.find((t=>t.coord===r.coord));e.ship=t.name,n.push(e)})),!this.ships.includes(t)&&(this.ships.push(t),n)}receiveAttack(t){const r=this.grid.find((r=>r.coord===t));if(r.isHit)return!1;r.isHit=!0;const e=this.ships.find((r=>r.positions.some((r=>r.coord===t))));return e&&e.hit(t),!0}allSunk(){return this.ships.length>0&&this.ships.every((t=>t.isSunk()))}}},211:(t,r,e)=>{const o=e(906);t.exports=class{constructor(t){this.name=t,this.board=new o}attack(t,r){if(!r){let r=t.board.grid[Math.floor(Math.random()*t.board.grid.length)];for(;!1!==r.isHit;)r=t.board.grid[Math.floor(Math.random()*t.board.grid.length)];return t.board.receiveAttack(r.coord),r.coord}return t.board.receiveAttack(r),r}}},432:t=>{t.exports=class{constructor(t,r){this.name=t,this.size=r,this.positions=Array(r);for(let t=0;t<this.positions.length;t++)this.positions[t]={coord:void 0,isHit:!1}}hit(t){const r=this.positions.find((r=>r.coord===t));return!r.isHit&&(r.isHit=!0,!0)}isSunk(){return this.positions.every((t=>!0===t.isHit))}}}},r={};(0,function e(o){var i=r[o];if(void 0!==i)return i.exports;var n=r[o]={exports:{}};return t[o](n,n.exports,e),n.exports}(176).loadGame)()})();