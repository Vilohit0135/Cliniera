"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/nav.module.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#why-cliniera", label: "Why Cliniera" },
  {
    label: "Services",
    hasArrow: true,
    dropdown: [
      { label: "Clinical Research", target: "#services" },
      { label: "Regulatory Affairs", target: "#services" },
      { label: "Medical Writing", target: "#services" },
    ],
  },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Team" },
  { href: "/contact", label: "Contact Us" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/Cliniera_logo_trann.webp" alt="Cliniera Logo" width={120} height={40} />
      </div>

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
                <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
              ></span>
              </button>

              {open && (
                <div className={styles.menu}>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.target}
                      className={styles.menuItem}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          )
        )}
      </div>
      <div className={styles.socials}>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Image src="/icons/facebook.svg" alt="" width={24} height={24} />
        </a>

        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
        </a>

        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
        </a>
      </div>


    </nav>
  );
}
