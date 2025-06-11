import easyUpload from '../assets/images/svg/easy-upload.svg'
import fastDelivery from '../assets/images/svg/fast-delivery.svg'
import alwaysOnline from '../assets/images/svg/always-online.svg'
import secureStorage from '../assets/images/svg/secure-storage.svg'
import protectedIcon from '../assets/images/svg/ssl-protection.svg'
import compliantIcon from '../assets/images/svg/gdpr-compliant.svg'
import { Analytics, CheckArrow, Cloud, Community, Editing, Security, ShareX, Sharing, Streaming } from "./Icons";


export const FEATURES = [
    {
        img: easyUpload,
        title: "Easy Upload",
        description: "Drag & drop your files in seconds",
    },
    {
        img: fastDelivery,
        title: "Fast Delivery",
        description: "Global CDN for instant access",
    },
    {
        img: alwaysOnline,
        title: "Always Online",
        description: "99.9% uptime guarantee",
    },
];

export const BADGES = [
    {
        img: secureStorage,
        title: "Secure Storage",
        description: "End-to-end encryption for your data",
    },
    {
        img: protectedIcon,
        title: "SSL Protected",
        description: "256-bit SSL encryption",
    },
    {
        img: compliantIcon,
        title: "GDPR Compliant",
        description: "Your data is protected by EU law",
    },
];

export const Pricing_Data = [
    {
        img: secureStorage,
        title: "Secure Storage",
        description: "End-to-end encryption for your data",
    },
    {
        text: "Pro",
        popular: "Most Popular",
        amount: "$10",
        month: "/month",
        para: "For individual creators",
        icon: CheckArrow,
        para1: "Up to 10GB per video",
        para2: "Unlimited video retention",
        para3: "Advanced analytics",
        para4: "Ad-free content delivery",
        para5: "Priority support",
    },
    {
        text: "Creator",
        amount: "$25",
        month: "/month",
        para: "For content groups",
        icon: CheckArrow,
        para1: "Unlimited video size",
        para2: "Unlimited video retention",
        para3: "Advanced analytics",
        para4: "Ad-free content delivery",
        para5: "Priority support",
    },
];

export const EveryThing_Data = [
    {
        icon: Streaming,
        Heading: "HD Streaming",
        para: "Stream your content in high quality without buffering."
    },
    {
        icon: Cloud,
        Heading: "Cloud Storage",
        para: "Store your videos securely in the cloud with unlimited storage space."
    },
    {
        icon: ShareX,
        Heading: "Image Upload with ShareX",
        para: "Upload images instantly using our ShareX configuration for seamless sharing."
    },
    {
        icon: Sharing,
        Heading: "Private Sharing",
        para: "Share your videos privately with selected viewers. "
    },
    {
        icon: Security,
        Heading: "Advanced Security",
        para: "End-to-end encryption ensures your content remains protected. "
    },
    {
        icon: Editing,
        Heading: "Basic Editing",
        para: "Trim, crop, and add filters to your videos directly in the app. "
    },
    {
        icon: Sharing,
        Heading: "Cross-platform Sharing",
        para: "Easily share your content across all major social platforms. "
    },
    {
        icon: Community,
        Heading: "Community",
        para: "Connect with like-minded creators and build your audience through our community features. "
    },
    {
        icon: Analytics,
        Heading: "Analytics",
        para: "Track your video performance with detailed viewership statistics and audience insights."
    },

];

export const HEADER_LIST = [
    {
        title: "Home",
        link: "#home"
    },
    {
        title: "How it Works",
        link: "#work"
    },
    {
        title: "Features",
        link: "#features"
    },
    {
        title: "Pricing",
        link: "#pricing"
    },
];