var screen1 =
  "https://dexscreener.com/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8";

var screen2 =
  "https://dexscreener.com/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6";

async function arb1() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0xdd16a913f7a275525c3ef23c91df7ee52164ae50";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x0db644468cd5c664a354e31aa1f6dba1d1dead47";

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
z;
