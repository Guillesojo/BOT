const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
);
request.send();
request.onload = () => {
  console.log(request);
};