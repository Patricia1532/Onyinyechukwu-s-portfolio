

import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/images/wireframes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function renderSvgToPng(svgContent, filename) {
  const svgPath = path.join(outDir, `${filename}.svg`);
  const pngPath = path.join(outDir, `${filename}.png`);
  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  execSync(`convert -background none -density 150 "${svgPath}" "${pngPath}"`);
  fs.unlinkSync(svgPath);
  console.log(`Generated: ${pngPath}`);
}

// ----------------------------------------------------
// 1. HOME: WIREFRAME & DESIGN
// ----------------------------------------------------
const homeWire = `
<svg width="800" height="1100" viewBox="0 0 800 1100" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="1100" fill="#FFFFFF"/>
  
  <!-- Navbar -->
  <rect x="0" y="0" width="800" height="64" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="40" y="22" width="90" height="20" rx="4" fill="#9CA3AF"/>
  <rect x="360" y="27" width="50" height="10" rx="2" fill="#D1D5DB"/>
  <rect x="430" y="27" width="50" height="10" rx="2" fill="#D1D5DB"/>
  <rect x="500" y="27" width="70" height="10" rx="2" fill="#D1D5DB"/>
  <rect x="630" y="18" width="60" height="28" rx="14" fill="#E5E7EB" stroke="#D1D5DB"/>
  <rect x="700" y="18" width="60" height="28" rx="14" fill="#4B5563"/>

  <!-- Hero Section -->
  <rect x="40" y="90" width="160" height="22" rx="11" fill="#F3F4F6" stroke="#E5E7EB"/>
  <text x="54" y="105" font-size="10" font-weight="bold" fill="#6B7280" letter-spacing="1">● STREET-LEVEL ADVERTISING</text>
  
  <rect x="40" y="130" width="460" height="28" rx="4" fill="#1F2937"/>
  <rect x="40" y="166" width="380" height="28" rx="4" fill="#1F2937"/>
  
  <rect x="40" y="210" width="520" height="12" rx="3" fill="#9CA3AF"/>
  <rect x="40" y="230" width="440" height="12" rx="3" fill="#9CA3AF"/>

  <rect x="40" y="265" width="130" height="38" rx="6" fill="#1F2937"/>
  <rect x="185" y="265" width="130" height="38" rx="6" fill="#F3F4F6" stroke="#D1D5DB"/>

  <!-- Car Screen Wireframe Illustration -->
  <rect x="40" y="330" width="720" height="300" rx="12" fill="#F9FAFB" stroke="#E5E7EB"/>
  <rect x="180" y="360" width="440" height="130" rx="8" fill="#E5E7EB" stroke="#9CA3AF" stroke-dasharray="6,6"/>
  <text x="280" y="430" font-size="14" font-weight="bold" fill="#6B7280" font-family="monospace">[ DIGITAL ROOFTOP SCREEN ]</text>
  <!-- Car Silhouette Wire -->
  <path d="M120,560 L240,500 L560,500 L680,560 L700,590 L100,590 Z" fill="#D1D5DB"/>
  <circle cx="220" cy="590" r="30" fill="#9CA3AF"/>
  <circle cx="580" cy="590" r="30" fill="#9CA3AF"/>

  <!-- 4 Feature Cards -->
  <g transform="translate(40, 660)">
    <rect x="0" y="0" width="170" height="160" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="16" y="20" width="32" height="32" rx="6" fill="#D1D5DB"/>
    <rect x="16" y="65" width="110" height="14" rx="3" fill="#374151"/>
    <rect x="16" y="90" width="138" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="16" y="104" width="110" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="183" y="0" width="170" height="160" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="199" y="20" width="32" height="32" rx="6" fill="#D1D5DB"/>
    <rect x="199" y="65" width="110" height="14" rx="3" fill="#374151"/>
    <rect x="199" y="90" width="138" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="199" y="104" width="110" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="366" y="0" width="170" height="160" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="382" y="20" width="32" height="32" rx="6" fill="#D1D5DB"/>
    <rect x="382" y="65" width="110" height="14" rx="3" fill="#374151"/>
    <rect x="382" y="90" width="138" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="382" y="104" width="110" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="550" y="0" width="170" height="160" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="566" y="20" width="32" height="32" rx="6" fill="#D1D5DB"/>
    <rect x="566" y="65" width="110" height="14" rx="3" fill="#374151"/>
    <rect x="566" y="90" width="138" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="566" y="104" width="110" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <!-- Content Section Wireframe -->
  <rect x="40" y="850" width="720" height="200" rx="10" fill="#F3F4F6"/>
  <rect x="70" y="880" width="220" height="20" rx="4" fill="#1F2937"/>
  <rect x="70" y="915" width="340" height="10" rx="2" fill="#6B7280"/>
  <rect x="70" y="935" width="280" height="10" rx="2" fill="#6B7280"/>
  <rect x="460" y="870" width="270" height="150" rx="8" fill="#E5E7EB" stroke="#D1D5DB"/>
</svg>
`;

