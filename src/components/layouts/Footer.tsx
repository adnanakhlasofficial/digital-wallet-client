import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";
import Logo from "../navbar-components/logo";
import { Link } from "react-router";

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <section className="px-4 md:px-6 container mx-auto">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link
                to="/"
                className="text-primary hover:text-primary/90 flex items-center gap-2"
              >
                <Logo />
                <h2 className="text-xl font-semibold">Digital Wallet</h2>
              </Link>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ipsum quam fugit aut amet blanditiis delectus molestias.
              Necessitatibus dolores nesciunt quis, iusto aspernatur facilis,
              labore explicabo velit ratione voluptatibus reprehenderit.
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {defaultSocialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs  md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">
            &copy;{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
            })}{" "}
            Digital Wallet. All rights reserved.
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {defaultLegalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
