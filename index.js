Notification.requestPermission();

async function info() {
  const requestURL = "info.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const list = await response.json();
  return list;
}

function create() {
  const rows = 23;
  const container = document.getElementsByClassName("container-fluid")[0];
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = "cell col-lg-4 col-xs";

      const arb = document.createElement("div");
      arb.id = `arb${i * 3 + j + 1}`;
      arb.className = "arbitrage";

      const card = document.createElement("div");
      card.className = "card";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const p1 = document.createElement("p");
      p1.innerHTML = `
        <span id="tickerA${i * 3 + j + 1}"></span> <span id="chainA${
        i * 3 + j + 1
      }"></span>
        <span id="priceA${i * 3 + j + 1}"></span>
        <span id="scr${i * 6 + j * 2 + 1}" class="screener"></span>
      `;
      const p2 = document.createElement("p");
      p2.innerHTML = `
        <span id="tickerB${i * 3 + j + 1}"></span> <span id="chainB${
        i * 3 + j + 1
      }"></span>
        <span id="priceB${i * 3 + j + 1}"></span>
        <span id="scr${i * 6 + j * 2 + 2}" class="screener"></span>
      `;

      const p3 = document.createElement("p");
      p3.className = "diff";
      p3.innerHTML = `<span id="pricediff${i * 3 + j + 1}"></span>`;

      cardBody.appendChild(p1);
      cardBody.appendChild(p2);
      cardBody.appendChild(p3);

      card.appendChild(cardBody);
      arb.appendChild(card);
      cell.appendChild(arb);
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}
create();

async function arbs() {
  async function AP(offset) {
    const list = await info();
    const urls = [];
    for (var i = offset; i < list.length; i += 2) {
      const full = `https://api.dexscreener.com/latest/dex/pairs/${list[i]}`;
      urls.push(full);
    }
    return urls;
  }

  async function getData(urlList) {
    const responses = await Promise.all(urlList.map((url) => fetch(url)));
    const dataList = await Promise.all(
      responses.map((response) => response.json())
    );
    return dataList;
  }

  async function updatePairs(dataList, baseId, priceId, chainId) {
    const price = [];
    for (var i = 0; i < dataList.length; i++) {
      const data = dataList[i];
      document.getElementById(
        `${baseId}${i + 1}`
      ).textContent = `${data.pair.baseToken.symbol} on`;
      document.getElementById(`${priceId}${i + 1}`).textContent =
        data.pair.priceUsd;
      document.getElementById(
        `${chainId}${i + 1}`
      ).textContent = `${data.pair.chainId}: `;
      price.push(data.pair.priceUsd);
    }
    return price;
  }

  const pair1Data = await getData(await AP(0));
  const pair2Data = await getData(await AP(1));
  console.log(updatePairs(pair1Data, "tickerA", "priceA", "chainA"));
  // updatePairs(pair1Data, "tickerA", "priceA", "chainA");
  // updatePairs(pair2Data, "tickerB", "priceB", "chainB");

  async function diff() {
    const resul = [];
    const price1 = await updatePairs(pair1Data, "tickerA", "priceA", "chainA");
    const price2 = await updatePairs(pair2Data, "tickerB", "priceB", "chainB");

    const l = await updatePairs(pair1Data, "tickerA", "priceA", "chainA");
    for (var i = 0; i < l.length; i++) {
      const p1 = price1[i];
      const p2 = price2[i];
      const res = (p1 / p2) * 100 - 100;
      const absres = Math.abs(res);
      const result = absres.toFixed(4);
      document.getElementById("pricediff" + (i + 1)).textContent = result + "%";
      resul.push(result);
    }

    return resul;
  }

  async function identify() {
    const results = await diff();

    const ticker = await getData(await AP(0), (data, i) => {
      return data.pair.baseToken.symbol;
    });
    for (var i = 0; i < results.length; i++) {
      if (results[i] >= 5) {
        document.getElementById("pricediff" + (i + 1)).style.color = "green";
        new Notification("Hay un par con mas de 5% de diferencia " + ticker[i]);
      } else {
        document.getElementById("pricediff" + (i + 1)).style.color = "red";
      }
    }
  }

  identify();
}

async function createLinks() {
  list = await info();
  for (var i = 0; i < list.length; i++) {
    screener = "https://dexscreener.com/" + list[i];
    var link = document.createElement("a");
    link.textContent = "screener";
    link.href = screener;
    link.target = "_blank";
    document.getElementById("scr" + (i + 1)).appendChild(link);
  }
}
createLinks();

arbs();
// Ejecución cada 30 segundos de las funciones "arbs"
setInterval(() => {
  arbs();
}, 60000);
