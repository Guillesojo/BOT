async function arb1() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker1").textContent = data.pair.baseToken.symbol;
    document.getElementById("price1").textContent = data.pair.priceUsd;
    document.getElementById("chain1").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker2").textContent = data.pair.baseToken.symbol;
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
    document.getElementById("pricediff1").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

async function arb2() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x4ecbc437911dce221b5f885813caa2c93ca64094";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker3").textContent = data.pair.baseToken.symbol;
    document.getElementById("price3").textContent = data.pair.priceUsd;
    document.getElementById("chain3").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker4").textContent = data.pair.baseToken.symbol;
    document.getElementById("price4").textContent = data.pair.priceUsd;
    document.getElementById("chain4").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff2").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

arb1();
setInterval(() => {
  arb1();
}, 5000);
arb2();
setInterval(() => {
  arb1();
}, 5000);
