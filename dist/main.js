(()=>{var r={636:r=>{function o(r,o,t){let e,i;e="Computer"===o.name?document.querySelector("div#board-2"):document.querySelector("div#board-1"),t||(i=r.attack(o)),i=r.attack(o,t);const a=document.getElementById(`p${e.id.slice(-1)}-${i}`);return!!i&&(o.board.grid.find((r=>r.coord===i)).ship?a.style.backgroundColor="red":a.style.backgroundColor="green",!0)}r.exports={craftBoards:function(){[document.querySelector("div#board-1"),document.querySelector("div#board-2")].forEach((r=>{const o=r.id.match(/\d+$/);for(let t=1;t<11;t++){const e=document.createElement("div");e.classList.add("row"),e.id=`p${o}-row${t}`,r.appendChild(e)}r.childNodes.forEach((r=>{for(let t=65;t<75;t++){const e=String.fromCharCode(t),i=r.id.match(/\d+$/),a=document.createElement("div");a.classList.add("square"),a.id=`p${o}-${e}${i}`,r.appendChild(a)}}))}))},fillBoard:function(r){r.board.grid.forEach((r=>{r.ship&&(document.getElementById(`p1-${r.coord}`).style.backgroundColor="black")}))},sendAttack:o,clickAttack:function(r,t){document.querySelector("div#board-2").querySelectorAll("div.square").forEach((e=>{e.addEventListener("click",(()=>{o(r,t,e.id.substring(3,6)),o(t,r)}))}))}}},176:(r,o,t)=>{t(211),t(432),r.exports=function(r,o){for(;!r.board.allSunk()&&!o.board.allSunk();)clickAttack(humanPlayer,compPlayer);r.board.allSunk()?alert(`All of ${r.name}'s ships have been sunk! Computer wins!`):alert(`All of the computer's ships have been sunk! ${r.name} wins!`)}},906:r=>{r.exports=class{constructor(){this.grid=[];for(let r=1;r<11;r++)for(let o=65;o<75;o++)this.grid.push({coord:String.fromCharCode(o)+r,ship:void 0,isHit:!1});this.ships=[]}placeShip(r,o,t){let e=o.slice(0,1),i=Number(o.slice(1));for(let o=0;o<r.size;o++){if(i<1||e.charCodeAt(0)>=75)return!1;r.positions[o]={coord:e+i,isHit:!1},"vertical"===t?i-=1:e=String.fromCharCode(e.charCodeAt(0)+1)}const a=[];return r.positions.forEach((o=>{const t=this.grid.find((r=>r.coord===o.coord));t.ship=r.name,a.push(t)})),this.ships.push(r),a}receiveAttack(r){const o=this.grid.find((o=>o.coord===r));if(o.isHit)return!1;o.isHit=!0;const t=this.ships.find((o=>o.positions.some((o=>o.coord===r))));return t&&t.hit(r),!0}allSunk(){return this.ships.every((r=>r.isSunk()))}}},211:(r,o,t)=>{const e=t(906);r.exports=class{constructor(r){this.name=r,this.board=new e}attack(r,o){if(!o){let o=r.board.grid[Math.floor(Math.random()*r.board.grid.length)];for(;!1!==o.isHit;)o=r.board.grid[Math.floor(Math.random()*r.board.grid.length)];return r.board.receiveAttack(o.coord),o.coord}return r.board.receiveAttack(o),o}}},432:r=>{r.exports=class{constructor(r,o){this.name=r,this.size=o,this.positions=Array(o);for(let r=0;r<this.positions.length;r++)this.positions[r]={coord:void 0,isHit:!1}}hit(r){const o=this.positions.find((o=>o.coord===r));return!o.isHit&&(o.isHit=!0,!0)}isSunk(){return this.positions.every((r=>!0===r.isHit))}}}},o={};function t(e){var i=o[e];if(void 0!==i)return i.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,t),a.exports}(()=>{const r=t(636),o=r.craftBoards,e=r.fillBoard,i=(r.sendAttack,r.clickAttack),a=t(432),s=t(211),n=(t(176),new s("Computer")),d=new s("Human");n.board.placeShip(new a("Carrier",5),"A1","horizontal"),n.board.placeShip(new a("Battleship",4),"A2","horizontal"),n.board.placeShip(new a("Cruiser",3),"A3","horizontal"),n.board.placeShip(new a("Submarine",3),"A4","horizontal"),n.board.placeShip(new a("Destroyer",2),"A5","horizontal"),d.board.placeShip(new a("Carrier",5),"A2","horizontal"),d.board.placeShip(new a("Battleship",4),"A4","horizontal"),d.board.placeShip(new a("Cruiser",3),"A6","horizontal"),d.board.placeShip(new a("Submarine",3),"A8","horizontal"),d.board.placeShip(new a("Destroyer",2),"A10","horizontal"),o(),e(d),i(d,n)})()})();