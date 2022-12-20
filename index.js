var screen1 =
  "https://dexscreener.com/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7";

var screen2 =
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";

async function arb1() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/bsc/0xc560f42334edab3b56ca9f99a7dd788f4010a231";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x622753917443b4c7e62ec7bd9933b2d16a7795e9";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("price1").textContent = data.pair.priceUsd;
    document.getElementById("chain1").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
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
  getpair2();
  diff();
}

function screeners() {
  var link1 = document.createElement("a");
  link1.textContent = ".";
  link1.href = screen1;
  document.getElementById("scr1").appendChild(link1);

  var link2 = document.createElement("a");
  link2.textContent = ".";
  link2.href = screen2;
  document.getElementById("scr2").appendChild(link2);
}

arb1();
setInterval(() => {
  arb1();
}, 5000);

screeners();
