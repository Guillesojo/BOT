var screens = [
  "https://dexscreener.com/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8",
  "https://dexscreener.com/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6",
  "https://dexscreener.com/arbitrum/0x4ecbc437911dce221b5f885813caa2c93ca64094",
  "https://dexscreener.com/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
  "https://dexscreener.com/bsc/0x540ebc5c92839c300cb64d8350811aeee0c2b91d",
  "https://dexscreener.com/polygon/0x54db9acc40fd2ce8048fc36330502eedcecb71ba",
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://dexscreener.com/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1",
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://dexscreener.com/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7",
  "https://dexscreener.com/bsc/0x1955b7bf1ef1ecc5385bbcb2c13d529b035c6987",
  "https://dexscreener.com/avalanche/0x68fb75a9488e405630fb6a4d7cce7d194e295d31",
  "https://dexscreener.com/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c",
  "https://dexscreener.com/arbitrum/0x8d1a0676f7f3c4d55c59a963ee710540e6a3deba",
  "https://dexscreener.com/avalanche/0x518008472ab60b4450f9077ab6fcf7245",
];

// var screen4 =
//   "https://dexscreener.com/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3";

// var screen5 =
//   "https://dexscreener.com/bsc/0x540ebc5c92839c300cb64d8350811aeee0c2b91d";

// var screen6 =
//   "https://dexscreener.com/polygon/0x54db9acc40fd2ce8048fc36330502eedcecb71ba";

// var screen8 =
//   "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";

// var screen7 =
//   "https://dexscreener.com/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1";

// var screen10 =
//   "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb";

// var screen9 =
//   "https://dexscreener.com/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7";

// var screen11 =
//   "https://dexscreener.com/bsc/0x1955b7bf1ef1ecc5385bbcb2c13d529b035c6987";

// var screen12 =
//   "https://dexscreener.com/avalanche/0x68fb75a9488e405630fb6a4d7cce7d194e295d31";

// var screen14 =
//   "https://dexscreener.com/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c";

// var screen13 =
//   "https://dexscreener.com/arbitrum/0x8d1a0676f7f3c4d55c59a963ee710540e6a3deba";

// var screen15 =
//   "https://dexscreener.com/avalanche/0x518008472ab60b4450f9077ab6fcf72456613729";

// var screen16 =
//   "https://dexscreener.com/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c";

// var screen17 =
//   "https://dexscreener.com/bsc/0x62616fe5495c04487ea15739045d4284ee99fdea";

// var screen18 =
//   "https://dexscreener.com/polygon/0xd6ab3f53b1d71837fc1d66b856eeba7b87157e50";

// var screen19 =
//   "https://dexscreener.com/bsc/0xc560f42334edab3b56ca9f99a7dd788f4010a231";

// var screen20 =
//   "https://dexscreener.com/polygon/0x622753917443b4c7e62ec7bd9933b2d16a7795e9";

// var screen21 =
//   "https://dexscreener.com/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8";

// var screen22 =
//   "https://dexscreener.com/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6";

// var screen23 =
//   "https://dexscreener.com/bsc/0x241684be091a90c08a99df68ca68e05d96e1de10";

// var screen24 =
//   "https://dexscreener.com/polygon/0xcbf71c04148e5c463223f07a64a50f2df46b6cdc";

// var screen25 =
//   "https://dexscreener.com/polygon/0x76bba00e6d8b037821538f61963e6922e17c98a8";

// var screen26 =
//   "https://dexscreener.com/avalanche/0x4d8bc902e9e6946f7e42aff2abdd24890d02ef0b";

function createLinks() {
  for (var i = 0; i < screens.length; i++) {
    var link = document.createElement("a");
    link.textContent = "screener";
    link.href = screens[i];
    link.target = "_blank";
    document.getElementById("scr" + (i + 1)).appendChild(link);
  }
}
createLinks();
