import requests
from bs4 import BeautifulSoup
import random

# URL base do Terraria Wiki
base_url = "https://terraria.wiki.gg"

# Lista de itens para pesquisar
items = [
    "Wooden_Sword",
    "Copper_Shortsword",
    "Tin_Shortsword",
    "Iron_Shortsword",
    "Lead_Shortsword",
    "Silver_Shortsword",
    "Tungsten_Shortsword",
    "Gold_Shortsword",
    "Platinum_Shortsword",
    "Night's_Edge",
    "Excalibur",
    "True_Excalibur",
    "Terra_Blade",
    "Meowmere",
    "Starfury",
    "Seedler",
    "Enchanted_Sword",
    "Bee_Keeper",
    "Breaker_Blade",
    "Star_Wrath",
    "Influx_Waver",
    "The_Horsemans_Blade",
    "Keybrand",
    "Blade_of_Grass",
    "Fiery_Greatsword",
    "Blood_Butcherer",
    "Deathbringer_Pickaxe",
    "Molten_Pickaxe",
    "Cobalt_Sword",
    "Palladium_Sword",
    "Mythril_Sword",
    "Orichalcum_Sword",
    "Adamantite_Sword",
    "Titanium_Sword",
    "Chlorophyte_Saber",
    "Chlorophyte_Sword",
    "True_Night's_Edge",
    "True_Excalibur",
    "Shadow_Flame_Knife",
    "Fetid_Baghnakhs",
    "Flying_Knife",
    "Light_Disc",
    "Gungnir",
    "Tonbogiri",
    "The_Rotted_Fork",
    "Dark_Lance",
    "Obsidian_Swordfish",
    "Spear",
    "Trident",
    "Storm_Spear",
    "Adamantite_Glaive"
]


# Função para pesquisar o item
def pesquisar_item(item):
    item_page_url = f"{base_url}/wiki/{item}"
    print(f"Pesquisando: {item} ...")

    response = requests.get(item_page_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')

        item_image = soup.find('img', alt=f"{item.replace('_', ' ')} item sprite")

        if item_image:
            image_src = item_image['src']
            full_image_url = base_url + image_src
            return full_image_url
        else:
            return f"Imagem não encontrada para: {item}"
    else:
        return f"Erro ao acessar a página: {response.status_code}"

# Função principal
def main():
    escolha = input("Você deseja pesquisar (1) um item aleatório ou (2) todos os itens? Digite 1 ou 2: ")

    if escolha == "1":
        item_aleatorio = random.choice(items)
        print(f"Item sorteado: {item_aleatorio}")
        resultado = pesquisar_item(item_aleatorio)
        print(f"Resultado: {resultado}")
    elif escolha == "2":
        item_images = {}
        for item in items:
            resultado = pesquisar_item(item)
            item_images[item] = resultado

        print("\nResultados:")
        for item, url in item_images.items():
            print(f"{item}: {url}")
    else:
        print("Opção inválida. Digite 1 para pesquisar um item aleatório ou 2 para pesquisar todos os itens.")

if __name__ == "__main__":
    main()
