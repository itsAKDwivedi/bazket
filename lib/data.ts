const data = {
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