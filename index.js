const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.header__menu-item--modal')
const modalClose = document.querySelector('.modal__close')
modalOpen.addEventListener('click', () => {
	modal.classList.toggle('modal--active')
})
modalClose.addEventListener('click', () => {
	modal.classList.remove('modal--active')
})

const emailInput = document.getElementById('email')
const form = document.querySelector('.feedback__form')
form.addEventListener('submit', (event) => {
	event.preventDefault()
	const email = emailInput.value.trim()
	const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.[a-zA-Z]{2,}$/
	if (emailRegex.test(email)) {
		emailInput.classList.remove('form__input--error')
	} else {
		emailInput.classList.add('form__input--error')
	}
})

const goods = [
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 1 },
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 2 },
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 3 },
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 4 },
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 5 },
	{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 6 },
]

class GoodsItem {
	constructor(title, price, pos) {
		this.title = title
		this.price = price
		this.pos = pos
	}

	render() {
		return `<article class="catalog-items__card card goods-item">
					<div class="card__image-wrapper">
						<img class="card__image" src="./images/catalog-${this.pos}.jpg" alt="" />
						<button class="card__add">Add to Cart</button>
					</div>
					<div class="card__content">
						<h3 class="card__title">${this.title}</h3>
						<p class="card__description">
							Known for her sculptural takes on traditional tailoring,
							Australian arbiter of cool Kym Ellery teams up with Moda
							Operandi.
						</p>
						<p class="card__price text--pink">$${this.price}</p>
					</div>
				</article>`
	}
}

class GoodsList {
	constructor() {
		this.goods = []
	}

	fetchGoods() {
		this.goods = [
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 1 },
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 2 },
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 3 },
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 4 },
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 5 },
			{ title: 'ELLERY X M\'O CAPSULE', price: 52, pos: 6 },
		]
	}

	render() {
		const goodsListElement = document.querySelector('.goods-list')
		if (goodsListElement) {
			let listHtml = ''
			this.goods.forEach(good => {
				const goodItem = new GoodsItem(good.title, good.price, good.pos)
				listHtml += goodItem.render()
			})
			goodsListElement.innerHTML = listHtml
		}
	}
}

const list = new GoodsList()
list.fetchGoods()
list.render()