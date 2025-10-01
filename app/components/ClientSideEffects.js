"use client";

import { useEffect } from "react";

export default function ClientSideEffects() {
  useEffect(() => {
    // This code will only run on the client side, after the component mounts

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Scroll-triggered fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Navigation background change on scroll
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 50) {
          // Using classes is often better than direct style manipulation in React
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Floating animation delay for experience cards
    document.querySelectorAll(".floating").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.25}s`; // Adjusted delay for a subtler effect
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // You could also disconnect the observer here if needed
      // observer.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return null; // This component doesn't render any visible UI
}
