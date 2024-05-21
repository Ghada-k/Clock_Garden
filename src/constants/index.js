import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigWatch1, bigWatch2, bigWatch3, customer1, customer2, watch4, watch5, watch6, watch7, thumbnailWatch1, thumbnailWatch2, thumbnailWatch3 } from "../assets/images";

export const navLinks = [
    { id:'1', href: "#home", label: "Home" },
    { id:'2',href: "#about-us", label: "About Us" },
    { id:'3',href: "#products", label: "Products" },
    { id:'4',href: "#contact-us", label: "Contact Us" },
];

export const watches = [
    {
        thumbnail: thumbnailWatch1,
        bigwatch: bigWatch1,
    },
    {
        thumbnail: thumbnailWatch2,
        bigwatch: bigWatch2,
    },
    {
        thumbnail: thumbnailWatch3,
        bigwatch: bigWatch3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '600+', label: 'Shops' },
    { value: '325k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: watch4,
        rating: "(4.3)",
        name: "CLOCKGARDEN CG-001",
        price: "10000.00 DA",
    },
    {
        imgURL: watch5,
        rating: "(4.8)",
        name: "CLOCKGARDEN CG-010",
        price: "15000.00 DA",
    },
    {
        imgURL: watch6,
        rating: "(4.5)",
        name: "CLOCKGARDEN CG-011",
        price: "9500.00 DA",
    },
    {
        imgURL: watch7,
        rating: "(4.4)",
        name: "CLOCKGARDEN CG-100",
        price: "15500.00 DA",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "CLOCKGARDEN CG-000", link: "/" },
            { name: "CLOCKGARDEN CG-001", link: "/" },
            { name: "CLOCKGARDEN CG-010", link: "/" },
            { name: "CLOCKGARDEN CG-011", link: "/" },
            { name: "CLOCKGARDEN CG-100", link: "/" },
            { name: "CLOCKGARDEN CG-111", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@clockgarden.com", link: "mailto:customer@clockgarden.com" },
            { name: "+2136658816584", link: "tel:+2136658816584" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];