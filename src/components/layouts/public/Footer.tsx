"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Programs", href: "/programs" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact" },
];

const departments = [
  "Computer Science & Engineering",
  "Electrical & Electronic Engineering",
  "Business Administration",
  "English",
  "Economics",
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "X", href: "https://x.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* University Info */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wide">
              University<span className="text-blue-400">.</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-blue-100/70">
              Empowering students through quality education, innovative
              research, and professional development to build a better future.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold transition hover:bg-blue-600"
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100/70 transition hover:pl-2 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Our Departments</h3>

            <ul className="space-y-4">
              {departments.map((department) => (
                <li
                  key={department}
                  className="text-sm text-blue-100/70 transition hover:text-white"
                >
                  {department}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Us</h3>

            <ul className="space-y-5 text-sm text-blue-100/70">
              <li className="flex gap-3">
                <span className="text-blue-400">📍</span>
                <span>
                  University Campus,
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+8801700000000" className="hover:text-white">
                  +880 1700-000000
                </a>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-400">✉</span>
                <a
                  href="mailto:info@university.edu"
                  className="hover:text-white"
                >
                  info@university.edu
                </a>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-400">🕒</span>
                <span>
                  Sunday - Thursday
                  <br />
                  9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-sm text-blue-100/60 md:flex-row">
          <p>© {currentYear ?? "2026"} University. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
