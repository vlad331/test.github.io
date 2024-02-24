document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * 0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

class Image{
    constructor(url, caption, descripteon, href){
        this.url = url
        this.caption = caption
        this.descripteon =descripteon
        this.href = href
    }
}

let gallery_button_left = document.getElementsByClassName('gallery__button__left')[0]
let gallery_button_right = document.getElementsByClassName('gallery__button__right')[0]
let gallery_cards = document.getElementsByClassName('gallery__cards')[0]
let card_index = 0
let cards = []

let card_images = [
    new Image(
        'images\\entities\\card1.png',
        'хранитель',
        'охраняет скверну',
        'Zombie.html',
    ),
    new Image(
        'images\\entities\\card2.png',
        'скелет на пауке',
        'Редкий вид спавна мобов имеет все преемущества этих двух мобов',
    ),
    new Image(
        'images\\entities\\card3.jpg',
        'Корова',
        'Корова - относится к дружелюбным мобам которые чаще всего убивают ради еды',
    ),
    new Image(
        'images\\entities\\card4.png',
        'Курятин',
        'Курица - относится к дружелюбным мобам которые чаще всего убивают ради еды',
    ),
    new Image(
        'images\\entities\\png-transparent-minecraft-mob-herobrine-skeleton-著色頁2-minecraft-skeleton-angle-furniture-rectangle.png',
        'Визард',
        'Визард - мини босс который имеет 3 головы и стреляет ими в врага накладывая иссушение',
    )
]
for (let i = 0;i<3;i++){
    add_card(card_images[i], 'right')
}
function add_card(image, side){
    let new_card = document.createElement('div')
    new_card.innerHTML = `
    <div class="gellary__card__caption__bg"></div>
    <img src="${image.url}" class="gallery__card__pic">
    <h1 class="gallery__card__caption">${image.caption}</h1>
    <h3 class="gallery__card__description">${image.descripteon}</h3>
    <a href="${image.href}">
    <div class="gallery__card__href"></div>
    </a>

    `
    new_card.classList.add("gallery__card")
    if(side == 'left'){
        cards.unshift(new_card)
        gallery_cards.prepend(new_card)
    }
    else{
        cards.push(new_card)
        gallery_cards.append(new_card)
    }
    
}
gallery_button_right.addEventListener('click', e => {
    gallery_cards.removeChild(cards[0])
    cards.shift()
    card_index++
    if(card_index > card_images.length -1){
        card_index = 0
    }
    add_card(card_images[(card_index + 2) % card_images.length], 'right')
})
gallery_button_left.addEventListener('click', e => {
    gallery_cards.removeChild(cards[2])
    cards.pop()
    card_index--
    if(card_index < 0){
        card_index = card_images.length - 1
    }
    add_card(card_images[card_index], 'left')
})

let bubbels = document.getElementById("bubbles")
for(let i = 0;i<150;i++){
    let bubble = document.createElement('div')
    bubble.classList.add("bubble")
    Object.assign(bubble, {
        style:`
        --size: ${Math.random() * 4 + 2}rem;
        --left: ${Math.random() * 104 - 2}%;
        --time: ${Math.random() * 2 + 2}s;
        --delay: -${Math.random() * 2 + 2}s;
        `
    })
    bubbels.append(bubble)
}



