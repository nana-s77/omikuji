"use strict";
//btnを取得
// 取得したbtn要素をクリックしたときに処理を走らせる;

{
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    //const results = ["大吉", "中吉", "凶", "末吉"];
    // const results = ["大吉", "大吉", "大吉", "凶"];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = n;
    // btn.textContent = results[n];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "大吉"; //５％
    } else if (n < 0.02) {
      btn.textContent = "中吉"; //15%
    } else {
      btn.textContent = "凶"; //80%
    }
  });
}
