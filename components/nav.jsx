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
  const router = useRouter();

  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
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
              width={150}
              height={40}
              priority
            />
          </button>
        </div>

        {/* DESKTOP LINKS */}
        <div className={styles.links}>
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className={styles.dropdown}
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button className={styles.link}>
                  {link.label}
                  <span
                    className={`${styles.chevron} ${
                      desktopDropdownOpen ? styles.chevronOpen : ""
                    }`}
                  />
                </button>

                {desktopDropdownOpen && (
                  <div className={styles.menu}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.target}
                        className={styles.menuItem}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* SOCIAL ICONS (DESKTOP ONLY) */}
        <div className={styles.socials}>
          {/* <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Image src="/icons/facebook.svg" alt="" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
          </a> */}
          <p className="text-[#E56027]">LinkedIn</p>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={styles.mobileHamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className={styles.mobileLink}
                  onClick={() =>
                    setMobileDropdownOpen(!mobileDropdownOpen)
                  }
                >
                  {link.label}
                </button>

                {mobileDropdownOpen && (
                  <div className={styles.mobileDropdown}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.target}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
}
