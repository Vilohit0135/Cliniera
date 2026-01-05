"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/nav.module.css";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#why-cliniera", label: "Why Cliniera" },
  {
    label: "Services",
    hasArrow: true,
    dropdown: [
      { label: "Clinical Trial Management", target: "/#services" },
      { label: "Site Selection & Monitoring", target: "/#services" },
      { label: "Regulatory Affairs", target: "/#services" },
      { label: "Data Management & Analysis", target: "/#services" },
      { label: "Medical Writing & Communication", target: "/#services" },
      { label: "Product Approval", target: "/#services" },
    ],
  },
  { href: "/#about", label: "About Us" },
  { href: "/#team", label: "Team" },
  { href: "/contact", label: "Contact Us" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      {/* LOGO */}
      <div className={styles.logo}>
        <button
          onClick={handleLogoClick}
          className={styles.logoButton}
          aria-label="Go to home"
        >
          <Image
            src="/Cliniera_logo_trann.webp"
            alt="Cliniera Logo"
            width={120}
            height={40}
            priority
          />
        </button>
      </div>

      {/* NAV LINKS */}
      <div className={styles.links}>
        {links.map((link) =>
          link.dropdown ? (
            <div
              key={link.label}
              className={styles.dropdown}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className={styles.link}>
                {link.label}
                <span
                  className={`${styles.chevron} ${
                    open ? styles.chevronOpen : ""
                  }`}
                />
              </button>

              {open && (
                <div className={styles.menu}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.target}
                      className={styles.menuItem}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {/* SOCIAL ICONS */}
      <div className={styles.socials}>
        <a
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <Image src="/icons/facebook.svg" alt="" width={24} height={24} />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        >
          <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
        </a>
      </div>
    </nav>
  );
}
