const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
);
request.send();
request.onload = () => {
  console.log(request);
};
function arb1(chain) {
  const pair1 =
    "https://api.dexscreener.com/latest/dex/pairs/harmony/0x7D183C0E2D2Db4ff643218b2bc05626522F862A7";

  const pair2 =
    "https://api.dexscreener.com/latest/dex/pairs/polygon/0x7b23afe559433aaCE4D61ED65E225A74094defcB";

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
}, 2000);

getpair2();
setInterval(() => {
  getpair2();
}, 2000);

diff();
setInterval(() => {
  diff();
}, 2000);