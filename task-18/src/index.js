import "./style.css";

// body.appendChild(section);

// const section = document.createElement('section');
// section.className = "section";
// section.appendChild(title);

// const title = document.createElement('div');
// title.className = "title";
// title.appendChild(h2);

// const h2 = document.createElement('h2');
// h2.innerHTML = "about";

const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const tabConent = document.getElementById(id);
    tabConent.classList.add("active");
  }
});