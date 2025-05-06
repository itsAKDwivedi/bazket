import { Data, IProductInput } from "@/types";
import { toSlug } from "./utils";

const products: IProductInput[] = [
    {
      name: "Stylish Sneakers",
      slug: toSlug("Stylish Sneakers"),
      category: "Footwear",
      image: [
        "/images/sneaker1.jpg",
        "/images/sneaker2.jpg"
      ],
      brand: "Nike",
      description: "Comfortable and trendy sneakers perfect for everyday use.",
      isPublished: true,
      price: 59.99,
      listPrice: 79.99,
      countInStock: 120,
      tags: ["sport", "men", "casual"],
      sizes: ["8", "9", "10", "11"],
      colors: ["black", "white"],
      avgRating: 4.5,
      numReviews: 38,
      ratingDistribution: [
        { rating: 5, count: 25 },
        { rating: 4, count: 10 },
        { rating: 3, count: 3 },
        { rating: 2, count: 0 },
        { rating: 1, count: 0 }
      ],
      reviews: [],
      numSales: 200
    },
    {
      name: "Classic Leather Wallet",
      slug: toSlug("Classic Leather Wallet"),
      category: "Accessories",
      image: [
        "/images/wallet1.jpg",
        "/images/wallet2.jpg"
      ],
      brand: "Fossil",
      description: "Premium leather wallet with multiple compartments and a sleek design.",
      isPublished: true,
      price: 39.99,
      listPrice: 49.99,
      countInStock: 80,
      tags: ["leather", "wallet", "men"],
      sizes: [],
      colors: ["brown", "black"],
      avgRating: 4.3,
      numReviews: 22,
      ratingDistribution: [
        { rating: 5, count: 12 },
        { rating: 4, count: 7 },
        { rating: 3, count: 3 },
        { rating: 2, count: 0 },
        { rating: 1, count: 0 }
      ],
      reviews: [],
      numSales: 145
    },
    {
      name: "Cotton Oversized T-Shirt",
      slug: toSlug("Cotton Oversized T-Shirt"),
      category: "Apparel",
      image: [
        "/images/tshirt1.jpg",
        "/images/tshirt2.jpg"
      ],
      brand: "Zara",
      description: "Soft, breathable cotton T-shirt with a relaxed oversized fit.",
      isPublished: true,
      price: 19.99,
      listPrice: 29.99,
      countInStock: 200,
      tags: ["unisex", "casual", "cotton"],
      sizes: ["S", "M", "L", "XL"],
      colors: ["blue", "grey", "white"],
      avgRating: 4.7,
      numReviews: 52,
      ratingDistribution: [
        { rating: 5, count: 40 },
        { rating: 4, count: 10 },
        { rating: 3, count: 2 },
        { rating: 2, count: 0 },
        { rating: 1, count: 0 }
      ],
      reviews: [],
      numSales: 310
    }
  ];
  
  

const data: Data = {
    products,
    headerMenus: [
        {
            name: "Today's Deals",
            href: "/search?tag=todays-deal"
        },
        { 
            name: "Popular Products",
            href: "/search?tag=popular"
        },
        {
            name: "New Arrivals",
            href: "/search?tag=new-arrivals"
        },
        {
            name: "Best Sellers",
            href: "/search?tag=best-sellers"
        },
        {
            name: "Discounts & Offers",
            href: "/search?tag=discounts"
        },
        {
            name: 'Browsing History',
            href: '/#browsing-history'
        },
        {
            name: 'Customer Service',
            href: 'pages/customer-service'
        },
        {
            name: 'About Us',
            href: 'pages/about-us'
        },
        {
            name: 'Help',
            href: 'pages/help'
        }
    ],
    carousels: [
        {
          title: "Trendy Fashion Collection",
          buttonCaption: "Shop Now",
          image: "/images/banner1.png",
          url: "/search?category=fashion",
          isPublished: true
        },
        {
          title: "Latest Electronic Gadgets",
          buttonCaption: "Explore Electronics",
          image: "/images/banner2.png",
          url: "/search?category=electronics",
          isPublished: true
        },
        {
          title: "Stylish Footwear",
          buttonCaption: "Discover Shoes",
          image: "/images/banner3.png",
          url: "/search?category=shoes",
          isPublished: true
        }
      ]
}

export default data;