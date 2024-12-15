import requests
from flask import Flask, jsonify, render_template, request
from bs4 import BeautifulSoup

# URL base do Terraria Wiki
base_url = "https://terraria.wiki.gg"

def get_item_data(item_name):
    item_page_url = f"{base_url}/wiki/{item_name.replace(' ', '_')}"
    response = requests.get(item_page_url)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        
        item_image = soup.find('img', alt=lambda x: x and f"{item_name} item sprite" in x)
        image_url = base_url + item_image['src'] if item_image else None
        
        description = soup.find('div', class_='item-description')
        description_text = description.text.strip() if description else "Descrição não encontrada."
        
        return {
            "name": item_name,
            "image_url": image_url,
            "description": description_text
        }
    
    return None

app = Flask(__name__)

items = [
    "Wooden Sword",
    "Copper Shortsword",
    "Tin Shortsword",
    "Iron Shortsword",
    "Lead Shortsword",
    "Silver Shortsword",
    "Tungsten Shortsword",
    "Gold Shortsword",
    "Platinum Shortsword",
    "Night's Edge",
    "Excalibur",
    "True Excalibur",
    "Terra Blade",
    "Meowmere",
    "Influx Waver",
    "Starfury",
    "Seedler",
    "Valor",
    "Breaker Blade",
    "Death Sickle",
    "Enchanted Sword",
    "Bee Keeper",
    "Slime Staff",
    "Star Wrath"
]


# Rota para a página inicial
@app.route('/')
def home():
    return render_template('index.html')

# Rota para pesquisa do item
@app.route('/search_item', methods=['POST'])
def search_item():
    item_name = request.form['item_name']
    item_image_url = None
    item_info = None

    # Verifique se o item existe na lista
    if item_name in items:
        item_page_url = f"{base_url}/wiki/{item_name}"
        response = requests.get(item_page_url)

        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            item_image = soup.find('img', alt=f"{item_name.replace('_', ' ')} item sprite")

            if item_image:
                image_src = item_image['src']
                full_image_url = base_url + image_src
                item_image_url = full_image_url
                # Abaixo você pode adicionar mais informações sobre o item, se desejar.
                item_info = f"Informações sobre o item: {item_name}"

    return render_template('index.html', item_image_url=item_image_url, item_info=item_info, item_name=item_name)

if __name__ == '__main__':
    app.run(debug=True)