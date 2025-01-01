import img1_1 from './product_1_1.png'
import img1_2 from './product_1_2.png'
import img1_3 from './product_1_3.png'
import img1_4 from './product_1_4.png'

import img2_1 from './product_2_1.png'
import img2_2 from './product_2_2.png'
import img2_3 from './product_2_3.png'
import img2_4 from './product_2_4.png'

import img3_1 from './product_3_1.png'
import img3_2 from './product_3_2.png'
import img3_3 from './product_3_3.png'
import img3_4 from './product_3_4.png'

import img4_1 from './product_4_1.png'
import img4_2 from './product_4_2.png'
import img4_3 from './product_4_3.png'
import img4_4 from './product_4_4.png'

import img5_1 from './product_5_1.png'
import img5_2 from './product_5_2.png'
import img5_3 from './product_5_3.png'
import img5_4 from './product_5_4.png'


// Blogs
import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"


export const products = [
    {
        _id: "1",
        name: "VEJA Smith ONYX",
        description: "Experience all-day comfort, designed for a relaxed yet stylish look. Crafted with soft, breathable materials, these shoes offer a perfect blend of comfort and versatility for everyday wear.",
        price: 150,
        image: [img1_1, img1_2, img1_3, img1_4],
        category: "Men",
        subCategory: "Sneakers",
        sizes: ["6","7", "8", "9","10"],
        date: 1735639200000,
        popular: true
    },
    {
        _id: "2",
        name: "STONE ISLAND SNEAKERS",
        description: "Step into effortless style with these black casual sneakers. Designed for all-day comfort, they feature a sleek, modern look combined with soft, breathable materials, making them perfect for any casual outing or everyday wear.",
        price: 220,
        image: [img2_1, img2_2, img2_3, img2_4],
        category: "Men",
        subCategory: "Sneakers",
        sizes: ["6","7", "8", "9","10"],
        date: 1735639200000,
        popular: false
    },
    {
        _id: "3",
        name: "Stan Smith OG",
        description: "This versatile footwear is designed to offer superior comfort and support for all-day wear. Featuring a modern, sleek design and crafted with high-quality materials, it combines durability with a stylish look, making it perfect for both casual and professional settings. Ideal for those seeking a balance of performance and style.",
        price: 220,
        image: [img3_1, img3_2, img3_3, img3_4],
        category: "Men",
        subCategory: "Sneakers",
        sizes: ["6","7", "8", "9","10"],
        date: 1735639200000,
        popular: true
    },
    {
        _id: "4",
        name: "HOKA ONE ONE WMNS BONDI 8",
        description: "One of the most durable shoes in the HOKA collection, the Bondi sets a new standard this season with a softer, lighter foam and a brand new advanced heel geometry. The rear crash pad is flared for an incredibly soft and balanced ride from heel strike to forefoot transition. The Bondi 8 is the perfect blend of soft and springy, offering a noticeably new running experience thanks to its superior cushioning",
        price: 120,
        image: [img4_1, img4_2, img4_3, img4_4],
        category: "Women",
        subCategory: "Sports",
        sizes: ["6","7", "8", "9","10"],
        date: 1735639200000,
        popular: false
    },
    {
        _id: "5",
        name: "TIMBERLAND X PROJECT PONT 6 PREMIUM",
        description: "The waterproof Timberland Premium Espresso 6-inch lace-up boot combines casual style and outdoor expertise. It's expertly crafted from premium grained textured leather and features a full-grain leather boot collar. The seam-sealed, waterproof construction and breathable ReBOTL lining, which is made from at least 50% recycled plastic, provide comfort and protection, while the rubber outsole offers optimal traction.",
        price: 320,
        image: [img5_1, img5_2, img5_3, img5_4],
        category: "Men",
        subCategory: "Boots",
        sizes: ["6","7", "8", "9","10","11"],
        date: 1735639200000,
        popular: false
    },




]

export const blogs = [
    {title:"Top Shopping Tips for Smart Buyers", category: "Men", image: blog1 },
    {title:"Latest Trends in Online Shopping 2024", category: "Women", image: blog2 },
    {title:"How to Spot the Best Deals Online", category: "Kids", image: blog3 },
    {title:"Why E-Commerce is the Future of Shopping", category: "Topwear", image: blog4 }
  ]