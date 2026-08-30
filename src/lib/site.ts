/**
 * Central content + brand data for the Club X website.
 *
 * Verified public details (address / phone / socials / core services) come from
 * Club X's own public listings. Anything marked PLACEHOLDER below is illustrative
 * copy that should be replaced with the club's real numbers before going live.
 */

export const site = {
  name: "Club X",
  tagline: "Gym · Snooker · Lounge",
  city: "H-13, Islamabad",
  description:
    "Club X is H-13's home for serious training. A fully equipped gym, certified personal trainers, a snooker floor and a lounge — all under one roof, opposite NUST Gate 2.",
  address: "B1 & B2, U Tower, Opposite NUST Gate 2, H-13, Islamabad",
  addressShort: "U Tower, Opposite NUST Gate 2, H-13",
  phone: "+92 339 894 0004",
  phoneHref: "tel:+923398940004",
  whatsapp: "https://wa.me/923398940004",
  email: "info@clubx.pk",
  mapsQuery: "Club X Gym U Tower H-13 Islamabad",
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

/** PLACEHOLDER — confirm real opening hours with the club. */
export const hours = [
  { day: "Monday – Friday", time: "6:00 AM – 12:00 AM" },
  { day: "Saturday", time: "7:00 AM – 12:00 AM" },
  { day: "Sunday", time: "8:00 AM – 11:00 PM" },
  { day: "Ladies Hours (Daily)", time: "1:00 PM – 4:00 PM" },
];

export const stats = [
  { value: 12000, suffix: " sq/ft", label: "Two-floor training facility" },
  { value: 60, suffix: "+", label: "Machines & free-weight stations" },
  { value: 1500, suffix: "+", label: "Members trained since opening" },
  { value: 18, suffix: " hrs", label: "Open, every single day" },
];

export type Facility = {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  points: string[];
  image: string;
};

export const facilities: Facility[] = [
  {
    slug: "strength",
    title: "Strength Floor",
    kicker: "01",
    blurb:
      "Power racks, Olympic platforms, a full dumbbell run up to heavy, and plate-loaded machines for every pattern you train.",
    points: [
      "4 power & squat racks",
      "Dumbbells 2.5–50 kg",
      "Deadlift platforms",
      "Plate-loaded machines",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
  {
    slug: "cardio",
    title: "Cardio Zone",
    kicker: "02",
    blurb:
      "Treadmills, ellipticals, bikes and rowers lined along the glass — conditioning work without the queue.",
    points: ["Treadmills & ellipticals", "Assault + spin bikes", "Rowing ergs", "Stair climber"],
    image: "https://images.unsplash.com/photo-1591258370814-01609b341790",
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    kicker: "03",
    blurb:
      "One-to-one coaching with certified trainers. Programming, technique correction and nutrition guidance built around you.",
    points: ["Certified coaches", "Custom programming", "Form & technique work", "Diet planning support"],
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
  },
  {
    slug: "functional",
    title: "Functional & HIIT",
    kicker: "04",
    blurb:
      "Turf lane, kettlebells, battle ropes and sleds for circuits that build engine as much as muscle.",
    points: ["Turf sled lane", "Kettlebells & ropes", "Boxes, bands & balls", "Group HIIT circuits"],
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca",
  },
  {
    slug: "snooker",
    title: "Snooker Floor",
    kicker: "05",
    blurb:
      "Full-size tables under low lights. The other half of Club X — where the session ends and the frames begin.",
    points: ["Full-size tables", "Tournament-grade cloth", "Hourly & member rates", "Late-night frames"],
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
  },
  {
    slug: "lounge",
    title: "Lounge & Shop",
    kicker: "06",
    blurb:
      "A chill-out lounge plus an in-house shop for shakers, supplements and the essentials you forgot at home.",
    points: ["Members' lounge", "Supplement counter", "Shakes & essentials", "Free Wi-Fi"],
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
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
      "Cardio + strength zones",
      "Locker & changing rooms",
      "Free induction session",
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
      "2 personal-training sessions",
      "Body composition check-ins",
      "10% off the supplement shop",
      "Discounted snooker rates",
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
      "6 personal-training sessions",
      "Guest passes each month",
      "Priority class booking",
      "Free Club X kit bag",
    ],
    featured: false,
  },
];

export const addOns = [
  { name: "Personal Training", detail: "1-to-1 coaching, per session or in packs of 8 and 12." },
  { name: "Snooker Table", detail: "Hourly rates, with member pricing on every frame." },
  { name: "Couple / Buddy", detail: "Two memberships bought together, at a reduced combined rate." },
  { name: "Student Rate", detail: "NUST and H-13 students — bring your ID to the front desk." },
];

export const trainers = [
  {
    name: "Rizwan Shah",
    role: "Founder & Head Coach",
    focus: "Strength · Powerlifting",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    name: "Hamza Iqbal",
    role: "Senior Personal Trainer",
    focus: "Hypertrophy · Body Recomposition",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    name: "Bilal Ahmed",
    role: "Conditioning Coach",
    focus: "HIIT · Athletic Performance",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
  },
  {
    name: "Ayesha Khan",
    role: "Ladies Floor Trainer",
    focus: "Strength Foundations · Mobility",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
  },
];

/** PLACEHOLDER — swap for real member reviews, with permission. */
export const testimonials = [
  {
    quote:
      "Cleanest gym I have trained in around H-13. The equipment is new, the floor never feels overcrowded, and the trainers actually correct your form.",
    name: "Usman T.",
    meta: "Member since 2023",
  },
  {
    quote:
      "Being right opposite NUST Gate 2 makes it effortless — I finish class, walk over, train, and shoot a frame of snooker after.",
    name: "Zain A.",
    meta: "NUST student",
  },
  {
    quote:
      "I started at zero. Three months of personal training here and I am squatting my bodyweight. The coaching made all the difference.",
    name: "Maryam S.",
    meta: "Member since 2024",
  },
  {
    quote:
      "Open late, well ventilated, and the staff know every member by name. It feels like a club, not a warehouse of machines.",
    name: "Fahad R.",
    meta: "Member since 2022",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  tag: string;
  span: "wide" | "tall" | "normal";
};

export const gallery: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", alt: "Free-weight and dumbbell area", tag: "Strength", span: "wide" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", alt: "Member training on the gym floor", tag: "Training", span: "tall" },
  { src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba", alt: "Snooker table under low lighting", tag: "Snooker", span: "normal" },
  { src: "https://images.unsplash.com/photo-1591258370814-01609b341790", alt: "Row of treadmills in the cardio zone", tag: "Cardio", span: "normal" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e", alt: "Barbell training session", tag: "Strength", span: "normal" },
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5", alt: "Boxing and conditioning work", tag: "Conditioning", span: "tall" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", alt: "Wide view of the training floor", tag: "The Floor", span: "wide" },
  { src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2", alt: "Kettlebell and functional equipment", tag: "Functional", span: "normal" },
  { src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc", alt: "Loaded weight plates", tag: "Strength", span: "normal" },
  { src: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c", alt: "Machines lined along the gym floor", tag: "Machines", span: "normal" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f", alt: "Mobility and stretching area", tag: "Mobility", span: "normal" },
  { src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1", alt: "Low-lit corner of the training floor", tag: "Atmosphere", span: "wide" },
];

export const faqs = [
  {
    q: "Where exactly is Club X?",
    a: "We are at B1 & B2, U Tower, directly opposite NUST Gate 2 in H-13, Islamabad. There is parking at the tower and we are a short walk from the NUST campus.",
  },
  {
    q: "Do I need to book before my first visit?",
    a: "No booking needed. Walk in any time we are open and the front desk will give you a tour and a free induction on the floor.",
  },
  {
    q: "Is there a separate ladies timing?",
    a: "Yes — we run dedicated ladies hours daily with a female trainer on the floor. Call ahead to confirm the current slot.",
  },
  {
    q: "Can I use the snooker floor without a gym membership?",
    a: "Absolutely. The snooker floor runs on hourly rates and is open to everyone; gym members simply pay a discounted rate.",
  },
  {
    q: "Do you offer personal training?",
    a: "We do. Certified trainers take one-to-one clients with custom programming, technique work and nutrition guidance — available per session or in packs.",
  },
  {
    q: "What is included with a membership?",
    a: "Full access to the strength floor, cardio zone and functional area, lockers and changing rooms, plus a free induction session to set up your programme.",
  },
];
