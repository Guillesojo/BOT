var screens = [
  //1
  "https://dexscreener.com/arbitrum/0xc73d2191a1dd0a99b377272899a5569ed83f8cd8",
  "https://dexscreener.com/polygon/0x1dab41a0e410c25857f0f49b2244cd089ab88de6",
  //2
  "https://dexscreener.com/arbitrum/0x4ecbc437911dce221b5f885813caa2c93ca64094",
  "https://dexscreener.com/polygon/0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002-0x2791bca1f2de4661ed88a30c99a7a9449aa84174-0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
  //3
  "https://dexscreener.com/bsc/0x540ebc5c92839c300cb64d8350811aeee0c2b91d",
  "https://dexscreener.com/polygon/0x54db9acc40fd2ce8048fc36330502eedcecb71ba",
  //4
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://dexscreener.com/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1",
  //5
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://dexscreener.com/harmony/0x7d183c0e2d2db4ff643218b2bc05626522f862a7",
  //6
  "https://dexscreener.com/bsc/0x1955b7bf1ef1ecc5385bbcb2c13d529b035c6987",
  "https://dexscreener.com/avalanche/0x68fb75a9488e405630fb6a4d7cce7d194e295d31",
  //7
  "https://dexscreener.com/arbitrum/0x8d1a0676f7f3c4d55c59a963ee710540e6a3deba",
  "https://dexscreener.com/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c",
  //8
  "https://dexscreener.com/avalanche/0x518008472ab60b4450f9077ab6fcf72456613729",
  "https://dexscreener.com/polygon/0xcbd258f33b7a2705e8418708a4f615c43fedf23c",
  //9
  "https://dexscreener.com/polygon/0xd6ab3f53b1d71837fc1d66b856eeba7b87157e50",
  "https://dexscreener.com/bsc/0x62616fe5495c04487ea15739045d4284ee99fdea",
  //10
  "https://dexscreener.com/bsc/0xc560f42334edab3b56ca9f99a7dd788f4010a231",
  "https://dexscreener.com/avalanche/0xbf669420e8b49070f94f7cb04b4a5ecdcd0420c2",
  //11
  "https://dexscreener.com/bsc/0x241684be091a90c08a99df68ca68e05d96e1de10",
  "https://dexscreener.com/polygon/0xcbf71c04148e5c463223f07a64a50f2df46b6cdc",
  //12
  "https://dexscreener.com/polygon/0x76bba00e6d8b037821538f61963e6922e17c98a8",
  "https://dexscreener.com/avalanche/0x4d8bc902e9e6946f7e42aff2abdd24890d02ef0b",
  //13
  "https://dexscreener.com/arbitrum/0x6716ed27f13161ce3374f0d2cc8cef181681e5eb",
  "https://dexscreener.com/bsc/0xeb80530dbbdf489e7a20175ceaa80d4253062dd4",
  //14
  "https://dexscreener.com/polygon/0x034293f21f1cce5908bc605ce5850df2b1059ac0",
  "https://dexscreener.com/bsc/0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713",
  //15
  "https://dexscreener.com/polygon/0xf7abb7dee889da4300a82c26f8c0c725c64bd493",
  "https://dexscreener.com/bsc/0x7062326862fc74d8731deca1d95ca1418896d67c",
  //16
  "https://dexscreener.com/fantom/0xa7010b3ba9efb1af9fa8a30efe74c16a93891775",
  "https://dexscreener.com/bsc/0x89ee0491ce55d2f7472a97602a95426216167189",
  //17
  "https://dexscreener.com/polygon/0x55e49f32fbba12aa360eec55200dafd1ac47aaed",
  "https://dexscreener.com/bsc/0xf1686f87d4c7bc935651f694492edb87f208a6be",
  //18
  "https://dexscreener.com/cronos/0x5383202d48c24aaa19873366168f2ed558a00ff0",
  "https://dexscreener.com/arbitrum/0x2f5e87c9312fa29aed5c179e456625d79015299c",
  //19
  "https://dexscreener.com/polygon/0xb556fed3b348634a9a010374c406824ae93f0cf8",
  "https://dexscreener.com/fantom/0x6badcf8184a760326528b11057c00952811f77af",
  //20
  "https://dexscreener.com/bsc/0x13321acff4a27f3d2bca64b8beac6e5fdaaaf12c",
  "https://dexscreener.com/polygon/0xf67de5cf1fb01dc4df842a846df2a7ec07c41b93",
  //21
  "https://dexscreener.com/arbitrum/0x6716ed27f13161ce3374f0d2cc8cef181681e5eb",
  "https://dexscreener.com/harmony/0x27f3b2df4a81382202e87ee40429e0212ecc7d3f",
  //22
  "https://dexscreener.com/polygon/0x561ed3fbeac3c4e5b060024666f9a1cd2aec7847",
  "https://dexscreener.com/avalanche/0xb448a6772648da6d16ab0167484242e07abf644e",
  //23
  "https://dexscreener.com/polygon/0x7b23afe559433aace4d61ed65e225a74094defcb",
  "https://dexscreener.com/avalanche/0x86783a149fe417831ae8c59dd0e2b60664a3dfd1",
  //24
  "https://dexscreener.com/cronos/0xb6894f071da907301b4f0c4d87d5f2e42e22402d",
  "https://dexscreener.com/polygon/0xab86c5dd50f4e0b54ecb07c4fb07219c60150ebf",
  //25
  "https://dexscreener.com/optimism/0xad4c666fc170b468b19988959eb931a3676f0e9f",
  "https://dexscreener.com/arbitrum/0xc24f7d8e51a64dc1238880bd00bb961d54cbeb29",
  //26
  "https://dexscreener.com/bsc/0x79c38d6c5ea40e9dd82d004bff98e3ec707d2c3d",
  "https://dexscreener.com/polygon/0xad308b210356d69026c08c5f51089197d4bb59a6",
  //27
  "https://dexscreener.com/bsc/0x89c68051543fa135b31c2ce7bd8cdf392345ff01",
  "https://dexscreener.com/polygon/0x5a6861566966654d0464ee5e3f3ec1a034f26cb",
  //28
  "https://dexscreener.com/bsc/0xf4796d9c3f192cfe5ddaca5724378590c6977f14",
  "https://dexscreener.com/fantom/0x83c382cc27b05cc133b1882bc8a468d3c44551680002000000000000000004f5-0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83-0x4f76664105ba7e35dd4904ec70f2042fc17563d9",
  //29
  "https://dexscreener.com/bsc/0xcff61aae2adc7960fdb4d5e26f3d503200396223",
  "https://dexscreener.com/polygon/0x6db145bf810377fdcef7508a3e62d5f0c4e26ce6",
  //30
  "https://dexscreener.com/cronos/0x0fbab8a90cac61b481530aad3a64fe17b322c25d",
  "https://dexscreener.com/fantom/0x1a2857b70d596eaa7182427c71cefd780a8f2aca",
  //31
  "https://dexscreener.com/polygon/0xadbd183ff04ff3dc9cd980f07b308c25df77e860",
  "https://dexscreener.com/bsc/0x1766f21f6581ae7410dd7d481c384b2b70bcc42e",
  //32
  "https://dexscreener.com/avalanche/0x6a0c03c0b933875daf767bb90584ba696b713243",
  "https://dexscreener.com/bsc/0x8cb83d4b4a406589b78664add7060a79430c077a",
  "https://dexscreener.com/arbitrum/0x67d6cbf707fe5747989cb2c3758d101e11459ea9",
  "https://dexscreener.com/cronos/0x8a01774bf0622cb45b207bf2baf0d694300dac60",
  "https://dexscreener.com/polygon/0xd0595ff44638182e6b54051493ec0f045d04335f",
  "https://dexscreener.com/fantom/0x9baa8eea25522234bbe36e93133db34711d3e66b",
  //33
  "https://dexscreener.com/polygon/0xab4b9f608f2b5e53b259b1878b68b93a1309578b",
  "https://dexscreener.com/bsc/0x41138b6466e1d92ae05495735d46586b74efad75",
  //34
  "https://dexscreener.com/bsc/0x8205a8b42ee0bfdab43af3c971d97e150a1e48ae",
  "https://dexscreener.com/polygon/0x78b1644539bb233d1477667ebd51d9db6ed7abcc",
  //35
  "https://dexscreener.com/polygon/0x1baa09ad3e0c532d92a5bd5e48fff8c7e1cf0599",
  "https://dexscreener.com/bsc/0xc2afcd40c3959f450bebdc55dc1306ce0ee892e4",
  //36
  "https://dexscreener.com/fantom/0x9ba499753ea5407d5578718a8d37453ecbf609f9",
  "https://dexscreener.com/arbitrum/0x7ffaf4698635a7679ce508160f2156b8739f37fe",
  //37
  "https://dexscreener.com/fantom/0x297c8990134bf1ee08ae5d8805042fbac8781201",
  "https://dexscreener.com/kcc/0x080dbc31cb82bb3263a86ad062fe80281cdf22ba",
  //38
  "https://dexscreener.com/bsc/0x8e2132bb21143ef39098ba0428c7bcd2e0a20da6",
  "https://dexscreener.com/polygon/0xd10bb4ed281a84492343573885168027cc625bf7",
  //39
  "https://dexscreener.com/polygon/0xd15eb8710e28c23993968e671807d572189cc86e",
  "https://dexscreener.com/cronos/0x722f19bd9a1e5ba97b3020c6028c279d27e4293c",
  //40
  "https://dexscreener.com/polygon/0x290a4793b4e972188482b8046e7ea2ea5d3fdbaf",
  "https://dexscreener.com/bsc/0x58aed290f42963a502626774bd8fa03f33c9b71f",
  //41
  "https://dexscreener.com/avalanche/0x11c0f9134d7db45e3dab7a78ac3c957a92229e8c",
  "https://dexscreener.com/fantom/0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3",
  //42
  "https://dexscreener.com/cronos/0x2a560f2312cb56327ad5d65a03f1bfec10b62075",
  "https://dexscreener.com/bsc/0xdcbc1d9d48016b8d5f3b0f9045eb3b72f38e6b93",
  //43
  "https://dexscreener.com/fantom/0x0e41768de15cccc1715fe8aefb6f948349427c140001000000000000000005b9-0x40df1ae6074c35047bff66675488aa2f9f6384f3-0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454",
  "https://dexscreener.com/moonbeam/0x6775ff3828a19eb5926c0c4d572183ca15aa4c08",
  //44
  "https://dexscreener.com/fantom/0x89d9bc2f2d091cfbfc31e333d6dc555ddbc2fd29",
  "https://dexscreener.com/osmosis/731",
  //45
];

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
