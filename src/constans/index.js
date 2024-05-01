import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigwatche1, bigwatche2, bigwatche3, customer1, customer2, watche4, watche5, watche6, watche7, thumbnailwatche1, thumbnailwatche2, thumbnailwatche3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const watches = [
    {
        thumbnail: thumbnailwatche1,
        bigwatche: bigwatche1,
    },
    {
        thumbnail: thumbnailwatche2,
        bigwatche: bigwatche2,
    },
    {
        thumbnail: thumbnailwatche3,
        bigwatche: bigwatche3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: watche4,
        name: "clockgarden Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: watche5,
        name: "clockgarden Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: watche6,
        name: "clockgarden Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: watche7,
        name: "clockgarden Air Jordan-001",
        price: "$230.20",
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
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "clockgarden Waffle Racer", link: "/" },
            { name: "clockgarden Cortez", link: "/" },
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