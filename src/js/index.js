window.onload = function () {
    fetch('https://projeto-treinamento-web-production.up.railway.app/gedaiflix-api/cards')
    .then(async (data) => {
        const response = await data.json();
        console.log({response});

        const cards = document.querySelector(".episode-container");

        response.forEach(cardData => {
            const card = document.createElement("div");
            card.className = "card";

            const front = document.createElement("div");
            front.className = "front";

            const frontImg = document.createElement("img");
            frontImg.alt = cardData.name;
            frontImg.className = "card-image";
            frontImg.src = `data:image/jpg;base64,${cardData.image}`;

            front.appendChild(frontImg);
            card.appendChild(front);

            const back = document.createElement("div");
            back.className = "back";

            const h2 = document.createElement("h2");
            h2.textContent = cardData.name;
            
            back.appendChild(h2);

            const p = document.createElement("p");
            p.textContent = cardData.desc;
            
            back.appendChild(p);

            const button = document.createElement("button");
            button.className = "trailer-button";
            button.id = cardData.trailer;
            button.textContent = "Veja o trailer";

            back.appendChild(button);

            card.appendChild(back);

            cards.appendChild(card);
        });
    })
    .catch((error) =>{
        console.log(error);
        alert('erro ao retornar dados.');
    })
}