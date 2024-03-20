(()=>{var r={636:r=>{function o(r,o,t){let e,i;e="Computer"===o.name?document.querySelector("div#board-2"):document.querySelector("div#board-1"),i=t?r.attack(o,t):r.attack(o);const s=document.getElementById(`p${e.id.slice(-1)}-${i}`);return!!i&&(o.board.grid.find((r=>r.coord===i)).ship?s.style.backgroundColor="red":s.style.backgroundColor="green",!0)}r.exports={craftBoards:function(){[document.querySelector("div#board-1"),document.querySelector("div#board-2")].forEach((r=>{const o=r.id.match(/\d+$/);for(let t=1;t<11;t++){const e=document.createElement("div");e.classList.add("row"),e.id=`p${o}-row${t}`,r.appendChild(e)}r.childNodes.forEach((r=>{for(let t=65;t<75;t++){const e=String.fromCharCode(t),i=r.id.match(/\d+$/),s=document.createElement("div");s.classList.add("square"),s.id=`p${o}-${e}${i}`,r.appendChild(s)}}))}))},fillBoard:function(r){r.board.grid.forEach((r=>{r.ship&&(document.getElementById(`p1-${r.coord}`).style.backgroundColor="black")}))},sendAttack:o,clickAttack:function(r,t){document.querySelector("div#board-2").querySelectorAll("div.square").forEach((e=>{e.addEventListener("click",(()=>{[...e.classList].includes("hit")||(e.classList.add("hit"),o(r,t,e.id.substring(3,6)),o(t,r))}))}))}}},176:(r,o,t)=>{const e=t(636),i=e.craftBoards,s=e.fillBoard,n=e.clickAttack,a=t(432);function c(r,o){return Math.round(Math.random()*(o-r)+r)}r.exports={loadGame:function(r,o){i(),s(r),n(r,o)},checkWin:function(r,o){r.board.allSunk()&&alert(`${r.name}'s ships all sunk! ${o.name} wins!`),o.board.allSunk()&&alert(`${o.name}'s ships all sunk! ${r.name} wins!`)},randomShips:function(r){const o=[new a("Carrier",5),new a("Battleship",4),new a("Cruiser",3),new a("Submarine",3),new a("Destroyer",2)],t=[],e=["horizontal","vertical"];o.forEach((o=>{let i=c(65,74),s=c(1,10);for(;t.includes(`${String.fromCharCode(i)}${s}`);)i=c(65,74),s=c(1,10);const n=`${String.fromCharCode(i)}${s}`,a=e[c(0,1)];r.board.placeShip(o,n,a).forEach((r=>{t.push(r.coord)}))}))}}},906:r=>{r.exports=class{constructor(){this.grid=[];for(let r=1;r<11;r++)for(let o=65;o<75;o++)this.grid.push({coord:String.fromCharCode(o)+r,ship:void 0,isHit:!1});this.ships=[]}placeShip(r,o,t){let e=o.slice(0,1),i=Number(o.slice(1));for(let o=0;o<r.size;o++){if(i<1||e.charCodeAt(0)>=75)return!1;r.positions[o]={coord:e+i,isHit:!1},"vertical"===t?i-=1:e=String.fromCharCode(e.charCodeAt(0)+1)}const s=[];return r.positions.forEach((o=>{const t=this.grid.find((r=>r.coord===o.coord));t.ship=r.name,s.push(t)})),this.ships.push(r),s}receiveAttack(r){const o=this.grid.find((o=>o.coord===r));if(o.isHit)return!1;o.isHit=!0;const t=this.ships.find((o=>o.positions.some((o=>o.coord===r))));return t&&t.hit(r),!0}allSunk(){return this.ships.every((r=>r.isSunk()))}}},211:(r,o,t)=>{const e=t(906);r.exports=class{constructor(r){this.name=r,this.board=new e}attack(r,o){if(!o){let o=r.board.grid[Math.floor(Math.random()*r.board.grid.length)];for(;!1!==o.isHit;)o=r.board.grid[Math.floor(Math.random()*r.board.grid.length)];return r.board.receiveAttack(o.coord),o.coord}return r.board.receiveAttack(o),o}}},432:r=>{r.exports=class{constructor(r,o){this.name=r,this.size=o,this.positions=Array(o);for(let r=0;r<this.positions.length;r++)this.positions[r]={coord:void 0,isHit:!1}}hit(r){const o=this.positions.find((o=>o.coord===r));return!o.isHit&&(o.isHit=!0,!0)}isSunk(){return this.positions.every((r=>!0===r.isHit))}}}},o={};function t(e){var i=o[e];if(void 0!==i)return i.exports;var s=o[e]={exports:{}};return r[e](s,s.exports,t),s.exports}(()=>{const r=t(432),o=t(211),e=t(176),i=e.loadGame,s=e.checkWin,n=e.randomShips,a=new o("Computer"),c=new o("Human");n(a),c.board.placeShip(new r("Carrier",5),"A2","horizontal"),c.board.placeShip(new r("Battleship",4),"A4","horizontal"),c.board.placeShip(new r("Cruiser",3),"A6","horizontal"),c.board.placeShip(new r("Submarine",3),"A8","horizontal"),c.board.placeShip(new r("Destroyer",2),"A10","horizontal"),i(c,a),setInterval(s,100,c,a)})()})();