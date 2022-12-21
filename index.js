async function arb1() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x4d8bc902e9e6946f7e42aff2abdd24890d02ef0b";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x76bba00e6d8b037821538f61963e6922e17c98a8";

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

arb1();
setInterval(() => {
  arb1();
}, 5000);
