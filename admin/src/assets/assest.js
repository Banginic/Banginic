import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Globe,
  Check,
} from "lucide-react";
import person from './person.png'
import person_Placeholder from './person_Placeholder.png'

export const navlinks = [
    
    { name: "Message", link: "/message" },
    { name: "Projects", link: "/projects" },
    { name: "Employees", link: "/employee" },
    { name: "Jobs / Applications", link: "/job-applications" },
    { name: "News", link: "/news" },
    { name: "Testimonials", link: "/testimonials" },
  ];
export const sidebarLinks = [
    
    { name: "Message", link: "/message" },
    { name: "Projects", link: "/projects" },
    { name: "Employees", link: "/employee" },
    { name: "Jobs / Applications", link: "/job-applications" },
    { name: "News", link: "/news" },
    { name: "Newsletters", link: "/newsletters" },
    { name: "Testimonials", link: "/testimonials" },
  ];
  export const metaData = {
    name: 'Banginic'
  }
  export { person, person_Placeholder}

  export const platforms = [
    { name: 'twitter', icon: Twitter, label: 'Twitter', placeholder: 'https://twitter.com/yourusername' },
    { name: 'facebook', icon: Facebook, label: 'Facebook', placeholder: 'https://facebook.com/yourusername' },
    { name: 'instagram', icon: Instagram, label: 'Instagram', placeholder: 'https://instagram.com/yourusername' },
    { name: 'linkedin', icon: Linkedin, label: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourusername' },
    { name: 'youtube', icon: Youtube, label: 'YouTube', placeholder: 'https://youtube.com/@yourusername' },
    { name: 'github', icon: Github, label: 'GitHub', placeholder: 'https://github.com/yourusername' },
    { name: 'website', icon: Globe, label: 'Website', placeholder: 'https://yourwebsite.com' },
  ];