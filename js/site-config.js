/* ============================================================
   GRXVITAS.MEDIA — SITE CONFIGURATION
   ============================================================
   Edit this file to update portfolio items, social links,
   contact details, and other editable content.
   
   No other files need to be changed for routine content updates.
   ============================================================ */


/* ------------------------------------------------------------
   SOCIAL & CONTACT
   ------------------------------------------------------------ */
const SITE_CONFIG = {
  instagram: {
    handle: '@grxvitas.media',
    url: 'https://www.instagram.com/grxvitas.media',
  },
  email: 'hello@grxvitas.media',
  // Add more social links as needed:
  // twitter: { handle: '@grxvitas', url: 'https://twitter.com/grxvitas' },
  // linkedin: { url: 'https://linkedin.com/company/grxvitas' },
};


/* ------------------------------------------------------------
   PORTFOLIO ITEMS
   ------------------------------------------------------------ 
   Each item represents one project in the portfolio grid.

   Fields:
     id          — Unique number
     title       — Project title (shown on hover)
     description — Short tagline (shown on hover)
     category    — One of: AI COMMERCIAL | PRODUCT AD | SOCIAL MEDIA | BRAND FILM
     videoUrl    — Path or URL to the MP4 file (leave '' for placeholder)
     posterUrl   — Path or URL to a thumbnail/poster image (leave '' for placeholder)
     size        — Grid size: 'large' | 'medium' | 'small'

   HOW TO ADD A NEW VIDEO:
   1. Place your .mp4 and poster .jpg/.png in the /assets/portfolio/ folder.
   2. Copy one of the objects below and update the fields.
   3. Save this file — the website updates automatically.
   ------------------------------------------------------------ */
const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'Audi — Redefine the Drive',
    description: 'AI-crafted cinematic commercial for automotive luxury.',
    category: 'AI COMMERCIAL',
    videoUrl: 'assets/portfolio/audi.mp4.MP4',
    posterUrl: '',
    size: 'large',
  },
  {
    id: 2,
    title: 'Noir Essence — Perfume',
    description: 'Sensory-driven product film for premium fragrance.',
    category: 'PRODUCT AD',
    videoUrl: 'assets/portfolio/Perfume.mp4.MP4',
    posterUrl: '',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Timepiece — Precision',
    description: 'Detail-obsessed visual for luxury watchmaking.',
    category: 'PRODUCT AD',
    videoUrl: 'assets/portfolio/Watch.mp4.MP4',
    posterUrl: '',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Starbucks — Morning Ritual',
    description: 'AI-generated brand film for global coffee culture.',
    category: 'AI COMMERCIAL',
    videoUrl: 'assets/portfolio/Starbucks.mp4.MP4',
    posterUrl: '',
    size: 'large',
  },
  {
    id: 5,
    title: 'Jewellery — Radiance',
    description: 'High-end product visuals that capture light and desire.',
    category: 'PRODUCT AD',
    videoUrl: 'assets/portfolio/Jewellery.mp4.MP4',
    posterUrl: '',
    size: 'small',
  },
  {
    id: 6,
    title: 'Flow — Architectural Detail',
    description: 'Minimalist product design brought to life.',
    category: 'PRODUCT AD',
    videoUrl: 'assets/portfolio/Faucet.mp4.MP4',
    posterUrl: '',
    size: 'small',
  },
  {
    id: 7,
    title: 'GRXVITAS — The Studio',
    description: 'A look inside the creative engine.',
    category: 'BRAND FILM',
    videoUrl: 'assets/portfolio/Us.mp4.MOV',
    posterUrl: '',
    size: 'large',
  },
];


/* ------------------------------------------------------------
   PORTFOLIO CATEGORIES (for filter buttons if you add them)
   ------------------------------------------------------------ */
const PORTFOLIO_CATEGORIES = [
  'ALL',
  'AI COMMERCIAL',
  'PRODUCT AD',
  'SOCIAL MEDIA',
  'BRAND FILM',
];