const homeDesign = `
<svg width="800" height="1100" viewBox="0 0 800 1100" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0B1640"/>
      <stop offset="50%" stop-color="#030416"/>
      <stop offset="100%" stop-color="#000103"/>
    </linearGradient>
    <linearGradient id="goldText" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FFCC00"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>

  <rect width="800" height="1100" fill="url(#bgGrad)"/>
  
  <!-- Navbar -->
  <rect x="0" y="0" width="800" height="68" fill="rgba(3,4,22,0.7)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="40" y="42" font-family="'Lato', sans-serif" font-weight="900" font-size="20" fill="#FFFFFF" letter-spacing="1">Sp<tspan fill="#FFCC00">•</tspan>tlyte</text>
  <text x="360" y="40" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)">About</text>
  <text x="430" y="40" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)">How It Works</text>
  <text x="540" y="40" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)">Agencies</text>
  
  <rect x="630" y="20" width="60" height="28" rx="14" fill="transparent" stroke="rgba(255,255,255,0.4)"/>
  <text x="646" y="38" font-size="11" font-weight="700" fill="#FFFFFF">Login</text>
  <rect x="700" y="20" width="64" height="28" rx="14" fill="#FFCC00"/>
  <text x="712" y="38" font-size="11" font-weight="800" fill="#030416">Register</text>

  <!-- Hero Kicker -->
  <rect x="40" y="95" width="180" height="24" rx="12" fill="rgba(255,204,0,0.15)" stroke="rgba(255,204,0,0.4)"/>
  <circle cx="54" cy="107" r="3.5" fill="#22C55E"/>
  <text x="64" y="111" font-size="10" font-weight="800" fill="#FFCC00" letter-spacing="1.2">STREET-LEVEL REACH</text>

  <!-- Hero Title -->
  <text x="40" y="165" font-family="'Lato', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="-0.5">Mobile Digital Advertising</text>
  <text x="40" y="205" font-family="'Lato', sans-serif" font-weight="900" font-size="34" fill="url(#goldText)" letter-spacing="-0.5">Built For Moving Cities</text>
  
  <text x="40" y="245" font-size="14.5" fill="rgba(255,255,255,0.7)" font-weight="400">Launch targeted transit campaigns across high-visibility Lagos taxi fleets.</text>

  <!-- CTA Buttons -->
  <rect x="40" y="280" width="150" height="42" rx="21" fill="#FFCC00"/>
  <text x="68" y="306" font-size="13" font-weight="800" fill="#030416">Start Campaign →</text>
  <rect x="205" y="280" width="130" height="42" rx="21" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)"/>
  <text x="235" y="306" font-size="13" font-weight="700" fill="#FFFFFF">How it works</text>

  <!-- Styled Hero Showcase Display -->
  <g transform="translate(40, 350)">
    <rect width="720" height="290" rx="16" fill="#0A1128" stroke="rgba(255,255,255,0.15)"/>
    <!-- Screen display glowing -->
    <rect x="180" y="30" width="360" height="140" rx="8" fill="#000000" stroke="#FFCC00" stroke-width="2"/>
    <text x="240" y="90" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFCC00">SPOTLYTE DIGITAL</text>
    <text x="260" y="115" font-size="12" fill="rgba(255,255,255,0.85)">Live Lagos Corridors</text>
    <rect x="270" y="130" width="180" height="20" rx="4" fill="#22C55E"/>
    <text x="290" y="144" font-size="10" font-weight="bold" fill="#000">400+ VEHICLES ACTIVE</text>
    <!-- Modern vehicle base outline -->
    <path d="M120,230 L220,180 L500,180 L600,230 L630,260 L90,260 Z" fill="#1C2438"/>
    <circle cx="200" cy="260" r="24" fill="#374151" stroke="#FFCC00" stroke-width="2"/>
    <circle cx="520" cy="260" r="24" fill="#374151" stroke="#FFCC00" stroke-width="2"/>
  </g>

  <!-- 4 Feature Cards -->
  <g transform="translate(40, 670)">
    <rect x="0" y="0" width="170" height="170" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="36" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="30" y="42" font-size="16" fill="#FFCC00">📺</text>
    <text x="16" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF">Moving screens</text>
    <text x="16" y="110" font-size="11" fill="rgba(255,255,255,0.65)" width="138">High-definition LED screens visible in bright African sunlight.</text>

    <rect x="183" y="0" width="170" height="170" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="219" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="213" y="42" font-size="16" fill="#FFCC00">📍</text>
    <text x="199" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF">Route intelligence</text>
    <text x="199" y="110" font-size="11" fill="rgba(255,255,255,0.65)">Dynamic GPS-based geo-fenced advertising zones.</text>

    <rect x="366" y="0" width="170" height="170" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="402" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="396" y="42" font-size="16" fill="#FFCC00">⚡</text>
    <text x="382" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF">Live pacing</text>
    <text x="382" y="110" font-size="11" fill="rgba(255,255,255,0.65)">Real-time telemetry feeds and verified audit metrics.</text>

    <rect x="550" y="0" width="170" height="170" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <circle cx="586" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="580" y="42" font-size="16" fill="#FFCC00">🛡️</text>
    <text x="566" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF">Verified delivery</text>
    <text x="566" y="110" font-size="11" fill="rgba(255,255,255,0.65)">Proof-of-play logs with immutable attribution.</text>
  </g>

  <!-- Bottom Showcase Callout -->
  <g transform="translate(40, 870)">
    <rect width="720" height="180" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="40" y="60" font-family="'Lato', sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">One Operating Room For Every Moving Screen</text>
    <text x="40" y="90" font-size="13" fill="rgba(255,255,255,0.7)">Real-time route visibility across Victoria Island, Lekki &amp; Ikeja corridors.</text>
    <rect x="40" y="115" width="140" height="34" rx="17" fill="#FFCC00"/>
    <text x="64" y="136" font-size="12" font-weight="800" fill="#030416">Explore Live Fleet →</text>
  </g>
</svg>
`;

