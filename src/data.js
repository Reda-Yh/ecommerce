const DEFAULT_PRODUCTS = [
	{
		id: 1,
		name: 'Bluetooth & Wireless Over-Ear Headphones (Black)',
		price: 12,
		image: require('./images/1.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
		},
	{
		id: 2,
		name: 'Apple iPhone 128GB',
		price: 14,
		image: require('./images/2.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
	},
	{
		id: 3,
		name: 'Running Shoe Red & White',
		price: 13.67,
		image: require('./images/3.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Footwear',
	},
	{
		id: 4,
		name: 'Apple iPhone Blue 64GB',
		price: 47.56,
		image: require('./images/4.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',	
	},
	{
		id: 5,
		name: 'Bluetooth Over-Ear Headphones (White)',
		price: 53.06,
		image: require('./images/5.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',		
	},
	{
		id: 6,
		name: 'Logitech Gamepad White for PC/PS3',
		price: 93.20,
		image: require('./images/6.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
	},
	{
		id: 7,
		name: 'Premium Smart Watch (Black)',
		price: 25,
		image: require('./images/7.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Wearables',
	},
	{
		id: 8,
		name: 'Multicolor Modern Shoe for Her',
		price: 99.98,
		image: require('./images/8.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Footwear',
	},
	{
		id: 9,
		name: 'Apple iPhone (Brand New)',
		price: 87.22,
		image: require('./images/9.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
	},
	{
		id: 10,
		name: 'Smart Watch with Latest Android OS',
		price: 11,
		image: require('./images/10.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Wearables',
	},
	{
		id: 11,
		name: 'Modern & Original Eye Glasses',
		price: 69,
		image: require('./images/11.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Accessories',
	},
	{
		id: 12,
		name: 'Nikon Camera (Slightly Used) 750',
		price: 33,
		image: require('./images/12.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
	},
	{
		id: 13,
		name: 'Red & Black Ganming Mouse for PC',
		price: 99,
		image: require('./images/13.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Electronics',
	},
	{
		id: 14,
		name: 'Multi Purpose College Bag Backpack',
		price: 44,
		image: require('./images/14.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Accessories',
	},
	{
		id: 15,
		name: 'White & Black Watch Concept',
		price: 22.22,
		image: require('./images/15.jpg'),
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
		type: 'Wearables',
	},
];
  
  function loadProducts() {
	const storedProducts = localStorage.getItem('products');
	if (storedProducts) {
	  return JSON.parse(storedProducts);
	}
	localStorage.setItem('products', JSON.stringify(DEFAULT_PRODUCTS));
	return DEFAULT_PRODUCTS;
  }
  
const PRODUCTS = loadProducts();

  
export default PRODUCTS;
