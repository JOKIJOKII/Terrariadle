document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const itemInput = document.getElementById("item-input");
    const guessesList = document.getElementById("guesses");
    const itemDisplay = document.querySelector(".item-name");

    const itemData = {
        "Wooden Sword": {
            image: "https://terraria.wiki.gg/images/c/cd/Wooden_Sword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Copper Shortsword": {
            image: "https://terraria.wiki.gg/images/8/8b/Copper_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Tin Shortsword": {
            image: "https://terraria.wiki.gg/images/8/85/Tin_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Iron Shortsword": {
            image: "https://terraria.wiki.gg/images/c/c8/Iron_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Lead Shortsword": {
            image: "https://terraria.wiki.gg/images/3/35/Lead_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Silver Shortsword": {
            image: "https://terraria.wiki.gg/images/6/61/Silver_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Tungsten Shortsword": {
            image: "https://terraria.wiki.gg/images/7/75/Tungsten_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Gold Shortsword": {
            image: "https://terraria.wiki.gg/images/0/07/Gold_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Platinum Shortsword": {
            image: "https://terraria.wiki.gg/images/5/54/Platinum_Shortsword.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Night's Edge": {
            image: "https://terraria.wiki.gg/images/9/98/Night%27s_Edge.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Excalibur": {
            image: "https://terraria.wiki.gg/images/f/fa/Excalibur.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verdeItem único"
        },
        "True Excalibur": {
            image: "https://terraria.wiki.gg/images/5/51/True_Excalibur.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "Terra Blade": {
            image: "https://terraria.wiki.gg/images/4/4d/Terra_Blade.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verdeItem único"
        },
        "Meowmere": {
            image: "https://terraria.wiki.gg/images/6/63/Meowmere.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verdeItem único"
        },
        "Starfury": {
            image: "https://terraria.wiki.gg/images/2/2d/Starfury.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Seedler": {
            image: "https://terraria.wiki.gg/images/a/a0/Seedler.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Enchanted Sword": {
            image: "https://terraria.wiki.gg/images/b/b3/Enchanted_Sword_%28item%29.png",
            type: "Espada",
            bancada: "Bancada",
            nivel: "Pré-Hardmode",
            cor: "verde"
        },
        "Bee Keeper": {
            image: "https://terraria.wiki.gg/images/4/42/Bee_Keeper.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verdeItem único"
        },
        "Breaker Blade": {
            image: "https://terraria.wiki.gg/images/2/22/Breaker_Blade.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Star Wrath": {
            image: "https://terraria.wiki.gg/images/8/83/Star_Wrath.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "Influx Waver": {
            image: "https://terraria.wiki.gg/images/d/d2/Influx_Waver.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "Keybrand": {
            image: "https://terraria.wiki.gg/images/0/02/Keybrand.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Blade of Grass": {
            image: "https://terraria.wiki.gg/images/8/85/Blade_of_Grass.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Fiery Greatsword": {
            image: "https://terraria.wiki.gg/images/b/bb/Volcano_%28old%29.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Blood Butcherer": {
            image: "https://terraria.wiki.gg/images/6/62/Blood_Butcherer.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Deathbringer Pickaxe": {
            image: "https://terraria.wiki.gg/images/1/11/Deathbringer_Pickaxe.png",
            type: "Picareta",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Molten Pickaxe": {
            image: "https://terraria.wiki.gg/images/d/d0/Molten_Pickaxe.png",
            type: "Picareta",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Cobalt Sword": {
            image: "https://terraria.wiki.gg/images/d/d6/Cobalt_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Palladium Sword": {
            image: "https://terraria.wiki.gg/images/8/86/Palladium_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Mythril Sword": {
            image: "https://terraria.wiki.gg/images/c/c8/Mythril_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Orichalcum Sword": {
            image: "https://terraria.wiki.gg/images/c/c1/Orichalcum_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Adamantite Sword": {
            image: "https://terraria.wiki.gg/images/0/05/Adamantite_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Titanium Sword": {
            image: "https://terraria.wiki.gg/images/d/d3/Titanium_Sword.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Hardmode",
            cor: "verde"
        },
        "Chlorophyte Saber": {
            image: "https://terraria.wiki.gg/images/4/49/Chlorophyte_Saber.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "True Night's Edge": {
            image: "https://terraria.wiki.gg/images/2/28/True_Night%27s_Edge.png",
            type: "Espada",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "Fetid Baghnakhs": {
            image: "https://terraria.wiki.gg/images/0/0d/Fetid_Baghnakhs.png",
            type: "Garras",
            bancada: "Bigorna",
            nivel: "Endgame",
            cor: "verde"
        },
        "Flying Knife": {
            image: "https://terraria.wiki.gg/images/1/17/Flying_Knife.png",
            type: "Arma lançadora",
            bancada: "Bancada",
            nivel: "Hardmode",
            cor: "verde"
        }
    };
    
    const swordNames = Object.keys(itemData); 
    const correctItem = swordNames[Math.floor(Math.random() * swordNames.length)];

    itemDisplay.innerHTML = `O ITEM DE ONTEM FOI <span class="text-green-500">#${correctItem.toUpperCase()}</span>`;
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário para recarregar a página

        const itemName = itemInput.value.trim();
        if (itemName) {
            // Verifica se o item existe na lista
            const item = itemData[itemName];

            if (item) {
                // Cria um elemento de lista para o chute
                const listItem = document.createElement("li");
                listItem.className = "flex items-center space-x-4 bg-gray-700 p-2 rounded-md";

                // Adiciona a imagem do item
                const itemImage = document.createElement("img");
                itemImage.src = item.image || "https://via.placeholder.com/40";
                itemImage.alt = itemName;
                itemImage.style.height = "100px"; 
                itemImage.style.width = "auto"; 
                itemImage.style.maxWidth = "100px"; 
                itemImage.style.objectFit = "contain"; 

                // Adiciona o texto do item
                const itemText = document.createElement("span");
                itemText.textContent = itemName;

                // Cria os detalhes do item (Tipo, Bancada, Nível, Outro) com quadrados lado a lado
                const details = document.createElement("div");
                details.className = "flex space-x-4 mt-2"; // Flexbox para os detalhes em linha

                const createDetailBox = (label, value1, value2) => {
                    const isCorrect = value1.toLowerCase() === value2.toLowerCase() ? 'correct' : 'incorrect';
                    return `
                        <div class="detail-box ${isCorrect}">
                            <strong>${label}</strong><br>
                            ${value2 || "Nenhum"}
                        </div>
                    `;
                };

                details.innerHTML = `
                    ${createDetailBox("Tipo", item.type, itemData[correctItem].type)}
                    ${createDetailBox("Bancada", item.bancada, itemData[correctItem].bancada)}
                    ${createDetailBox("Nível", item.nivel, itemData[correctItem].nivel)}
                    ${createDetailBox("Cor", item.cor, itemData[correctItem].cor)}
                `;

                // Adiciona os elementos ao item da lista
                listItem.appendChild(itemImage);
                listItem.appendChild(itemText);
                listItem.appendChild(details);
                guessesList.insertBefore(listItem, guessesList.firstChild); // Insere o novo item no topo

                // Limpa o campo de entrada
                itemInput.value = "";

                // Lógica de verificação do item correto
                if (itemName.toLowerCase() === correctItem.toLowerCase()) {
                    alert("Parabéns, você acertou!");
                }
            } else {
                alert("Item não encontrado.");
            }
        }
    });
});
