// newFunction();
// function newFunction() {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
//   );
//   request.send();
//   request.onload = () => {
//     console.log(request);
//   };
// }

function arb1(chain) {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x4eCBc437911DcE221B5f885813cAA2C93ca64094";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3";
  if (chain == "1") {
    return pair1;
  } else {
    return pair2;
  }
}

function screeners() {
  var link1 = document.createElement("a");
  link1.textContent = "screener";
  link1.href =
    "https://dexscreener.com/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7";
  document.getElementById("scr1").appendChild(link1);

  var link2 = document.createElement("a");
  link2.textContent = "screener";
  link2.href =
    "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";
  document.getElementById("scr2").appendChild(link2);
}

async function getpair1() {
  const response = await fetch(arb1("1"));
  const data = await response.json();
  document.getElementById("price1").textContent = data.pair.priceUsd;
  document.getElementById("chain1").textContent = data.pair.chainId;
  return data.pair.priceUsd;
}

async function getpair2() {
  const response = await fetch(arb1("2"));
  const data = await response.json();
  document.getElementById("price2").textContent = data.pair.priceUsd;
  document.getElementById("chain2").textContent = data.pair.chainId;
  return data.pair.priceUsd;
}

async function diff() {
  const p1 = await getpair1();
  const p2 = await getpair2();
  const res = (p1 / p2) * 100 - 100;
  const absres = Math.abs(res);
  const result = absres.toFixed(4);
  document.getElementById("pricediff").textContent = result;
}

getpair1();
setInterval(() => {
  getpair1();
}, 5000);

getpair2();
setInterval(() => {
  getpair2();
}, 5000);

diff();
setInterval(() => {
  diff();
}, 5000);

screeners();