// ----------------------------------------------------
// 2. AGENCY: WIREFRAME & DESIGN
// ----------------------------------------------------
const agencyWire = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="1000" fill="#FFFFFF"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="800" height="60" fill="#FAFAFA" stroke="#E5E7EB"/>
  <rect x="40" y="20" width="140" height="20" rx="4" fill="#9CA3AF"/>
  <rect x="620" y="16" width="140" height="28" rx="6" fill="#1F2937"/>

  <!-- Page Title -->
  <rect x="40" y="85" width="220" height="24" rx="4" fill="#1F2937"/>
  <rect x="40" y="118" width="340" height="12" rx="3" fill="#9CA3AF"/>

  <!-- Top Metric Cards -->
  <g transform="translate(40, 150)">
    <rect x="0" y="0" width="226" height="90" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="16" y="16" width="80" height="10" rx="2" fill="#9CA3AF"/>
    <rect x="16" y="36" width="100" height="22" rx="4" fill="#1F2937"/>

    <rect x="246" y="0" width="226" height="90" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="262" y="16" width="80" height="10" rx="2" fill="#9CA3AF"/>
    <rect x="262" y="36" width="100" height="22" rx="4" fill="#1F2937"/>

    <rect x="492" y="0" width="228" height="90" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="508" y="16" width="80" height="10" rx="2" fill="#9CA3AF"/>
    <rect x="508" y="36" width="100" height="22" rx="4" fill="#1F2937"/>
  </g>

  <!-- Interactive Map Wireframe Box -->
  <rect x="40" y="260" width="720" height="340" rx="10" fill="#F3F4F6" stroke="#E5E7EB"/>
  <text x="260" y="380" font-size="14" font-weight="bold" fill="#6B7280" font-family="monospace">[ LAGOS TRANSIT MAP WIREFRAME ]</text>
  <rect x="280" y="400" width="240" height="30" rx="4" fill="#E5E7EB" stroke="#9CA3AF" stroke-dasharray="4,4"/>
  <text x="320" y="420" font-size="11" fill="#6B7280">Zone Polygon Geofence</text>

  <!-- Campaign Table Wireframe -->
  <g transform="translate(40, 630)">
    <rect width="720" height="320" rx="10" fill="#FFFFFF" stroke="#E5E7EB"/>
    <rect x="0" y="0" width="720" height="40" fill="#F9FAFB" stroke="#E5E7EB"/>
    <text x="20" y="25" font-size="11" font-weight="bold" fill="#374151">CAMPAIGN NAME</text>
    <text x="220" y="25" font-size="11" font-weight="bold" fill="#374151">TARGET REGION</text>
    <text x="420" y="25" font-size="11" font-weight="bold" fill="#374151">STATUS</text>
    <text x="600" y="25" font-size="11" font-weight="bold" fill="#374151">IMPRESSIONS</text>
    
    <!-- Row 1 -->
    <rect x="20" y="60" width="120" height="12" rx="2" fill="#9CA3AF"/>
    <rect x="220" y="60" width="100" height="12" rx="2" fill="#9CA3AF"/>
    <rect x="420" y="56" width="60" height="20" rx="10" fill="#D1D5DB"/>
    <rect x="600" y="60" width="70" height="12" rx="2" fill="#9CA3AF"/>

    <!-- Row 2 -->
    <rect x="20" y="110" width="120" height="12" rx="2" fill="#9CA3AF"/>
    <rect x="220" y="110" width="100" height="12" rx="2" fill="#9CA3AF"/>
    <rect x="420" y="106" width="60" height="20" rx="10" fill="#D1D5DB"/>
    <rect x="600" y="110" width="70" height="12" rx="2" fill="#9CA3AF"/>
  </g>
