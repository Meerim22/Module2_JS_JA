function newCard() {
  const productsInner = document.querySelector(".products__inner");
  let  = fetch("/text.json")  // FETCH API
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((e) => {
        let productsItem = document.createElement("article");
        productsItem.className = "products__item";

        let img = document.createElement("img");
        img.className = "products__item-photo";

        let productsItemInfo = document.createElement("div");
        productsItemInfo.className = "products__item-info";

        let header = document.createElement("header");

        let h3 = document.createElement("h3");

        let productsItemPrice = document.createElement("span");
        productsItemPrice.className = "products__item-price";

        let productsItemText = document.createElement("p");
        productsItemText.className = "products__item-text";

        productsInner.appendChild(productsItem);
        productsItem.appendChild(img);
        productsItem.appendChild(productsItemInfo);
        productsItemInfo.appendChild(header);
        productsItemInfo.appendChild(productsItemText);
        header.appendChild(h3);
        header.appendChild(productsItemPrice);

        img.src = e.img;
        h3.innerHTML = e.title;
        productsItemPrice.innerHTML = e.price;
        productsItemText.innerHTML = e.desc;
      });
    });
}
newCard();
