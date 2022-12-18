function arb1(chain) {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x45dDa9cb7c25131DF268515131f647d726f50608";

  if (chain == "1") {
    return pair1;
  } else {
    return pair2;
  }
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