</svg>
`;

const agencyDesign = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="1000" fill="#060B18"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="800" height="64" fill="#0B1640" stroke="rgba(255,255,255,0.1)"/>
  <text x="40" y="40" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFFFFF">Sp<tspan fill="#FFCC00">•</tspan>tlyte Agency</text>
  <rect x="620" y="16" width="140" height="32" rx="16" fill="#FFCC00"/>
  <text x="645" y="37" font-size="12" font-weight="800" fill="#030416">+ New Campaign</text>

  <!-- Page Title -->
  <text x="40" y="105" font-family="'Lato', sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">Campaign Command Center</text>
  <text x="40" y="128" font-size="13" fill="rgba(255,255,255,0.65)">Manage live fleet targeting, budget pacing, and impressions across Lagos.</text>

  <!-- Top Metric Cards -->
  <g transform="translate(40, 150)">
    <rect x="0" y="0" width="226" height="96" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <text x="16" y="28" font-size="11" font-weight="700" fill="#FFCC00" letter-spacing="1">ACTIVE VEHICLES</text>
    <text x="16" y="66" font-family="'Lato', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF">482 <tspan font-size="12" font-weight="normal" fill="rgba(255,255,255,0.5)">online</tspan></text>

    <rect x="246" y="0" width="226" height="96" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <text x="262" y="28" font-size="11" font-weight="700" fill="#FFCC00" letter-spacing="1">DELIVERED REACH</text>
    <text x="262" y="66" font-family="'Lato', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF">2.4M <tspan font-size="12" font-weight="normal" fill="rgba(255,255,255,0.5)">imps</tspan></text>

    <rect x="492" y="0" width="228" height="96" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <text x="508" y="28" font-size="11" font-weight="700" fill="#FFCC00" letter-spacing="1">CORRIDOR UPTIME</text>
    <text x="508" y="66" font-family="'Lato', sans-serif" font-weight="900" font-size="28" fill="#22C55E">99.2%</text>
  </g>

  <!-- Interactive Map Styled Box -->
  <g transform="translate(40, 270)">
    <rect width="720" height="330" rx="14" fill="#0C1527" stroke="rgba(255,255,255,0.12)"/>
    <!-- Map grid lines -->
    <path d="M0,60 L720,60 M0,120 L720,120 M0,180 L720,180 M0,240 L720,240" stroke="rgba(255,255,255,0.04)"/>
    <path d="M120,0 L120,330 M240,0 L240,330 M360,0 L360,330 M480,0 L480,330 M600,0 L600,330" stroke="rgba(255,255,255,0.04)"/>
    
    <!-- Geofenced Zone Polygon -->
    <polygon points="180,100 380,80 440,220 220,260" fill="rgba(255,204,0,0.15)" stroke="#FFCC00" stroke-width="2"/>
    <text x="240" y="160" font-family="'Lato', sans-serif" font-weight="900" font-size="14" fill="#FFCC00">VICTORIA ISLAND / LEKKI 1</text>
    <text x="260" y="180" font-size="11" fill="rgba(255,255,255,0.8)">184 Connected Screens</text>

    <!-- Pins -->
    <circle cx="210" cy="120" r="5" fill="#22C55E"/>
    <circle cx="340" cy="110" r="5" fill="#22C55E"/>
    <circle cx="410" cy="200" r="5" fill="#22C55E"/>
    <circle cx="280" cy="230" r="5" fill="#22C55E"/>
  </g>

  <!-- Styled Campaign Table -->
  <g transform="translate(40, 630)">
    <rect width="720" height="320" rx="14" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <rect width="720" height="44" rx="14" fill="#141E34"/>
    <text x="24" y="27" font-size="11" font-weight="800" fill="#FFCC00" letter-spacing="1">CAMPAIGN</text>
    <text x="240" y="27" font-size="11" font-weight="800" fill="#FFCC00" letter-spacing="1">REGION</text>
    <text x="440" y="27" font-size="11" font-weight="800" fill="#FFCC00" letter-spacing="1">STATUS</text>
    <text x="600" y="27" font-size="11" font-weight="800" fill="#FFCC00" letter-spacing="1">PACING</text>

    <!-- Row 1 -->
    <text x="24" y="80" font-weight="700" font-size="13" fill="#FFFFFF">Fintech Q3 Island Launch</text>
    <text x="240" y="80" font-size="12" fill="rgba(255,255,255,0.7)">VI / Ikoyi / Lekki</text>
    <rect x="440" y="66" width="70" height="22" rx="11" fill="rgba(34,197,94,0.15)"/>
    <text x="456" y="81" font-size="10" font-weight="bold" fill="#22C55E">ACTIVE</text>
    <text x="600" y="80" font-size="13" font-weight="bold" fill="#FFFFFF">98.4%</text>

    <!-- Row 2 -->
    <text x="24" y="140" font-weight="700" font-size="13" fill="#FFFFFF">Telco 5G Corridor Blitz</text>
    <text x="240" y="140" font-size="12" fill="rgba(255,255,255,0.7)">Ikeja / Maryland</text>
    <rect x="440" y="126" width="70" height="22" rx="11" fill="rgba(34,197,94,0.15)"/>
    <text x="456" y="141" font-size="10" font-weight="bold" fill="#22C55E">ACTIVE</text>
    <text x="600" y="140" font-size="13" font-weight="bold" fill="#FFFFFF">100.0%</text>
  </g>
</svg>
`;

// ----------------------------------------------------
// 3. HOW IT WORKS: WIREFRAME & DESIGN
// ----------------------------------------------------
const howItWorksWire = `
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="900" fill="#FFFFFF"/>
  <rect x="40" y="40" width="160" height="18" rx="3" fill="#9CA3AF"/>
  <rect x="40" y="70" width="340" height="28" rx="4" fill="#1F2937"/>
  <rect x="40" y="110" width="500" height="12" rx="3" fill="#9CA3AF"/>

  <!-- Process Curve Wire -->
  <path d="M80,240 C280,180 520,320 720,240" fill="none" stroke="#D1D5DB" stroke-width="4" stroke-dasharray="8,8"/>

  <!-- 3 Nodes -->
  <g transform="translate(80, 180)">
    <circle cx="40" cy="60" r="30" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
    <text x="34" y="66" font-size="16" font-weight="bold" fill="#1F2937">01</text>
    <rect x="0" y="110" width="160" height="14" rx="3" fill="#1F2937"/>
    <rect x="0" y="132" width="140" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="0" y="145" width="120" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <g transform="translate(360, 250)">
    <circle cx="40" cy="60" r="30" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
    <text x="34" y="66" font-size="16" font-weight="bold" fill="#1F2937">02</text>
    <rect x="0" y="110" width="160" height="14" rx="3" fill="#1F2937"/>
    <rect x="0" y="132" width="140" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="0" y="145" width="120" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <g transform="translate(600, 180)">
    <circle cx="40" cy="60" r="30" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
    <text x="34" y="66" font-size="16" font-weight="bold" fill="#1F2937">03</text>
    <rect x="0" y="110" width="160" height="14" rx="3" fill="#1F2937"/>
    <rect x="0" y="132" width="140" height="8" rx="2" fill="#9CA3AF"/>
    <rect x="0" y="145" width="120" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <!-- Specs Box -->
  <rect x="40" y="520" width="720" height="320" rx="10" fill="#F9FAFB" stroke="#E5E7EB"/>
  <rect x="70" y="550" width="220" height="18" rx="3" fill="#1F2937"/>
  <rect x="70" y="580" width="400" height="10" rx="2" fill="#9CA3AF"/>
  <rect x="70" y="620" width="660" height="180" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
</svg>
`;

