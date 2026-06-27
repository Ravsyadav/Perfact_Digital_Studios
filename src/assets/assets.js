import logo from '../assets/logo.png';
import bgImg from '../assets/bgImg.jpg';
import aboutImg from '../assets/aboutImg.jpg';
import gallery1Img from '../assets/gallery1.jpeg';
import gallery2Img from '../assets/gallery2.jpg';
import gallery3Img from '../assets/gallery3.jpg';
import gallery4Img from '../assets/gallery4.jpg';
import gallery5Img from '../assets/gallery5.jpeg';
import gallery6Img from '../assets/gallery6.jpg';


import { FaCamera, FaEdit, FaEnvelope, FaFacebook, FaHeart, FaImages, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaRing, FaVideo, FaYoutube } from 'react-icons/fa';


export const assets = {
  logo,
  bgImg,
  aboutImg,
}

export const stats = [
    { number: 4, label: 'Years of Capturing' },
    { number: 550, label: 'Moments Captured' },
    { number: 10, label: 'Cities Explored' },
    { number: 59, label: 'Favorite Memories' }
  ];


export const galleryItems = [
  {
    id: 1,
    image: gallery1Img,
    category: "landscape",
    title: "Pumdikot in Nepal"
  },
  {
    id: 2,
    image: gallery2Img,
    category: "portrait",
    title: "Daisy flower in Lotus Temple, Delhi"
  },
  {
    id: 3,
    image: gallery3Img,
    category: "architectural",
    title: "Uttara Swamimalai Temple in New Delhi"
  },
  {
    id: 4,
    image:gallery4Img,
    category: "portrait",
    title: "Iskon Temple in Noida"
  },
  {
    id: 5,
    image: gallery5Img,
    category: "landscape",
    title: "Himalay view in Pokhara, Nepal"
  },
  {
    id: 6,
    image: gallery6Img,
    category: "architectural",
    title: "India Gate in New Delhi"
  }
]

export const services = [
    {
      icon: FaCamera,
      title: "Photography",
      description: "Capture your story through natural, expressive images that reflect your personality. From portraits to lifestyle shoots, each session is designed to create authentic, visually striking moments tailored to your style.",
      features: ["Candid & natural shooting style", "Personalized shoot planning", "Mobile photography available"],
      color: "gold"
    },
    {
      icon: FaVideo,
      title: "Videography",
      description: "Bring your moments to life with creative and engaging videos. Whether it’s personal shoots, events, or short-form content, every video is crafted with a cinematic touch to tell your story in a dynamic way.",
      features: ["Cinematic storytelling approach", "Smooth transitions & creative shots", "Mobile-friendly video formats"],
      color: "rose"
    },
    {
      icon: FaEdit,
      title: "Photo & Video Editing",
      description: "Enhance your visuals with professional editing that adds depth, color, and emotion. From retouching photos to editing videos, every detail is refined to deliver a polished and impactful final result.",
      features: ["Color correction & grading", "Video cutting & sequencing", "Format optimization for social media"],
      color: "gold"
    }
  ]



export  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking 9-12 months in advance for wedding dates, especially for popular seasons."
    },
    {
      question: "Do you travel for photoshoot?",
      answer: "Yes! We love destination photoshoot. Travel fees may apply outside of our local area."
    },
    {
      question: "How long until we receive our photos?",
      answer: "You'll receive a sneak peek within 48 hours and the full gallery within 6-8 weeks."
    }
  ]

export const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Studio Location",
      details: ["House No.290, Yadav Bhawan", "Bharwari, Kaushambi"]
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      details: ["+91 123456789", "Mon-Fri: 9am-6pm IST"]
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["ravsydv@gmail.com", "Response within 24 hours"]
    }
  ]


export const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'contact' }
  ]

export const serviceLinks = [
    { label: 'Photography', section: 'services' },
    { label: 'Videography', section: 'services' },
    { label: 'Photo Editing', section: 'services' },
    { label: 'Video Editing', section: 'services' },
    { label: 'Destination Photoshoot', section: 'services' }
  ]

export const socialLinks = [
    { icon: FaInstagram , href: 'https://www.instagram.com/ravs_gallery/' },
    { icon: FaFacebook, href: '#' },
    { icon: FaPinterest, href: '#' },
    { icon: FaYoutube, href: '#' }
  ]

