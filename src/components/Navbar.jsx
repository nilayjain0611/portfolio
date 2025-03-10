"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { id: "home", label: "home" },
  { id: "experience", label: "experience" },
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null); // Add hamburger ref

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen &&
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target) &&
          (!hamburgerRef.current || !hamburgerRef.current.contains(event.target))) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden realtive md:flex sticky top-3 mx-auto w-178 h-[60px] items-center justify-between bg-[var(--card_color)] border border-[var(--light_gray)] text-[var(--light_gray)] text-[18px] font-light rounded-full px-[53px] py-[14px] z-50">
        <Image src="/Logo.svg" alt="Logo" width={82} height={32} />
        <ul className="flex gap-[35px]">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              {activeSection === item.id && (
                <span className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[var(--highlight)] rounded-full" />
              )}
              <Link href={`#${item.id}`} className="lowercase">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed py-6 top-0 left-0 right-0 z-50">
        <div className="max-w-[710px] mx-auto px-6  flex items-center justify-between h-[60px]">
          <Image 
            src="/Logo.svg" 
            alt="Logo" 
            width={60} 
            height={24} 
            className="w-[60px] h-auto"
          />
          <button 
            ref={hamburgerRef} // Assign ref here
            onClick={toggleMobileMenu} 
            className="text-[var(--light_gray)] text-2xl focus:outline-none relative z-50"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span className="bar top-bar"></span>
              <span className="bar middle-bar"></span>
              <span className="bar bottom-bar"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
            fixed top-0 right-0 bottom-0 w-80 bg-[var(--card_color)] 
            border-l border-[var(--light_gray)] transition-transform duration-300 ease-in-out z-40`}
        >
          <ul className="p-6 mt-20 space-y-6">
            {navItems.map((item) => (
              <li key={item.id} onClick={closeMobileMenu}>
                <Link 
                  href={`#${item.id}`} 
                  className={`block text-[var(--light_gray)] text-lg lowercase 
                    ${activeSection === item.id ? 'font-medium' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .hamburger {
          width: 24px;
          height: 24px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .bar {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--light_gray);
          transition: all 0.3s ease-in-out;
        }

        .top-bar {
          top: 5px;
          transform: translateY(0);
        }

        .middle-bar {
          top: 11px;
        }

        .bottom-bar {
          top: 17px;
          transform: translateY(0);
        }

        .hamburger.active .top-bar {
          transform: rotate(45deg) translateY(6px) translateX(6px);
        }

        .hamburger.active .middle-bar {
          opacity: 0;
        }

        .hamburger.active .bottom-bar {
          transform: rotate(-45deg) translateY(-6px) translateX(6px);
        }
      `}</style>
    </>
  );
}