const howItWorksDesign = `
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="900" fill="#030416"/>
  
  <text x="40" y="55" font-size="11" font-weight="800" fill="#FFCC00" letter-spacing="1.4">SIMPLE OPERATING WORKFLOW</text>
  <text x="40" y="95" font-family="'Lato', sans-serif" font-weight="900" font-size="32" fill="#FFFFFF">How Spotlyte Works</text>
  <text x="40" y="125" font-size="14" fill="rgba(255,255,255,0.7)">From upload to uptime in three continuous operational phases.</text>

  <!-- Glowing Golden Transit Curve -->
  <path d="M80,260 C260,180 520,340 720,260" fill="none" stroke="#FFCC00" stroke-width="4"/>
  <path d="M80,260 C260,180 520,340 720,260" fill="none" stroke="rgba(255,204,0,0.3)" stroke-width="12"/>

  <!-- 3 Milestones -->
  <g transform="translate(60, 200)">
    <circle cx="40" cy="60" r="32" fill="#0B1640" stroke="#FFCC00" stroke-width="3"/>
    <text x="32" y="68" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFCC00">01</text>
    <text x="0" y="125" font-family="'Lato', sans-serif" font-weight="800" font-size="16" fill="#FFFFFF">Create Campaign</text>
    <text x="0" y="148" font-size="12" fill="rgba(255,255,255,0.65)" width="180">Upload asset creative, set dates, choose target geo-fence zones.</text>
  </g>

  <g transform="translate(340, 270)">
    <circle cx="40" cy="60" r="32" fill="#0B1640" stroke="#FFCC00" stroke-width="3"/>
    <text x="32" y="68" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFCC00">02</text>
    <text x="0" y="125" font-family="'Lato', sans-serif" font-weight="800" font-size="16" fill="#FFFFFF">Activate Fleet</text>
    <text x="0" y="148" font-size="12" fill="rgba(255,255,255,0.65)" width="180">Automated preflight checks approve assets onto licensed rooftop screens.</text>
  </g>

  <g transform="translate(580, 200)">
    <circle cx="40" cy="60" r="32" fill="#0B1640" stroke="#FFCC00" stroke-width="3"/>
    <text x="32" y="68" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFCC00">03</text>
    <text x="0" y="125" font-family="'Lato', sans-serif" font-weight="800" font-size="16" fill="#FFFFFF">Measure Delivery</text>
    <text x="0" y="148" font-size="12" fill="rgba(255,255,255,0.65)" width="180">GPS speed, dwell times &amp; pedestrian density verified in real-time.</text>
  </g>

  <!-- Technical Telemetry Spec Card -->
  <g transform="translate(40, 520)">
    <rect width="720" height="320" rx="14" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <text x="30" y="45" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#FFFFFF">Built For Practical Handoffs</text>
    <text x="30" y="70" font-size="13" fill="rgba(255,255,255,0.65)">Creative teams know what to upload, operations know what to activate, and advertisers know what was delivered.</text>

    <rect x="30" y="100" width="660" height="180" rx="10" fill="#030416" stroke="rgba(255,204,0,0.2)"/>
    <text x="50" y="140" font-size="12" font-family="monospace" fill="#FFCC00">&gt; Automated aspect ratio validation (3:1 and 16:9 ultra-wide)</text>
    <text x="50" y="170" font-size="12" font-family="monospace" fill="#22C55E">&gt; High-NIT daylight contrast simulation before approval</text>
    <text x="50" y="200" font-size="12" font-family="monospace" fill="#FFFFFF">&gt; Cellular heartbeats report online status every 5 seconds</text>
    <text x="50" y="230" font-size="12" font-family="monospace" fill="#9CA3AF">&gt; Immutable timestamped logs with geofence corridor attribution</text>
  </g>
</svg>
`;

