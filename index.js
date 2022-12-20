function arb1(chain) {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/harmony/0x0e00AF5734e64340D4d145B39dA16a8c8aa20547";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0xD0595Ff44638182E6B54051493ec0f045D04335f";
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
  link2.textxxxxContent = "screener";
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
