"use strict";
//btnを取得
// 取得したbtn要素をクリックしたときに処理を走らせる;

{
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const results = ["大吉", "中吉", "凶", "末吉"];
    const n = Math.floor(Math.random() * results.length);
    // btn.textContent = n;
    btn.textContent = results[n];
  });
}