// ----------------------------------------------------
// 4. DRIVERS: WIREFRAME & DESIGN
// ----------------------------------------------------
const driversWire = `
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="900" fill="#FFFFFF"/>
  <rect x="40" y="40" width="180" height="24" rx="4" fill="#1F2937"/>
  <rect x="40" y="74" width="300" height="12" rx="3" fill="#9CA3AF"/>

  <!-- Calculator Box Wire -->
  <rect x="40" y="120" width="720" height="280" rx="10" fill="#F9FAFB" stroke="#E5E7EB"/>
  <rect x="70" y="150" width="180" height="16" rx="3" fill="#1F2937"/>
  <rect x="70" y="190" width="300" height="10" rx="2" fill="#D1D5DB"/>
  <rect x="70" y="230" width="400" height="8" rx="4" fill="#9CA3AF"/>
  <circle cx="220" cy="234" r="10" fill="#1F2937"/>

  <!-- Driver Steps Wire -->
  <g transform="translate(40, 430)">
    <rect x="0" y="0" width="226" height="200" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="20" y="24" width="40" height="40" rx="6" fill="#D1D5DB"/>
    <rect x="20" y="80" width="120" height="14" rx="3" fill="#1F2937"/>
    <rect x="20" y="105" width="160" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="246" y="0" width="226" height="200" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="266" y="24" width="40" height="40" rx="6" fill="#D1D5DB"/>
    <rect x="266" y="80" width="120" height="14" rx="3" fill="#1F2937"/>
    <rect x="266" y="105" width="160" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="492" y="0" width="228" height="200" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="512" y="24" width="40" height="40" rx="6" fill="#D1D5DB"/>
    <rect x="512" y="80" width="120" height="14" rx="3" fill="#1F2937"/>
    <rect x="512" y="105" width="160" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <!-- Payout FAQ -->
  <rect x="40" y="660" width="720" height="180" rx="8" fill="#FAFAFA" stroke="#E5E7EB"/>
</svg>
`;

const driversDesign = `
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="800" height="900" fill="#060B18"/>
  
  <text x="40" y="55" font-family="'Lato', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF">Drive Your Brand Everywhere</text>
  <text x="40" y="85" font-size="14" fill="rgba(255,255,255,0.7)">The most powerful mobile advertising platform connecting drivers with world-class brands.</text>

  <!-- Earnings Calculator Card -->
  <g transform="translate(40, 120)">
    <rect width="720" height="280" rx="14" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <text x="40" y="45" font-family="'Lato', sans-serif" font-weight="800" font-size="16" fill="#FFCC00">MONTHLY DRIVER EARNINGS ESTIMATOR</text>
    <text x="40" y="110" font-family="'Lato', sans-serif" font-weight="900" font-size="44" fill="#22C55E">₦145,000 <tspan font-size="16" font-weight="normal" fill="rgba(255,255,255,0.6)">/ month avg.</tspan></text>
    <text x="40" y="150" font-size="13" fill="rgba(255,255,255,0.8)">Based on 8 hours daily drive time across Victoria Island &amp; Mainland corridors.</text>

    <!-- Slider Bar -->
    <rect x="40" y="190" width="640" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
    <rect x="40" y="190" width="420" height="8" rx="4" fill="#FFCC00"/>
    <circle cx="460" cy="194" r="14" fill="#FFCC00" stroke="#000" stroke-width="2"/>
    <text x="40" y="240" font-size="12" fill="rgba(255,255,255,0.5)">4 Hours Daily</text>
    <text x="600" y="240" font-size="12" fill="rgba(255,255,255,0.5)">12 Hours Daily</text>
  </g>

  <!-- 3 Driver Features -->
  <g transform="translate(40, 430)">
    <rect x="0" y="0" width="226" height="200" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="36" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="30" y="42" font-size="16" fill="#FFCC00">🚗</text>
    <text x="20" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#FFFFFF">Free Hardware Mount</text>
    <text x="20" y="115" font-size="12" fill="rgba(255,255,255,0.65)">Professional non-invasive vehicle mounting with zero damage to vehicle paint.</text>

    <rect x="246" y="0" width="226" height="200" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="282" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="276" y="42" font-size="16" fill="#FFCC00">💰</text>
    <text x="266" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#FFFFFF">Weekly Direct Payout</text>
    <text x="266" y="115" font-size="12" fill="rgba(255,255,255,0.65)">Guaranteed automatic bank transfers every Monday based on online screen hours.</text>

    <rect x="492" y="0" width="228" height="200" rx="12" fill="#0E1628" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="528" cy="36" r="18" fill="rgba(255,204,0,0.15)"/>
    <text x="522" y="42" font-size="16" fill="#FFCC00">📱</text>
    <text x="512" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#FFFFFF">Simple Mobile App</text>
    <text x="512" y="115" font-size="12" fill="rgba(255,255,255,0.65)">Track uptime and trip earnings seamlessly without any distracting notifications.</text>
  </g>

  <!-- Payout Trust Banner -->
  <g transform="translate(40, 660)">
    <rect width="720" height="190" rx="14" fill="#0B1640" stroke="rgba(255,255,255,0.1)"/>
    <text x="40" y="55" font-family="'Lato', sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">Empowering Local Taxi &amp; Rideshare Operators</text>
    <text x="40" y="85" font-size="13" fill="rgba(255,255,255,0.7)">Join hundreds of drivers earning recurring passive revenue across Lagos State.</text>
    <rect x="40" y="115" width="150" height="38" rx="19" fill="#FFCC00"/>
    <text x="68" y="139" font-size="12" font-weight="800" fill="#030416">Register As Driver →</text>
  </g>
</svg>
`;

