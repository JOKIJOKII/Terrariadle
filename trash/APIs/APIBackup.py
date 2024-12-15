import requests
from bs4 import BeautifulSoup

# URL base do Terraria Wiki
base_url = "https://terraria.wiki.gg"

# Lista de itens para pesquisar
items = [
    "Fiery_Greatsword",
    "Wand_of_Sparking",
    "Lightning_Whip",
    "Frostbrand",
    "Staff_of_the_Wind",
    "Night's_Edge",
    "Book_of_Skulls",
    "Vortex_Bow",
    "Stone_Slab",
    "Staff_of_Earth",
    "Cursed_Flames",
    "Poisoned_Knife",
    "Glass_Staff",
    "Titanium_Armor",
    "Inferno_Fork",
    "Energy_Shield",
    "Eye_of_Cthulhu's_Fury",
    "Frost_Staff",
    "Bee's_Knees",
    "Golden_Sword",
    "Repeating_Rifle",
    "Flamarang",
    "Magma_Stone",
    "Storm_Sword",
    "Hammer_of_Thor",
    "Dark_Lance",
    "Mana_Cannon",
    "Blood_Butcherer",
    "Teleportation_Potion",
    "Silver_Bow"
]


# Dicionário para armazenar os resultados
item_images = {}

# Loop para processar cada item da lista
for item in items:
    # Gera a URL da página do item
    item_page_url = f"{base_url}/wiki/{item}"
    print(f"Pesquisando: {item} ...")

    # Faz a requisição da página do item
    response = requests.get(item_page_url)
    if response.status_code == 200:  # Verifica se a página foi carregada com sucesso
        soup = BeautifulSoup(response.content, 'html.parser')

        # Localiza a tag <img> correspondente ao sprite do item
        item_image = soup.find('img', alt=f"{item.replace('_', ' ')} item sprite")  # Usa o alt como referência

        if item_image:
            image_src = item_image['src']  # Extrai o caminho parcial da imagem
            full_image_url = base_url + image_src 

            # Salva o resultado no dicionário
            item_images[item] = full_image_url
            print(f"Encontrado: {full_image_url}")
        else:
            print(f"Imagem não encontrada para: {item}")
    else:
        print(f"Erro ao acessar a página: {response.status_code}")

# Exibe ou salva os resultados
print("\nResultados:")
for item, url in item_images.items():
    print(f"{item}: {url}")
