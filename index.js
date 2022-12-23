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
    "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";

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

async function arb6() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/bsc/0x1955b7bf1ef1ecc5385bbcb2c13d529b035c6987";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x68fb75a9488e405630fb6a4d7cce7d194e295d31";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker11").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price11").textContent = data.pair.priceUsd;
    document.getElementById("chain11").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker12").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price12").textContent = data.pair.priceUsd;
    document.getElementById("chain12").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff6").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

async function arb7() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x8d1a0676f7f3c4d55c59a963ee710540e6a3deba";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker13").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price13").textContent = data.pair.priceUsd;
    document.getElementById("chain13").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker14").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price14").textContent = data.pair.priceUsd;
    document.getElementById("chain14").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff7").textContent = result;
  }
  getpair1();
  getpair2();
  diff();
}

async function arb8() {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x518008472ab60b4450f9077ab6fcf72456613729";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c";

  async function getpair1() {
    const response = await fetch(pair1);
    const data = await response.json();
    document.getElementById("ticker15").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price15").textContent = data.pair.priceUsd;
    document.getElementById("chain15").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function getpair2() {
    const response = await fetch(pair2);
    const data = await response.json();
    document.getElementById("ticker16").textContent =
      data.pair.baseToken.symbol;
    document.getElementById("price16").textContent = data.pair.priceUsd;
    document.getElementById("chain16").textContent = data.pair.chainId;
    return data.pair.priceUsd;
  }

  async function diff() {
    const p1 = await getpair1();
    const p2 = await getpair2();
    const res = (p1 / p2) * 100 - 100;
    const absres = Math.abs(res);
    const result = absres.toFixed(4);
    document.getElementById("pricediff8").textContent = result;
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

arb6();
setInterval(() => {
  arb1();
}, 5000);

arb7();
setInterval(() => {
  arb1();
}, 5000);

arb8();
setInterval(() => {
  arb1();
}, 5000);
