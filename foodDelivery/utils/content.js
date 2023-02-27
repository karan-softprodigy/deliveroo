import offer from '../assets/categories/offers.png'
import { PAPA_REACT_URL } from './constants'


export const categoriesList = [
  {
    title: 'Offers',
    image: 'https://img.freepik.com/premium-vector/price-tag-icon-discount-coupon-vector-label-price-template-design-illustration-xa_529206-88.jpg?w=2000'
  },
  {
    title: 'Pizza',
    image: `https://images.ctfassets.net/hhv516v5f7sj/3no5JpLmZQcqkThI0tv1pG/92506184674a35b7c2c2eaf512ad4f23/IFSausagePizza_3000x3000.jpg`
  },
  {
    title: 'Thai',
    image: `https://www.seriouseats.com/thmb/dKWeER_LMZhxCkI57PO_c7fcHb4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160616-thai-pantry-vicky-wasik-primary-78a55b53e55d454b934d23fb35bda043.jpg`
  },
  {
    title: 'Sushi',
    image: `https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528`
  },
  {
    title: 'Asian',
    image: `https://media.istockphoto.com/id/1223803728/photo/asian-cuisine-served-on-a-table.jpg?s=170667a&w=0&k=20&c=9YJ9nqCKRAiEFgl3nwWnlERrPL9rHqXj_hlg4RnXZNk=`
  },
  {
    title: 'Non Veg',
    image: `http://jajmaan.in/wp-content/uploads/2022/03/Untitled-design-3.png`
  },
]


export const featuredCategories = [
  {
    title: 'Featured',
    description: 'Paid Placement from our partners',
    id: 'featured'
  },
  {
    title: 'Offers Near You!',
    description: 'Why not support your local restaurants',
    id: 'nearby'
  },
  {
    title: 'Tasty Discounts',
    description: 'Get Big discounts on these restaurants',
    id: 'discounts'
  },
]


export const featuredRestaurants = [
  {
    title: 'Nandus ',
    description: 'Best chinese food in Chandigarh',
    id: 'nandu',
    image: 'https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg',
    rating: 4.5,
    genre: 'Chinese',
    address: 'Sec 43, Chd.',
    short_description: 'Best chinese food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Gupta Fast Food',
    description: 'Best Fast Food in Mohali',
    id: 'gupta',
    image: 'https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
    rating: 4.1,
    genre: 'Fast Food',
    address: 'Phase 8, Mohali',
    short_description: 'Best Fast Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Wagamama',
    description: 'Asian Food Specialist',
    id: 'wagamana',
    image: 'https://media.istockphoto.com/id/1223803728/photo/asian-cuisine-served-on-a-table.jpg?s=170667a&w=0&k=20&c=9YJ9nqCKRAiEFgl3nwWnlERrPL9rHqXj_hlg4RnXZNk=',
    rating: 4.5,
    genre: 'Asian',
    address: 'Sec 20, Chd',
    short_description: 'Best Asian Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'KFC',
    description: 'Best Chicken Food',
    id: 'kfc',
    image: 'https://gumlet.assettype.com/barandbench%2F2023-02%2Fd2ba33c6-0c4a-4517-8932-4fe1b5d4d26f%2F35.jpg?auto=format%2Ccompress&fit=max&w=1200',
    rating: 4.1,
    genre: 'Chicken',
    address: 'Sec 34, Chd',
    short_description: 'Best Chicken Dishes',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
]

export const nearRestaurantsList = [
  {
    title: 'KFC',
    description: 'Best Chicken Food',
    id: 'kfc',
    image: 'https://gumlet.assettype.com/barandbench%2F2023-02%2Fd2ba33c6-0c4a-4517-8932-4fe1b5d4d26f%2F35.jpg?auto=format%2Ccompress&fit=max&w=1200',
    rating: 4.1,
    genre: 'Chicken',
    address: 'Sec 34, Chd',
    short_description: 'Best Chicken Dishes',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Wagamama',
    description: 'Asian Food Specialist',
    id: 'wagamana',
    image: 'https://media.istockphoto.com/id/1223803728/photo/asian-cuisine-served-on-a-table.jpg?s=170667a&w=0&k=20&c=9YJ9nqCKRAiEFgl3nwWnlERrPL9rHqXj_hlg4RnXZNk=',
    rating: 4.5,
    genre: 'Asian',
    address: 'Sec 20, Chd',
    short_description: 'Best Asian Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Gupta Fast Food',
    description: 'Best Fast Food in Mohali',
    id: 'gupta',
    image: 'https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
    rating: 4.1,
    genre: 'Fast Food',
    address: 'Phase 8, Mohali',
    short_description: 'Best Fast Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Nandus ',
    description: 'Best chinese food in Chandigarh',
    id: 'nandu',
    image: 'https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg',
    rating: 4.5,
    genre: 'Chinese',
    address: 'Sec 43, Chd.',
    short_description: 'Best chinese food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },


]


export const discountRestaurantsList = [
  {
    title: 'Wagamama',
    description: 'Asian Food Specialist',
    id: 'wagamana',
    image: 'https://media.istockphoto.com/id/1223803728/photo/asian-cuisine-served-on-a-table.jpg?s=170667a&w=0&k=20&c=9YJ9nqCKRAiEFgl3nwWnlERrPL9rHqXj_hlg4RnXZNk=',
    rating: 4.5,
    genre: 'Asian',
    address: 'Sec 20, Chd',
    short_description: 'Best Asian Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'KFC',
    description: 'Best Chicken Food',
    id: 'kfc',
    image: 'https://gumlet.assettype.com/barandbench%2F2023-02%2Fd2ba33c6-0c4a-4517-8932-4fe1b5d4d26f%2F35.jpg?auto=format%2Ccompress&fit=max&w=1200',
    rating: 4.1,
    genre: 'Chicken',
    address: 'Sec 34, Chd',
    short_description: 'Best Chicken Dishes',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Nandus ',
    description: 'Best chinese food in Chandigarh',
    id: 'nandu',
    image: 'https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg',
    rating: 4.5,
    genre: 'Chinese',
    address: 'Sec 43, Chd.',
    short_description: 'Best chinese food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },
  {
    title: 'Gupta Fast Food',
    description: 'Best Fast Food in Mohali',
    id: 'gupta',
    image: 'https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
    rating: 4.1,
    genre: 'Fast Food',
    address: 'Phase 8, Mohali',
    short_description: 'Best Fast Food',
    dishes: [
      {
        id: 'chickenCurry',
        name: 'Chicken Curry',
        description: 'Punjabi Style Chicken Curry',
        price: '230',
        image: 'https://media.istockphoto.com/id/498015636/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=JCM6aJlJLRFtai7KAza3sVQtKmxHTwGt81timhKPrJo=',
      },
      {
        id: 'firedRice',
        name: 'Fried Rice',
        description: 'Fried Rice with Sauce',
        price: '120',
        image: 'https://media.istockphoto.com/id/179582144/photo/fried-rice-with-egg-and-vegetables.jpg?s=612x612&w=0&k=20&c=BtaNE09vnBuk4UqU5Xjh2eIruSe2RvEYtDBPcoPGoXU=',
      },
      {
        id: 'thali',
        name: 'North Indian Thali',
        description: 'North Indian Thali with Rasam',
        price: '330',
        image: 'https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg',
      },
    ],
    long: 20,
    lat: 10,
  },

]