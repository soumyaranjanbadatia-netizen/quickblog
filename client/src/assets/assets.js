import logo from "./logo.svg";
import user_icon from "./user_icon.svg";
import star_icon from "./star_icon.svg";
import gradientBackground from "./gradientBackground.png";
import phone_icon from "./phone_icon.png";
import { FaUserCog } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export const assets = {
  logo,
  user_icon,
  star_icon,
  gradientBackground,
  phone_icon,
};

export const blogCategories = [
  "All",
  "Technology",
  "Startup",
  "Lifestyle",
  "Finance",
];

export const footer_data = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", icon: "about", href: "/about" },
      { label: "FAQs", icon: "faq", href: "/faq" },
      { label: "Our Mission", icon: "mission", href: "/mission" },
    ],
  },

  {
    title: "Need Help?",
    links: [
      {
        label: "Contact Us",
        icon: "contact",
        href: "/contact",
      },
      {
        label: "Privacy Policy",
        icon: "privacy",
        href: "/privacy",
      },
      {
        label: "Terms & Conditions",
        icon: "terms",
        href: "/terms",
      },
    ],
  },

  {
    title: "Follow Us",
    links: [],
  },
];

export const policiesData = [
  {
    id: "01",
    title: "Information We Collect",
    paragraphs: [
      "Depending on how you use Quickblog, information may include administrator account details such as name, email address, and authentication information.",
      "When users submit comments, the information they provide, such as their name and comment content, may also be processed by the platform.",
    ],
  },
  {
    id: "02",
    title: "How We Use Information",
    paragraphs: [
      "Information may be used to provide and maintain the platform, authenticate administrators, manage blog content, process comments, and improve the overall user experience.",
    ],
  },
  {
    id: "03",
    title: "Comments and Public Content",
    paragraphs: [
      "Comments submitted on publicly available blog posts may be visible to other visitors. Please avoid sharing personal or sensitive information in public comments.",
    ],
  },
  {
    id: "04",
    title: "Administrator Accounts",
    paragraphs: [
      "Administrator accounts are used to securely access the dashboard and manage blog content. Account credentials should be kept confidential and should not be shared with others.",
    ],
  },
  {
    id: "05",
    title: "Data Security",
    paragraphs: [
      "Reasonable technical and organizational measures should be used to help protect information from unauthorized access, alteration, or misuse. However, no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "06",
    title: "Third-Party Services",
    paragraphs: [
      "Quickblog may use third-party services to support hosting, database storage, authentication, image handling, or other platform functionality. Those services may process information according to their own policies.",
    ],
  },
  {
    id: "07",
    title: "Your Choices",
    paragraphs: [
      "You should only provide information that is necessary for using the relevant features of Quickblog. If you have questions about information associated with your account or comments, you can contact the Quickblog team.",
    ],
  },
  {
    id: "08",
    title: "Changes to This Policy",
    paragraphs: [
      "This Privacy Policy may be updated when the platform, its features, or its data practices change. Any updated version should be published on this page.",
    ],
  },
  {
    id: "09",
    title: "Contact Us",
    paragraphs: [
      "If you have questions or concerns about this Privacy Policy or how information is handled on Quickblog, please contact the Quickblog team.",
    ],
  },
];

export const termsData = [
  {
    id: "01",
    title: "Use of Quickblog",
    paragraphs: [
      "Quickblog is intended for browsing, reading, discovering, and managing blog content. You agree to use the platform only for lawful and appropriate purposes.",
    ],
  },
  {
    id: "02",
    title: "User Comments",
    paragraphs: [
      "Users may be able to submit comments on blog posts. Comments should be respectful, relevant, and should not contain harmful, abusive, illegal, or misleading content.",
      "Quickblog may remove comments that violate these expectations or interfere with the normal operation of the platform.",
    ],
  },
  {
    id: "03",
    title: "Blog Content",
    paragraphs: [
      "Blog content published on Quickblog may belong to its respective authors or content owners. Users should not copy, reproduce, or redistribute content without the appropriate permission.",
    ],
  },
  {
    id: "04",
    title: "Administrator Accounts",
    paragraphs: [
      "Authorized administrators are responsible for keeping their login credentials secure. Administrators should not share their passwords or allow unauthorized access to their accounts.",
    ],
  },
  {
    id: "05",
    title: "Prohibited Activities",
    paragraphs: [
      "Users must not attempt to disrupt Quickblog, gain unauthorized access, upload malicious content, abuse platform functionality, or use the service for unlawful activities.",
    ],
  },
  {
    id: "06",
    title: "Availability of the Platform",
    paragraphs: [
      "We aim to keep Quickblog available and functional, but temporary interruptions may occur because of maintenance, updates, technical issues, or other circumstances.",
    ],
  },
  {
    id: "07",
    title: "Changes to These Terms",
    paragraphs: [
      "These Terms & Conditions may be updated when Quickblog, its features, or its usage requirements change. Any updated version may be published on this page.",
    ],
  },
  {
    id: "08",
    title: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms & Conditions or your use of Quickblog, please contact the Quickblog team.",
    ],
  },
];

