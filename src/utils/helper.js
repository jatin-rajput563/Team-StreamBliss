<<<<<<< HEAD
// import easyUpload from '../assets/images/svg/easy-upload.svg'
// import fastDelivery from '../assets/images/svg/fast-delivery.svg'
// import alwaysOnline from '../assets/images/svg/always-online.svg'
import secureStorage from '../assets/images/svg/secure-storage.svg'
import protectedIcon from '../assets/images/svg/ssl-protection.svg'
import compliantIcon from '../assets/images/svg/gdpr-compliant.svg'
import { Analytics, CheckArrow, Cloud, Community, Editing, Security, ShareX, Sharing, Streaming, EasyUploadIcon , FastDeliveryIcon , AlwaysOnlineIcon , SecureStorageIcon, ProtectedIcon, CompliantIcon} from "./Icons";


export const FEATURES = [
    {
        icon: EasyUploadIcon,
        title: "Easy Upload",
        description: "Drag & drop your files in seconds",
    },
    {
        icon: FastDeliveryIcon,
        title: "Fast Delivery",
        description: "Global CDN for instant access",
    },
    {
        icon: AlwaysOnlineIcon,
        title: "Always Online",
        description: "99.9% uptime guarantee",
    },
];

export const BADGES = [
    {
        icon: SecureStorageIcon,
        title: "Secure Storage",
        description: "End-to-end encryption for your data",
    },
    {
        icon: ProtectedIcon,
        title: "SSL Protected",
        description: "256-bit SSL encryption",
    },
    {
        icon: CompliantIcon,
        title: "GDPR Compliant",
        description: "Your data is protected by EU law",
    },
];
=======
import memberBoy from '../assets/images/png/member-boy.png'
import memberGirl from '../assets/images/png/member-girl.png'
export const FEATURE_DATA = [
    {
        feature: "Upload limit",
        Free: "250MB",
        Pro: "10GB",
        Creator: "Unlimited",
    },
    {
        feature: "Video retention",
        Free: "180 Days",
        Pro: "Unlimited",
        Creator: "Unlimited",
    },
    {
        feature: "Basic analytics",
        Free: "Basic",
        Pro: "Advanced",
        Creator: "Advanced",
    },
    {
        feature: "Content",
        Free: "Ad-supported content",
        Pro: "Ad-free content delivery",
        Creator: "Ad-free content delivery",
    },
    {
        feature: "Priority support",
        Free: "No",
        Pro: "Yes",
        Creator: "Yes",
    },
];
export const MEMBERS_DATA = [
    {
        text: "Images, videos, docs — all in one place, perfectly organized. I used to juggle between Dropbox, Google Drive, and WeTransfer. Now it’s just one tab, and it works like magic.",
        name: "Nadine K.",
        role: "Marketing Consultant",
        image: memberBoy,
    },
    {
        text: "As a small design agency, we’ve tried countless platforms, but nothing matches the speed and ease of The Creative Cloud for Everyone. File sharing is instant, and collaborating on large video projects has never been smoother",
        name: "Amanda R.",
        role: "Creative Director",
        image: memberGirl,
    },
    {
        text: "Images, videos, docs — all in one place, perfectly organized. I used to juggle between Dropbox, Google Drive, and WeTransfer. Now it’s just one tab, and it works like magic.",
        name: "Nadine K.",
        role: "Marketing Consultant",
        image: memberBoy,
    },
    {
        text: "As a small design agency, we’ve tried countless platforms, but nothing matches the speed and ease of The Creative Cloud for Everyone. File sharing is instant, and collaborating on large video projects has never been smoother",
        name: "Amanda R.",
        role: "Creative Director",
        image: memberGirl,
    },
   
  ];

import { Analytics, CheckArrow, Cloud, Community, Editing, Security, ShareX, Sharing, Streaming } from "./Icons";
>>>>>>> 6c1525210a725fd6ea3db0e2e2da2007f32a1d52

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
<<<<<<< HEAD

export const FOOTER_DATA = [
    {
        title: "Company",
        links: [
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            { label: "Features", href: "#" },
            { label: "How it Works", href: "#" },
            { label: "Pricing", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Services", href: "#" },
            { label: "Impressum", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Centre", href: "#" },
            { label: "System Status", href: "#" },
        ],
    },
];

export const FAQS = [
    {
        question: "Can I switch plans later?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards and PayPal.",
    },
    {
        question: "How do I cancel my subscription?",
        answer:
            "You can cancel your subscription at any time from your account settings.",
    },
];
=======
>>>>>>> 6c1525210a725fd6ea3db0e2e2da2007f32a1d52