// ----------------------------------------------------
// 5. ABOUT US (WIDE): WIREFRAME & DESIGN
// ----------------------------------------------------
const aboutWire = `
<svg width="1180" height="900" viewBox="0 0 1180 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="1180" height="900" fill="#FFFFFF"/>
  
  <!-- Nav -->
  <rect x="0" y="0" width="1180" height="60" fill="#FAFAFA" stroke="#E5E7EB"/>
  <rect x="60" y="20" width="100" height="20" rx="4" fill="#9CA3AF"/>
  <rect x="980" y="16" width="140" height="28" rx="6" fill="#1F2937"/>

  <!-- Hero Row -->
  <g transform="translate(60, 90)">
    <rect x="0" y="20" width="120" height="14" rx="2" fill="#9CA3AF"/>
    <rect x="0" y="50" width="480" height="32" rx="4" fill="#1F2937"/>
    <rect x="0" y="100" width="460" height="12" rx="3" fill="#9CA3AF"/>
    <rect x="0" y="120" width="380" height="12" rx="3" fill="#9CA3AF"/>

    <!-- Hero Image Placeholder -->
    <rect x="540" y="0" width="520" height="260" rx="10" fill="#F3F4F6" stroke="#D1D5DB"/>
    <text x="680" y="140" font-size="14" font-weight="bold" fill="#6B7280" font-family="monospace">[ ABOUT HERO PHOTO MOCKUP ]</text>
  </g>

  <!-- 4 Pillars Wireframe -->
  <g transform="translate(60, 390)">
    <rect x="0" y="0" width="250" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="20" y="20" width="30" height="30" rx="4" fill="#D1D5DB"/>
    <rect x="20" y="70" width="140" height="14" rx="3" fill="#1F2937"/>
    <rect x="20" y="95" width="190" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="270" y="0" width="250" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="290" y="20" width="30" height="30" rx="4" fill="#D1D5DB"/>
    <rect x="290" y="70" width="140" height="14" rx="3" fill="#1F2937"/>
    <rect x="290" y="95" width="190" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="540" y="0" width="250" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="560" y="20" width="30" height="30" rx="4" fill="#D1D5DB"/>
    <rect x="560" y="70" width="140" height="14" rx="3" fill="#1F2937"/>
    <rect x="560" y="95" width="190" height="8" rx="2" fill="#9CA3AF"/>

    <rect x="810" y="0" width="250" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="830" y="20" width="30" height="30" rx="4" fill="#D1D5DB"/>
    <rect x="830" y="70" width="140" height="14" rx="3" fill="#1F2937"/>
    <rect x="830" y="95" width="190" height="8" rx="2" fill="#9CA3AF"/>
  </g>

  <!-- Team / Method Wireframe -->
  <rect x="60" y="610" width="1060" height="240" rx="10" fill="#F3F4F6"/>
</svg>
`;

const aboutDesign = `
<svg width="1180" height="900" viewBox="0 0 1180 900" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', -apple-system, sans-serif">
  <rect width="1180" height="900" fill="#FFFFFF"/>
  
  <!-- Nav -->
  <rect x="0" y="0" width="1180" height="64" fill="#FFFFFF" stroke="#E7E2D9"/>
  <text x="60" y="40" font-family="'Lato', sans-serif" font-weight="900" font-size="18" fill="#030416">Sp<tspan fill="#FFCC00">•</tspan>tlyte</text>
  <rect x="980" y="16" width="140" height="32" rx="16" fill="#030416"/>
  <text x="1010" y="37" font-size="12" font-weight="700" fill="#FFFFFF">Get Started</text>

  <!-- Hero Section -->
  <g transform="translate(60, 90)">
    <text x="0" y="25" font-size="11" font-weight="800" fill="#A67C00" letter-spacing="1.4">OUR MISSION &amp; ORIGIN</text>
    <text x="0" y="65" font-family="'Lato', sans-serif" font-weight="900" font-size="34" fill="#030416">Outdoor Media That Moves With The City</text>
    <text x="0" y="105" font-size="14.5" fill="#4A5170" width="460">Spotlyte transforms everyday urban transit into high-definition digital outdoor advertising.</text>
    <text x="0" y="130" font-size="14.5" fill="#4A5170" width="460">Bridging the gap between static billboards and live programmatic precision.</text>

    <!-- Visual Card with Lagos Transit Graphic -->
    <g transform="translate(540, 0)">
      <rect width="520" height="260" rx="14" fill="#060B18" stroke="#E7E2D9"/>
      <rect x="30" y="30" width="460" height="130" rx="8" fill="#0B1640" stroke="#FFCC00" stroke-width="2"/>
      <text x="130" y="100" font-family="'Lato', sans-serif" font-weight="900" font-size="22" fill="#FFCC00">LAGOS METROPOLIS FLEET</text>
      <text x="170" y="125" font-size="13" fill="rgba(255,255,255,0.75)">400+ Active Taxi Roof Displays</text>
    </g>
  </g>

  <!-- 4 Pillars -->
  <g transform="translate(60, 390)">
    <rect x="0" y="0" width="250" height="200" rx="12" fill="#F5F4F0" stroke="#E7E2D9"/>
    <circle cx="36" cy="36" r="16" fill="#FFCC00"/>
    <text x="20" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#030416">Street-level Attention</text>
    <text x="20" y="115" font-size="12" fill="#4A5170">Meeting commuters, shoppers, and professionals directly along their daily paths.</text>

    <rect x="270" y="0" width="250" height="200" rx="12" fill="#F5F4F0" stroke="#E7E2D9"/>
    <circle cx="306" cy="36" r="16" fill="#FFCC00"/>
    <text x="290" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#030416">Zone-aware Coverage</text>
    <text x="290" y="115" font-size="12" fill="#4A5170">Dynamic geofenced corridor targeting tailored for Victoria Island, Lekki &amp; Ikeja.</text>

    <rect x="540" y="0" width="250" height="200" rx="12" fill="#F5F4F0" stroke="#E7E2D9"/>
    <circle cx="576" cy="36" r="16" fill="#FFCC00"/>
    <text x="560" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#030416">Measurable Delivery</text>
    <text x="560" y="115" font-size="12" fill="#4A5170">Real-time GPS telemetry readouts, dwell times, and verified impression logs.</text>

    <rect x="810" y="0" width="250" height="200" rx="12" fill="#F5F4F0" stroke="#E7E2D9"/>
    <circle cx="846" cy="36" r="16" fill="#FFCC00"/>
    <text x="830" y="85" font-family="'Lato', sans-serif" font-weight="800" font-size="15" fill="#030416">Operational Trust</text>
    <text x="830" y="115" font-size="12" fill="#4A5170">Rigorous hardware pre-flight testing and prompt automated driver payouts.</text>
  </g>

  <!-- Bottom Quote Banner -->
  <g transform="translate(60, 630)">
    <rect width="1060" height="210" rx="14" fill="#030416"/>
    <text x="50" y="60" font-family="'Lato', sans-serif" font-weight="900" font-size="24" fill="#FFCC00">&ldquo;We didn't just build an ad network; we built a city operating layer.&rdquo;</text>
    <text x="50" y="95" font-size="14" fill="rgba(255,255,255,0.7)">Spotlyte bridges the gap between hardware mobility and digital precision.</text>
    <text x="50" y="140" font-size="12" font-mono fill="#22C55E">ACTIVE IN NIGERIA &bull; 400+ VEHICLES &bull; 2.4M MONTHLY IMPRESSIONS</text>
  </g>
</svg>
`;