export const faqData = [
  {
    icon: FaBookOpen,
    title: "Getting Started",
    description:
      "Learn how Quickblog works and understand the basic steps for exploring blogs or getting started as an administrator.",
    buttonText: "Get Started",
    steps: [
      "Open the Quickblog home page to explore published blogs.",
      "Use the search bar or categories to find blogs that interest you.",
      "To create and manage your own blogs, open the Admin Login page.",
      "New users can create an account from the Register page and then log in to the dashboard.",
    ],
  },

  {
    icon: FaSearch,
    title: "Finding Blogs",
    description:
      "Find interesting articles quickly using the search bar or explore blogs from the home page.",
    buttonText: "Learn How",
    steps: [
      "Go to the Quickblog home page.",
      "Enter a keyword or topic in the search bar.",
      "Quickblog searches blog titles and categories for matching content.",
      "Select a blog card to open and read the complete article.",
    ],
  },

  {
    icon: FaTags,
    title: "Categories",
    description:
      "Explore blogs by category and discover content based on your interests and preferences.",
    buttonText: "Learn How",
    steps: [
      "Open the category section on the home page.",
      "Choose a category such as Technology, Startup, Lifestyle, or Finance.",
      "Quickblog will display blogs related to the selected category.",
      "Select any blog to read the complete article.",
    ],
  },

  {
    icon: FaComments,
    title: "Comments & Reading",
    description:
      "Learn how to read articles, leave comments, and interact with blog content.",
    buttonText: "Learn How",
    steps: [
      "Open any blog from the home page.",
      "Read the article and scroll to the comments section.",
      "Enter your name and write your comment.",
      "Submit your comment to share your thoughts.",
    ],
  },

  {
    icon: FaUserShield,
    title: "Admin & Publishing",
    description:
      "Learn how to create your first blog, use AI to generate content, and publish or save your work.",
    buttonText: "Learn How",
    steps: [
      "Register a new administrator account and log in to the dashboard.",
      "Open Add Blog from the admin dashboard.",
      "Upload a thumbnail, enter the title and subtitle, and write your content or use Generate with AI.",
      "Choose a category and decide whether to publish the blog immediately or keep it as a draft.",
    ],
  },

  {
    icon: FaUserCog,
    title: "Account & My Blogs",
    description:
      "Learn how to manage your account and find the blog posts you have created.",
    buttonText: "Learn How",
    steps: [
      "Log in to your administrator account to open the dashboard.",
      "Open My Blogs to see the posts created by your account.",
      "Published posts can be edited or unpublished, while draft posts can be edited and published later.",
      "Use the Comments section to review and manage comments related to your blog posts.",
    ],
  },
];