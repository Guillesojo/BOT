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

async function arb3() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/bsc/0x540ebc5c92839c300cb64d8350811aeee0c2b91d";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x54db9acc40fd2ce8048fc36330502eedcecb71ba";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker5").textContent = data.pair.baseToken.symbol;
    document.getElementById("price5").textContent = data.pair.priceUsd;
    document.getElementById("chain5").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker6").textContent = data.pair.baseToken.symbol;
    document.getElementById("price6").textContent = data.pair.priceUsd;
    document.getElementById("chain6").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff3").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

async function arb4() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/optimism/0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-0x4200000000000000000000000000000000000042-0x97513e975a7fa9072c72c92d8000b0db90b163c5";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/fantom/0x03c6b3f09d2504606936b1a4decefad204687890000200000000000000000015-0x04068da6c83afcfa0e13ba15a6696662335d5b75-0xf24bcf4d1e507740041c9cfd2dddb29585adce1e";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker7").textContent = data.pair.baseToken.symbol;
    document.getElementById("price7").textContent = data.pair.priceUsd;
    document.getElementById("chain7").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker8").textContent = data.pair.baseToken.symbol;
    document.getElementById("price8").textContent = data.pair.priceUsd;
    document.getElementById("chain8").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff4").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

async function arb5() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker9").textContent = data.pair.baseToken.symbol;
    document.getElementById("price9").textContent = data.pair.priceUsd;
    document.getElementById("chain9").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker10").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price10").textContent = data.pair.priceUsd;
    document.getElementById("chain10").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff5").textContent = result;
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

arb3();
setInterval(() => {
  arb1();
}, 5000);

arb4();
setInterval(() => {
  arb1();
}, 5000);

arb5();
setInterval(() => {
  arb1();
}, 5000);