// Render all 5 main wireframes and styled versions
renderSvgToPng(homeWire, 'home_wire');
renderSvgToPng(homeDesign, 'home_design');

renderSvgToPng(agencyWire, 'agency_wire');
renderSvgToPng(agencyDesign, 'agency_design');

renderSvgToPng(howItWorksWire, 'how_it_works_wire');
renderSvgToPng(howItWorksDesign, 'how_it_works_design');

renderSvgToPng(driversWire, 'drivers_wire');
renderSvgToPng(driversDesign, 'drivers_design');

renderSvgToPng(aboutWire, 'about_wire');
renderSvgToPng(aboutDesign, 'about_design');

// Render mosaic tile images for the 9 sub-screens
const mosaicTitles = [
  'Sign Up',
  'Log In',
  'Agency Dashboard',
  'Onboarding',
  'Agency Profile',
  'Business Identity',
  'Campaign Preferences',
  'Review & Submit',
  'Almost Ready'
];

mosaicTitles.forEach((title, idx) => {
  const safeName = title.toLowerCase().replace(/[^a-z0-9]/g, '_');
  
  // Wireframe mosaic tile
  const wireSvg = `
  <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', sans-serif">
    <rect width="400" height="300" fill="#FFFFFF"/>
    <rect x="20" y="20" width="80" height="12" rx="2" fill="#9CA3AF"/>
    <rect x="20" y="44" width="180" height="18" rx="3" fill="#1F2937"/>
    <rect x="20" y="80" width="360" height="110" rx="6" fill="#F9FAFB" stroke="#E5E7EB"/>
    <rect x="40" y="105" width="320" height="24" rx="4" fill="#E5E7EB"/>
    <rect x="40" y="140" width="220" height="24" rx="4" fill="#E5E7EB"/>
    <rect x="20" y="210" width="140" height="36" rx="6" fill="#1F2937"/>
    <text x="180" y="232" font-size="10" font-family="monospace" fill="#9CA3AF">[ ${title} Wireframe ]</text>
  </svg>
  `;

  // Styled mosaic tile
  const designSvg = `
  <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" font-family="'Open Sans', sans-serif">
    <rect width="400" height="300" fill="#030416"/>
    <text x="24" y="32" font-size="10" font-weight="bold" fill="#FFCC00" letter-spacing="1">SPOTLYTE OS</text>
    <text x="24" y="60" font-family="'Lato', sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">${title}</text>
    <rect x="24" y="85" width="352" height="130" rx="10" fill="#0E1628" stroke="rgba(255,255,255,0.12)"/>
    <rect x="44" y="110" width="312" height="34" rx="6" fill="#030416" stroke="rgba(255,204,0,0.3)"/>
    <text x="56" y="132" font-size="11" fill="rgba(255,255,255,0.8)">Active verified session</text>
    <rect x="44" y="155" width="140" height="34" rx="17" fill="#FFCC00"/>
    <text x="75" y="176" font-size="12" font-weight="bold" fill="#030416">Continue →</text>
    <rect x="24" y="240" width="352" height="28" rx="6" fill="rgba(255,255,255,0.05)"/>
    <text x="36" y="258" font-size="10" fill="#22C55E">● Connected to Spotlyte Network</text>
  </svg>
  `;

  renderSvgToPng(wireSvg, `mosaic_${safeName}_wire`);
  renderSvgToPng(designSvg, `mosaic_${safeName}_design`);
});

console.log('All wireframe PNGs successfully generated!');
