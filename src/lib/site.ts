import type { StaticImageData } from "next/image";
import venue from "@/assets/venue.jpg";
import venueGames from "@/assets/venue-games.jpg";
import venueShop from "@/assets/venue-shop.jpg";
import venueEntrance from "@/assets/venue-entrance.jpg";
import trainerLift from "@/assets/trainer-lift.jpg";
import trainerDumbbells from "@/assets/trainer-dumbbells.jpg";
import post01 from "@/assets/post-01.jpg";
import post04 from "@/assets/post-04.jpg";
import post05 from "@/assets/post-05.jpg";
import post06 from "@/assets/post-06.jpg";
import post07 from "@/assets/post-07.jpg";

/**
 * Central content + brand data for the Club X website.
 *
 * Address, phone, socials, opening hours, the reviews and
 * every photograph come from Club X's own Instagram (@clubx_isb) and its public
 * Google listing. Anything marked PLACEHOLDER below is illustrative copy that
 * should be replaced with the club's real numbers before going live.
 */

const whatsappNumber = "923398940004";

export const site = {
  name: "Club X",
  /** The line under the club's own logo. */
  tagline: "Gym | Snooker | Vape",
  motto: "Fun N Fitness",
  city: "H-13, Islamabad",
  description:
    "Club X is H-13's 24/7 club — a fully equipped gym with personal training, a snooker floor, pool, foosball and PS4, plus an in-house shop. All under one roof, opposite NUST Gate 2.",
  address: "B1 & B2, U Tower, Plot No. 02, Opposite NUST Gate 2, H-13, Islamabad",
  addressShort: "U Tower, Opposite NUST Gate 2, H-13",
  phone: "+92 339 894 0004",
  phoneHref: "tel:+923398940004",
  whatsappNumber,
  whatsapp: `https://wa.me/${whatsappNumber}`,
  email: "info@clubx.pk",
  mapsQuery: "Club X Gym & Snooker U Tower H-13 Islamabad",
  socials: {
    instagram: "https://www.instagram.com/clubx_isb/",
    facebook: "https://www.facebook.com/CLUBX.H13/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const hours = [
  { day: "Gym, snooker & games", time: "Open 24 / 7" },
  { day: "Ladies timing (daily)", time: "11:00 AM – 3:00 PM" },
];

export const ladiesHours = "11:00 AM – 3:00 PM";

export const stats = [
  { value: "24/7", label: "Open every hour of every day" },
  { value: "4.3★", label: "Google rating across 83 reviews" },
  { value: "2", label: "Floors — B1 & B2 of U Tower" },
  { value: "7.5K+", label: "Following @clubx_isb on Instagram" },
];

export type Facility = {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  points: string[];
  image: StaticImageData;
  imageAlt: string;
  /** Focal point for crops, as a Tailwind object-position class. */
  imageClass?: string;
};

export const facilities: Facility[] = [
  {
    slug: "gym",
    title: "Gym Floor",
    kicker: "01",
    blurb:
      "Racks, barbells, dumbbells, machines and a cardio line on a clean, well-ventilated floor — open around the clock, so you train when it suits you.",
    points: [
      "Free weights & racks",
      "Machines & cardio line",
      "Clean, ventilated floor",
      "Open 24 / 7",
    ],
    image: trainerLift,
    imageAlt: "Deadlift on the Club X gym floor",
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    kicker: "02",
    blurb:
      "One-to-one sessions with Club X's trainer, Abdul Hadi — a programme built around your goal, with someone watching your form on every set.",
    points: [
      "Trainer: Abdul Hadi",
      "Strength training",
      "Form & technique work",
      "Programme built around you",
    ],
    image: trainerDumbbells,
    imageAlt: "Dumbbell training at Club X",
  },
  {
    slug: "snooker",
    title: "Snooker Floor",
    kicker: "03",
    blurb:
      "The other half of Club X. Well-lit tables kept in great shape and a setup regulars call professional — and the doors never close.",
    points: [
      "Well-lit snooker tables",
      "Tables kept in great shape",
      "Walk in, no membership needed",
      "Open 24 / 7",
    ],
    image: post01,
    imageAlt: "Club X Snooker — now open",
    imageClass: "object-[50%_72%]",
  },
  {
    slug: "games",
    title: "Pool, Foosball & PS4",
    kicker: "04",
    blurb:
      "Not every visit has to be a workout. Shoot a rack of pool, settle it over foosball or pick up a PS4 controller in the lounge.",
    points: ["Pool table", "Foosball table", "PS4 gaming", "Lounge seating"],
    image: venueGames,
    imageAlt: "Pool table and foosball table in the Club X lounge",
  },
  {
    slug: "shop",
    title: "Shop & Vape Counter",
    kicker: "05",
    blurb:
      "An in-house mini shop for the things you need before or after a session, alongside the Club X vape counter.",
    points: [
      "In-house mini shop",
      "Gym essentials",
      "Vape counter (18+ only)",
      "Right inside the club",
    ],
    image: venueShop,
    imageAlt: "The shop counter inside Club X",
  },
  {
    slug: "ladies",
    title: "Ladies Timing",
    kicker: "06",
    blurb:
      "A dedicated ladies slot on the gym floor every single day, from 11 in the morning to 3 in the afternoon.",
    points: ["Every day of the week", "11:00 AM – 3:00 PM", "Full gym floor", "Message us to get started"],
    image: venueEntrance,
    imageAlt: "The Club X entrance at U Tower",
  },
];

/** PLACEHOLDER PRICING — replace with Club X's live rate card before launch. */
export const plans = [
  {
    name: "Monthly",
    price: "5,000",
    period: "/ month",
    tagline: "No commitment. Train month to month.",
    features: [
      "Full gym floor access",
      "24 / 7 entry",
      "Ladies timing 11 AM – 3 PM",
      "Help getting started on the floor",
    ],
    featured: false,
  },
  {
    name: "Quarterly",
    price: "12,000",
    period: "/ 3 months",
    tagline: "Our most popular plan — best value per month.",
    features: [
      "Everything in Monthly",
      "Three months at a lower rate",
      "Personal training available",
      "Snooker, pool & PS4 on site",
    ],
    featured: true,
  },
  {
    name: "Annual",
    price: "40,000",
    period: "/ year",
    tagline: "Full access, all year, at the lowest rate.",
    features: [
      "Everything in Quarterly",
      "Lowest rate per month",
      "A full year, any hour",
      "Ask about personal training offers",
    ],
    featured: false,
  },
];

export const addOns = [
  { name: "Personal Training", detail: "1-to-1 sessions with Club X's trainer, Abdul Hadi." },
  { name: "Snooker", detail: "Pay-as-you-play tables, open to everyone, 24 / 7." },
  { name: "Pool, Foosball & PS4", detail: "The games lounge — bring friends, no membership needed." },
  { name: "Ladies Timing", detail: "A dedicated ladies slot every day, 11 AM – 3 PM." },
];

export const trainer = {
  name: "Abdul Hadi",
  role: "Club X Personal Trainer",
  /** What a personal-training block covers. Add his own bio and photo when available. */
  sessions: [
    "One-to-one sessions on the gym floor",
    "A programme built around your goal",
    "Form and technique work",
    "Strength training",
  ],
};

/** Real reviews from Club X's Google listing. */
export const testimonials = [
  {
    quote:
      "Club X Gym and Snooker is my go-to spot for both fitness and leisure! The gym equipment is modern, well-maintained, and offers a great variety to suit all fitness levels. The staff are friendly, knowledgeable, and always eager to assist.",
    name: "Talha M",
    meta: "Google review · Sep 2025",
  },
  {
    quote:
      "One of the best snooker spots around — clean, well-lit, and the tables are in great shape and the overall setup feels professional. There's a gym as well if you're into that.",
    name: "Asad U",
    meta: "Google review · May 2025",
  },
  {
    quote:
      "The gym is well-maintained, with a clean and tidy environment that makes workouts enjoyable. Plus, you can also enjoy a game of snooker or play on the PS4, which is a cherry on top for relaxation after a great workout session!",
    name: "Rayyan A",
    meta: "Google review · Mar 2025",
  },
  {
    quote:
      "Gym X is the best in the vicinity, offering a clean environment, supportive staff, and high-quality equipment. Truly enjoying my time here!",
    name: "My_lensworld I",
    meta: "Google review · Mar 2025",
  },
];

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  tag: "Venue" | "Training" | "Snooker";
};

