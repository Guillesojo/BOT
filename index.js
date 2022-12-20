async function arb1() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x86783a149FE417831aE8c59dD0e2b60664A3DFd1";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aaCE4D61ED65E225A74094defcB";

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
