const AP1 = [
  "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8",
  "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x4ecbc437911dce221b5f885813caa2c93ca64094",
  "https://api.dexscreener.com/latest/dex/pairs/bsc/0x540ebc5c92839c300cb64d8350811aeee0c2b91d",
  "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1",
  "https://api.dexscreener.com/latest/dex/pairs/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7",
  "https://api.dexscreener.com/latest/dex/pairs/bsc/0x1955b7bf1ef1ecc5385bbcb2c13d529b035c6987",
  "https://api.dexscreener.com/latest/dex/pairs/arbitrum/0x8d1a0676f7f3c4d55c59a963ee710540e6a3deba",
  "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x518008472ab60b4450f9077ab6fcf72456613729",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0xd6ab3f53b1d71837fc1d66b856eeba7b87157e50",
];

const AP2 = [
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x54db9acc40fd2ce8048fc36330502eedcecb71ba",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://api.dexscreener.com/latest/dex/pairs/avalanche/0x68fb75a9488e405630fb6a4d7cce7d194e295d31",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c",
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c",
  "https://api.dexscreener.com/latest/dex/pairs/bsc/0x62616fe5495c04487ea15739045d4284ee99fdea",
];

async function arbs() {
  async function getpair1() {
    const prices = [];
    for (let i = 0; i < AP1.length; i++) {
      const response = await fetch(AP1[i]);
      const data = await response.json();
      document.getElementById("tickerA" + (i + 1)).textContent =
        data.pair.baseToken.symbol;
      document.getElementById("priceA" + (i + 1)).textContent =
        data.pair.priceUsd;
      document.getElementById("chainA" + (i + 1)).textContent =
        data.pair.chainId;
      prices.push(data.pair.priceUsd);
    }
    return prices;
  }
  getpair1();

  async function getpair2() {
    const prices = [];
    for (let i = 0; i < AP2.length; i++) {
      const response = await fetch(AP2[i]);
      const data = await response.json();
      document.getElementById("tickerB" + (i + 1)).textContent =
        data.pair.baseToken.symbol;
      document.getElementById("priceB" + (i + 1)).textContent =
        data.pair.priceUsd;
      document.getElementById("chainB" + (i + 1)).textContent =
        data.pair.chainId;
      prices.push(data.pair.priceUsd);
    }
    return prices;
  }
  getpair2();

  async function diff() {
    const price1 = await getpair1();
    const price2 = await getpair2();
    for (var i = 0; i < AP1.length; i++) {
      const p1 = price1[i];
      const p2 = price2[i];
      const res = (p1 / p2) * 100 - 100;
      const absres = Math.abs(res);
      const result = absres.toFixed(4);
      document.getElementById("pricediff" + (i + 1)).textContent = result;
    }
  }
  diff();
}

arbs();
setInterval(() => {
  arbs();
}, 30000);
