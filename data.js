// =============================================
// BoostKart — Shared Service Data
// Edit prices and services HERE only
// =============================================

const SITE_CONFIG = {
    siteName: "BoostKart",
    upiId: "shubhamagre@fam",         // ← Updated
    upiName: "Shubham Agre",          // ← Updated
    telegramUsername: "Shubham_656", // ← Updated
    telegramLink: "https://t.me/Shubham_656",
    email: "growthpulsesocial@gmail.com",
    supportHours: "10 AM – 10 PM IST",
    currency: "₹",
};

// =============================================
// SERVICE DATA — Edit freely
// Add/remove services, change prices/times
// =============================================

const SERVICES = [
    // ─── INSTAGRAM ──────────────────────────────
    {
        id: "ig-followers-500",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "500 Followers",
        description: "Real-looking followers added gradually. Public account required.",
        delivery: "24–48 hours",
        price: 149,
        originalPrice: 199,
        popular: false,
        active: true,
    },
    {
        id: "ig-followers-1000",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "1,000 Followers",
        description: "1K followers with gradual delivery for natural growth appearance.",
        delivery: "48–72 hours",
        price: 300,
        originalPrice: 400,
        popular: true,
        active: true,
    },
    {
        id: "ig-followers-5000",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "5,000 Followers",
        description: "Best value bulk follower package. Account must remain public.",
        delivery: "5–7 days",
        price: 1199,
        originalPrice: 1599,
        popular: false,
        active: true,
    },
    {
        id: "ig-likes-1000",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "1,000 Likes",
        description: "Post likes delivered fast. Provide post URL in order form.",
        delivery: "1–6 hours",
        price: 99,
        originalPrice: 149,
        popular: false,
        active: true,
    },
    {
        id: "ig-reel-views",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "10,000 Reel Views",
        description: "Boost your Reel's reach with 10K views. Provide Reel link.",
        delivery: "2–12 hours",
        price: 99,
        originalPrice: 149,
        popular: true,
        active: true,
    },
    {
        id: "ig-comments-50",
        category: "instagram",
        platform: "Instagram",
        emoji: "📸",
        name: "50 Comments",
        description: "Custom or random positive comments on any public post.",
        delivery: "24 hours",
        price: 199,
        originalPrice: 299,
        popular: false,
        active: true,
    },

    // ─── TIKTOK ─────────────────────────────────
    {
        id: "tt-followers-1000",
        category: "tiktok",
        platform: "TikTok",
        emoji: "🎵",
        name: "1,000 Followers",
        description: "Grow your TikTok following with 1K followers. Public account needed.",
        delivery: "24–48 hours",
        price: 199,
        originalPrice: 299,
        popular: false,
        active: true,
    },
    {
        id: "tt-views-50k",
        category: "tiktok",
        platform: "TikTok",
        emoji: "🎵",
        name: "50,000 Video Views",
        description: "Skyrocket your video's view count. Massive visibility boost.",
        delivery: "1–6 hours",
        price: 149,
        originalPrice: 249,
        popular: true,
        active: true,
    },
    {
        id: "tt-likes-5000",
        category: "tiktok",
        platform: "TikTok",
        emoji: "🎵",
        name: "5,000 Likes",
        description: "Boost engagement on any TikTok video with 5K likes.",
        delivery: "6–24 hours",
        price: 179,
        originalPrice: 279,
        popular: false,
        active: true,
    },

    // ─── YOUTUBE ────────────────────────────────
    {
        id: "yt-subscribers-500",
        category: "youtube",
        platform: "YouTube",
        emoji: "▶️",
        name: "500 Subscribers",
        description: "Real-looking subscribers. Channel must be public and active.",
        delivery: "3–7 days",
        price: 349,
        originalPrice: 499,
        popular: false,
        active: true,
    },
    {
        id: "yt-views-1000",
        category: "youtube",
        platform: "YouTube",
        emoji: "▶️",
        name: "1,000 Video Views",
        description: "Get real-looking views on any YouTube video. Provide video link.",
        delivery: "24–48 hours",
        price: 300,
        originalPrice: 400,
        popular: true,
        active: true,
    },
    {
        id: "yt-watch-hours",
        category: "youtube",
        platform: "YouTube",
        emoji: "▶️",
        name: "500 Watch Hours",
        description: "Monetization boost — 500 verified watch hours for your channel.",
        delivery: "7–14 days",
        price: 599,
        originalPrice: 899,
        popular: false,
        active: true,
    },
    {
        id: "yt-likes-1000",
        category: "youtube",
        platform: "YouTube",
        emoji: "▶️",
        name: "1,000 Video Likes",
        description: "Boost like count on any YouTube video to improve ranking.",
        delivery: "24–48 hours",
        price: 249,
        originalPrice: 399,
        popular: false,
        active: true,
    },

    // ─── CUSTOM GROWTH ──────────────────────────
    {
        id: "custom-audit",
        category: "custom",
        platform: "Any Platform",
        emoji: "🎯",
        name: "Profile Audit & Strategy",
        description: "In-depth analysis of your profile with a personalized growth strategy and action plan.",
        delivery: "48 hours",
        price: 499,
        originalPrice: 799,
        popular: false,
        active: true,
    },
    {
        id: "custom-content-plan",
        category: "custom",
        platform: "Any Platform",
        emoji: "🎯",
        name: "30-Day Content Plan",
        description: "Customized 30-day content calendar with post ideas, captions, and hashtag sets.",
        delivery: "72 hours",
        price: 699,
        originalPrice: 999,
        popular: true,
        active: true,
    },
    {
        id: "custom-full-package",
        category: "custom",
        platform: "Any Platform",
        emoji: "🎯",
        name: "Full Growth Package",
        description: "Followers + Likes + Views + Strategy — complete monthly growth bundle, negotiable.",
        delivery: "Discussed on Telegram",
        price: 1999,
        originalPrice: 2999,
        popular: false,
        active: true,
    },
];

// Helper — get service by ID
function getServiceById(id) {
    return SERVICES.find(s => s.id === id) || null;
}

// Helper — get active services
function getActiveServices(category = null) {
    return SERVICES.filter(s => s.active && (!category || s.category === category));
}

// Build Telegram message
function buildTelegramMessage(service, username = '') {
    const msg = `Hello! I want to place an order:\n\n📦 Service: ${service.platform} – ${service.name}\n💰 Price: ${SITE_CONFIG.currency}${service.price}\n👤 Username/Link: ${username || '[ENTER YOUR USERNAME]'}\n🕐 Delivery: ${service.delivery}\n\nI will send the UPI payment screenshot. Please confirm after verification.`;
    return `https://t.me/${SITE_CONFIG.telegramUsername}?text=${encodeURIComponent(msg)}`;
}