/** Club X's own photos and posts — the venue shot plus the official feed. */
export const gallery: GalleryItem[] = [
  { src: venue, alt: "The Club X lounge — pool, foosball, the entrance and the shop", tag: "Venue" },
  { src: post01, alt: "Club X Snooker is back — now open", tag: "Snooker" },
  { src: venueGames, alt: "Pool table and foosball table in the lounge", tag: "Venue" },
  { src: post04, alt: "The only bad workout is the one that didn't happen", tag: "Training" },
  { src: venueEntrance, alt: "The Club X entrance at U Tower", tag: "Venue" },
  { src: post05, alt: "Pain is temporary. Pride is forever.", tag: "Training" },
  { src: venueShop, alt: "The shop counter inside Club X", tag: "Venue" },
  { src: post06, alt: "Common gym mistakes to avoid", tag: "Training" },
  { src: post07, alt: "20–30 minute quick workout plans", tag: "Training" },
];

export const faqs = [
  {
    q: "Where exactly is Club X?",
    a: "We are at B1 & B2, U Tower, Plot No. 02, directly opposite NUST Gate 2 in H-13, Islamabad — a short walk from the NUST campus.",
  },
  {
    q: "What are your timings?",
    a: "Club X is open 24 hours a day, 7 days a week. Come in whenever it suits you — early morning, after class or in the middle of the night.",
  },
  {
    q: "Is there a separate ladies timing?",
    a: "Yes. Ladies timing runs every day from 11:00 AM to 3:00 PM.",
  },
  {
    q: "Can I play snooker without a gym membership?",
    a: "Absolutely. The snooker floor, pool, foosball and PS4 are open to everyone — you do not need a gym membership to play.",
  },
  {
    q: "Do you offer personal training?",
    a: "We do. Club X's trainer, Abdul Hadi, takes one-to-one clients — message us on WhatsApp to book a session.",
  },
  {
    q: "How do I join or ask about rates?",
    a: "Message us on WhatsApp, call the desk or just walk in — we will take you through the current packages and get you started.",
  },
];
