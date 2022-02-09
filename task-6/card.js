window.addEventListener('load', function () {
    const body = this.document.querySelector('body');
    body.className = "body";
    body.style.padding = "0px";
    body.style.margin = "0px";
    body.style.backgroundColor = "#0D1A2D";

    const h3 = this.document.createElement('h3');
    h3.append('Equilibrium #3429');
    h3.className = "h3";
    h3.style.color = "white";

    const pText = this.document.createElement('p');
    pText.append('Our Equilibrium collection promotes balance and calm.');
    pText.className = "pText";
    pText.style.color = "#667B98";

    const pMoney = this.document.createElement('p');
    pMoney.append('0.041 ETH');
    pMoney.className = "pMoney";
    pMoney.style.color = "#25F8F2";

    const pDays = this.document.createElement('p');
    pDays.append('3 days left');
    pDays.className = "pDays";
    pDays.style.color = "#667B98";

    const pAuthor = this.document.createElement('p');
    pAuthor.append('--- Creation of Meerim Jutankeeva');
    pAuthor.className = "pAuthor";
    pAuthor.style.color = "#667B98";
    pAuthor.style.margin= "-18px 0 0 0";

    const pDiv = this.document.createElement('div');
    pDiv.append(pMoney, pDays);
    pDiv.className = "pDiv";
    pDiv.style.display = "flex";
    pDiv.style.justifyContent = "space-between";
    pDiv.style.borderBottom = "solid #1F3149";
    pDiv.style.width = "100%";

    const divImg = this.document.createElement('div');
    divImg.className = "card__img";
    divImg.style.backgroundImage = "url('./img/mika.jpg')";
    divImg.style.width= "100%";
    divImg.style.size= "cover";
    divImg.style.borderRadius= "15px";
    divImg.style.height= "200px";
    divImg.style.backgroundRepeat= "no-repeat";

    const AvImg = this.document.createElement('div');
    AvImg.className = "card__avimg";
    AvImg.style.backgroundImage = "url('./img/mika.jpg')";
    AvImg.style.width= "20px";
    AvImg.style.size= "cover";
    AvImg.style.borderRadius= "50%";
    AvImg.style.height= "23px";
    AvImg.style.zIndex= "2";
    AvImg.style.margin= "20px 0 0 0";


    // Все стили по расположению карточки прописаны для обертки, в данном случае в wrapper.
    const wrapper = this.document.createElement('div');
    wrapper.id = "wrapper"; // ID WRAPPER IS HERE
    wrapper.style.margin = "80px auto";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "space-around";

    //У карточек нет никаких CSS свойств для расположения внутри родителя. Карточки независимы.
    const divItem = this.document.createElement('div');
    divItem.className = "card__item";
    divItem.style.width = "250px";
    divItem.style.height= "400px";
    divItem.style.display= "flex";
    divItem.style.flexDirection = "column";
    divItem.style.justifyContent= "center";
    divItem.style.borderRadius= "15px";
    divItem.style.boxShadow= "0 0 15px 30px #0E1629";
    divItem.style.backgroundColor= "#15273F";
    divItem.style.padding= "20px";
    

    const elementsList = [divImg, h3, pText, pDiv, AvImg, pAuthor];
    divItem.setAttribute('class', 'card__item');
    for (let i = 0; i < elementsList.length; i++) {
        divItem.append(elementsList[i]);
    }

    wrapper.append(divItem);
    body.append(wrapper);
    
    alert("Я оцениваю свою работу на 110 баллов" )
})
