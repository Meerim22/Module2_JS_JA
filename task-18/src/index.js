import "./style.css";

const section = document.createElement('section');
section.className = "section about-section";

const title = document.createElement('div');
title.className = "title";

const h2 = document.createElement('h2');
h2.innerText = "about";

const sectionChild = document.createElement('div');
sectionChild.className = "about-center section-center";

const aboutImg = document.createElement('article');
aboutImg.className = "about-img";

const img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

const about = document.createElement('article');
about.className = "about";

const btnContainer = document.createElement('div');
btnContainer.className = "btn-container";

const btn1 = document.createElement('btn');
btn1.className = "tab-btn active";
btn1.setAttribute('data-id', 'aboutUs');
btn1.innerText = "About Us";

const btn2 = document.createElement('btn');
btn2.className = "tab-btn";
btn2.setAttribute('data-id', 'mission');
btn2.innerText = "Our Mission";

const btn3 = document.createElement('btn');
btn3.className = "tab-btn";
btn3.setAttribute('data-id', 'goals');
btn3.innerText = "Our Goals";

const aboutContent = document.createElement('div');
aboutContent.className = "about-content";

const content1 = document.createElement('div');
content1.className = "content active";
content1.id = "aboutUs";

const h41 = document.createElement('h4');
h41.innerText = "About Us";

const p1 = document.createElement('p');
p1.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quasi adipisci id maiores sequi non harum repudiandae molestiae.Tenetur iste consequatur maiores doloribus, provident ea officia quam velit perspiciatis, fugiat, architecto magni fugit saepe.Perferendis cupiditate architecto sed ab adipisci excepturi molestias modi veniam quae ? ";

const content2 = document.createElement('div');
content2.className = "content";
content2.id = "mission";

const h42 = document.createElement('h4');
h42.innerText = "Our Mission";

const p2 = document.createElement('p');
p2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cupiditate temporibus, velit optio reprehenderit nesciunt nostrum nemo dolorum fuga atque omnis odit pariatur? Qui accusamus odio commodi nihil distinctio inventore, ratione cupiditate reprehenderit? Recusandae labore soluta, reiciendis nam ab aut necessitatibus quo exercitationem esse magni aspernatur porro quod praesentium perferendis!";
const content3 = document.createElement('div');
content3.className = "content";
content3.id = "goals";

const h43 = document.createElement('h4');
h43.innerText = "Our Goals";

const p3 = document.createElement('p');
p3.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea placeat dolorum cumque dolorem incidunt dolor autem praesentium similique dolore natus quaerat ad adipisci accusamus aperiam veritatis, vitae labore voluptatem, in odio atque iste, omnis voluptatibus molestias? Dolore, illo similique.";

const elementsList1 = [btn1, btn2, btn3];
for (let i = 0; i < elementsList1.length; i++) {
  btnContainer.appendChild(elementsList1[i]);
}

const elementsList2 = [content1, content2, content3];
for (let i = 0; i < elementsList2.length; i++) {
  aboutContent.appendChild(elementsList2[i]);
}

document.body.appendChild(section);
section.append(title, sectionChild);
title.appendChild(h2);
sectionChild.append(aboutImg, about);
aboutImg.appendChild(img);
about.append(btnContainer, aboutContent);
content1.append(h41, p1);
content2.append(h42, p2);
content3.append(h43, p3);


about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    elementsList1.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    elementsList2.forEach(function (article) {
      article.classList.remove("active");
    });

    const tabConent = document.getElementById(id);
    tabConent.classList.add("active");
  }
});