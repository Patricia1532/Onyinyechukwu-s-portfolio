
import os
import subprocess
import base64

def get_base64_image(path):
    if os.path.exists(path):
        with open(path, 'rb') as f:
            return f"data:image/jpeg;base64,{base64.b64encode(f.read()).decode('utf-8')}"
    return ""

fleet_b64 = get_base64_image('/app/applet/public/spotlyte_taxi_fleet.jpg')
creative_b64 = get_base64_image('/app/applet/public/spotlyte_taxi_creative.jpg')

# SVG 1: Home Landing Page Hero & Cards (0:00 - 0:04)
svg1 = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="#0C1322"/>
  
  <!-- Navbar -->
  <rect width="1280" height="70" fill="#0A0F1D"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#1E293B" stroke-width="1"/>
  
  <text x="60" y="44" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">Sp<tspan fill="#FBBF24">•</tspan>tlyte</text>
  
  <text x="560" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#FFFFFF">Home</text>
  <text x="620" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">About</text>
  <text x="680" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">How it works</text>
  <text x="780" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">Agencies</text>
  <text x="860" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">More ▾</text>
  
  <rect x="940" y="20" width="80" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
  <text x="962" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Login</text>
  
  <rect x="1035" y="20" width="95" height="34" rx="17" fill="#FBBF24"/>
  <text x="1055" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0A0F1D">Register</text>

  <!-- Hero Content -->
  <text x="60" y="140" font-family="monospace" font-size="11" font-weight="700" fill="#FBBF24" letter-spacing="2">ADVERTISING · LAGOS</text>
  
  <text x="60" y="195" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">Spotlyte mobile digital</text>
  <text x="60" y="245" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">advertising built for</text>
  <text x="60" y="295" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#FBBF24">moving cities</text>

  <text x="60" y="340" font-family="Arial, sans-serif" font-size="16" fill="#94A3B8">Launch digital campaigns, follow live routes, and measure the</text>
  <text x="60" y="365" font-family="Arial, sans-serif" font-size="16" fill="#94A3B8">real attention your brand earns across Lagos State.</text>

  <!-- CTAs -->
  <rect x="60" y="405" width="160" height="44" rx="22" fill="#FBBF24"/>
  <text x="85" y="432" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#0A0F1D">Start campaign →</text>

  <rect x="235" y="405" width="140" height="44" rx="22" fill="none" stroke="#334155" stroke-width="1"/>
  <text x="265" y="432" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0">See fleet flow</text>

  <!-- Hero Image on Right -->
  <g transform="translate(680, 110)">
    <clipPath id="heroClip"><rect width="540" height="340" rx="24"/></clipPath>
    <image href="{creative_b64}" width="540" height="340" preserveAspectRatio="xMidYMid slice" clip-path="url(#heroClip)"/>
    <rect width="540" height="340" rx="24" fill="none" stroke="#334155" stroke-width="1"/>
  </g>

  <!-- 4 Feature Cards at Bottom -->
  <g transform="translate(60, 500)">
    <!-- Card 1 -->
    <rect x="0" y="0" width="270" height="240" rx="18" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <rect x="24" y="24" width="40" height="40" rx="10" fill="#0F172A"/>
    <text x="35" y="50" font-family="Arial" font-size="18" fill="#FBBF24">🚗</text>
    <text x="24" y="100" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Moving screens</text>
    <text x="24" y="130" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">Taxi-top displays carry your campaign</text>
    <text x="24" y="150" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">through commuter corridors &amp; retail hubs.</text>

    <!-- Card 2 -->
    <rect x="295" y="0" width="270" height="240" rx="18" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <rect x="319" y="24" width="40" height="40" rx="10" fill="#0F172A"/>
    <text x="330" y="50" font-family="Arial" font-size="18" fill="#FBBF24">📍</text>
    <text x="319" y="100" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Route intelligence</text>
    <text x="319" y="130" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">Plan coverage by city zones and keep</text>
    <text x="319" y="150" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">visibility focused where audiences move.</text>

    <!-- Card 3 -->
    <rect x="590" y="0" width="270" height="240" rx="18" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <rect x="614" y="24" width="40" height="40" rx="10" fill="#0F172A"/>
    <text x="625" y="50" font-family="Arial" font-size="18" fill="#FBBF24">📊</text>
    <text x="614" y="100" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Live performance</text>
    <text x="614" y="130" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">See impressions, active vehicles, and</text>
    <text x="614" y="150" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">speed pacing without waiting for reports.</text>

    <!-- Card 4 -->
    <rect x="885" y="0" width="270" height="240" rx="18" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <rect x="909" y="24" width="40" height="40" rx="10" fill="#0F172A"/>
    <text x="920" y="50" font-family="Arial" font-size="18" fill="#FBBF24">🛡️</text>
    <text x="909" y="100" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Verified delivery</text>
    <text x="909" y="130" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">Auditable proof of play confirms that</text>
    <text x="909" y="150" font-family="Arial, sans-serif" font-size="13" fill="#94A3B8">creative is live, moving, and accountable.</text>
  </g>
</svg>'''

# SVG 2: Hovering on "How it works" in navbar (0:04 - 0:06)
svg2 = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="#0C1322"/>
  
  <!-- Navbar -->
  <rect width="1280" height="70" fill="#0A0F1D"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#1E293B" stroke-width="1"/>
  
  <text x="60" y="44" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">Sp<tspan fill="#FBBF24">•</tspan>tlyte</text>
  
  <text x="560" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">Home</text>
  <text x="620" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">About</text>
  
  <!-- How it works active/hovered -->
  <rect x="672" y="24" width="95" height="28" rx="6" fill="#1E293B"/>
  <text x="680" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FBBF24">How it works</text>
  
  <text x="785" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">Agencies</text>
  <text x="860" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">More ▾</text>
  
  <rect x="940" y="20" width="80" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
  <text x="962" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Login</text>
  
  <rect x="1035" y="20" width="95" height="34" rx="17" fill="#FBBF24"/>
  <text x="1055" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0A0F1D">Register</text>

  <!-- Mouse Pointer over How it works -->
  <g transform="translate(710, 42)">
    <polygon points="0,0 16,12 8,13 12,22 8,24 4,14 0,17" fill="#000000" stroke="#FFFFFF" stroke-width="1.5"/>
  </g>

  <!-- Transition Content -->
  <text x="60" y="160" font-family="monospace" font-size="12" font-weight="700" fill="#FBBF24" letter-spacing="2">WHY WE STARTED</text>
  <text x="60" y="220" font-family="Arial, sans-serif" font-size="48" font-weight="900" fill="#FFFFFF">Outdoor advertising needed</text>
  <text x="60" y="275" font-family="Arial, sans-serif" font-size="48" font-weight="900" fill="#FFFFFF">a live operating layer.</text>
  <text x="60" y="325" font-family="Arial, sans-serif" font-size="17" fill="#94A3B8">Spotlyte was created to give brands the city-scale presence of outdoor advertising with</text>
  <text x="60" y="350" font-family="Arial, sans-serif" font-size="17" fill="#94A3B8">the responsiveness, visibility, and accountability modern teams expect from digital campaigns.</text>
</svg>'''

# SVG 3: How it Works page (Fleet coverage & Creative workflow) (0:07 - 0:12) - EXACT MATCH TO IMAGE 2!
svg3 = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="#FFFFFF"/>
  
  <!-- Navbar -->
  <rect width="1280" height="70" fill="#FFFFFF"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#F1F5F9" stroke-width="1"/>
  
  <text x="60" y="44" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#0F172A">Sp<tspan fill="#FBBF24">•</tspan>tlyte</text>
  
  <text x="560" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">Home</text>
  <text x="620" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">About</text>
  <text x="680" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#0F172A">How it works</text>
  <text x="785" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">Agencies</text>
  <text x="860" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">More ▾</text>
  
  <rect x="940" y="20" width="80" height="34" rx="17" fill="none" stroke="#CBD5E1" stroke-width="1"/>
  <text x="962" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#0F172A">Login</text>
  
  <rect x="1035" y="20" width="95" height="34" rx="17" fill="#0C1527"/>
  <text x="1055" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Register</text>

  <!-- Row 1: Fleet Coverage View -->
  <g transform="translate(60, 110)">
    <!-- Left text -->
    <rect x="0" y="10" width="36" height="36" rx="8" fill="#000000"/>
    <text x="10" y="34" font-family="Arial" font-size="16" fill="#FFFFFF">⏱</text>
    
    <text x="0" y="85" font-family="Arial, sans-serif" font-size="28" font-weight="800" fill="#0F172A">Fleet coverage view</text>
    <text x="0" y="120" font-family="Arial, sans-serif" font-size="15" fill="#64748B">Route and zone views help teams understand where campaigns are</text>
    <text x="0" y="145" font-family="Arial, sans-serif" font-size="15" fill="#64748B">active, which vehicles are online, and where visibility is concentrated.</text>
    
    <!-- Right Image -->
    <g transform="translate(560, 0)">
      <clipPath id="fClip"><rect width="580" height="280" rx="16"/></clipPath>
      <image href="{fleet_b64}" width="580" height="280" preserveAspectRatio="xMidYMid slice" clip-path="url(#fClip)"/>
      <rect width="580" height="280" rx="16" fill="none" stroke="#E2E8F0" stroke-width="1"/>
    </g>
  </g>

  <!-- Row 2: Creative and launch workflow -->
  <g transform="translate(60, 440)">
    <!-- Left Image -->
    <g transform="translate(0, 0)">
      <clipPath id="cClip"><rect width="540" height="280" rx="16"/></clipPath>
      <image href="{creative_b64}" width="540" height="280" preserveAspectRatio="xMidYMid slice" clip-path="url(#cClip)"/>
      <rect width="540" height="280" rx="16" fill="none" stroke="#E2E8F0" stroke-width="1"/>
    </g>

    <!-- Right Text -->
    <g transform="translate(600, 40)">
      <rect x="0" y="0" width="36" height="36" rx="8" fill="#000000"/>
      <text x="10" y="24" font-family="Arial" font-size="16" fill="#FFFFFF">✓</text>
      
      <text x="0" y="75" font-family="Arial, sans-serif" font-size="28" font-weight="800" fill="#0F172A">Creative and launch workflow</text>
      <text x="0" y="110" font-family="Arial, sans-serif" font-size="15" fill="#64748B">Campaign setup keeps assets, timing, approvals, and delivery status</text>
      <text x="0" y="135" font-family="Arial, sans-serif" font-size="15" fill="#64748B">connected so teams can move faster without losing control.</text>
    </g>
  </g>
</svg>'''

# SVG 4: From Upload to Uptime Route Flow (0:13 - 0:16)
svg4 = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="#0A0F1D"/>
  
  <!-- Navbar -->
  <rect width="1280" height="70" fill="#0A0F1D"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#1E293B" stroke-width="1"/>
  
  <text x="60" y="44" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">Sp<tspan fill="#FBBF24">•</tspan>tlyte</text>
  <text x="560" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">Home</text>
  <text x="620" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">About</text>
  <text x="680" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FBBF24">How it works</text>
  <text x="785" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">Agencies</text>
  <text x="860" y="42" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#94A3B8">More ▾</text>
  
  <rect x="940" y="20" width="80" height="34" rx="17" fill="none" stroke="#475569" stroke-width="1"/>
  <text x="962" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Login</text>
  
  <rect x="1035" y="20" width="95" height="34" rx="17" fill="#FBBF24"/>
  <text x="1055" y="42" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0A0F1D">Register</text>

  <!-- Left: How Spotlyte Works -->
  <text x="60" y="160" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">How Spotlyte works</text>
  <text x="60" y="215" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#FBBF24">from upload to uptime.</text>
  
  <text x="60" y="265" font-family="Arial, sans-serif" font-size="16" fill="#94A3B8">Spotlyte connects advertisers, driver partners, digital taxi-top screens,</text>
  <text x="60" y="290" font-family="Arial, sans-serif" font-size="16" fill="#94A3B8">and performance reporting in one route-aware campaign workflow.</text>

  <rect x="60" y="335" width="160" height="44" rx="22" fill="#FBBF24"/>
  <text x="85" y="362" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#0A0F1D">Start campaign ↗</text>

  <!-- Right: Route map with curved path -->
  <g transform="translate(620, 120)">
    <rect width="580" height="320" rx="24" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    
    <!-- Grid -->
    <path d="M 0 80 H 580 M 0 160 H 580 M 0 240 H 580 M 145 0 V 320 M 290 0 V 320 M 435 0 V 320" stroke="#1E293B" stroke-width="1" stroke-dasharray="4 4"/>
    
    <!-- Smooth Route Curve -->
    <path d="M 60 260 C 180 260, 160 80, 300 80 C 440 80, 420 220, 520 220" fill="none" stroke="#FBBF24" stroke-width="8" stroke-dasharray="14 10" stroke-linecap="round"/>
    
    <!-- Nodes on Route -->
    <circle cx="160" cy="180" r="16" fill="#FBBF24"/>
    <text x="145" y="220" font-family="Arial" font-size="12" font-weight="700" fill="#FFFFFF">Creative</text>

    <circle cx="300" cy="80" r="16" fill="#FBBF24"/>
    <text x="275" y="60" font-family="Arial" font-size="12" font-weight="700" fill="#FFFFFF">Approval</text>

    <circle cx="430" cy="160" r="16" fill="#FBBF24"/>
    <text x="415" y="195" font-family="Arial" font-size="12" font-weight="700" fill="#FFFFFF">Fleet</text>

    <circle cx="520" cy="220" r="16" fill="#FBBF24"/>
    <text x="500" y="255" font-family="Arial" font-size="12" font-weight="700" fill="#FFFFFF">Report</text>
    
    <!-- Taxi Badge Icon on Route -->
    <rect x="50" y="235" width="55" height="30" rx="8" fill="#FBBF24"/>
    <text x="68" y="256" font-family="Arial" font-size="16">🚕</text>
  </g>

  <!-- 3 Step Cards at Bottom -->
  <g transform="translate(60, 500)">
    <rect x="0" y="0" width="360" height="220" rx="20" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <text x="30" y="50" font-family="monospace" font-size="28" font-weight="900" fill="#FBBF24">01</text>
    <text x="30" y="90" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">Create campaign</text>
    <text x="30" y="125" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">Upload creative, set campaign dates, choose</text>
    <text x="30" y="148" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">coverage priorities, and submit work for approval.</text>

    <rect x="400" y="0" width="360" height="220" rx="20" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <text x="430" y="50" font-family="monospace" font-size="28" font-weight="900" fill="#FBBF24">02</text>
    <text x="430" y="90" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">Activate the fleet</text>
    <text x="430" y="125" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">Approved screens are matched to campaign routes</text>
    <text x="430" y="148" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">and tracked while vehicles move through Lagos.</text>

    <rect x="800" y="0" width="360" height="220" rx="20" fill="#141C2E" stroke="#1E293B" stroke-width="1"/>
    <text x="830" y="50" font-family="monospace" font-size="28" font-weight="900" fill="#FBBF24">03</text>
    <text x="830" y="90" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">Measure delivery</text>
    <text x="830" y="125" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">The dashboard tracks route activity, uptime, and</text>
    <text x="830" y="148" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8">impressions speed-pacing into an auditable report.</text>
  </g>
</svg>'''

# SVG 5: Register Modal / Flow (0:17 - 0:20)
svg5 = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="#060B18"/>
  
  <!-- Split Sign up Card Modal -->
  <g transform="translate(180, 80)">
    <rect width="920" height="640" rx="28" fill="#FFFFFF" filter="drop-shadow(0 25px 50px rgba(0,0,0,0.5))"/>
    
    <!-- Left: Form -->
    <g transform="translate(60, 60)">
      <text x="0" y="40" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#0F172A">Create Account</text>
      <text x="0" y="70" font-family="Arial, sans-serif" font-size="14" fill="#64748B">Start launching moving outdoor campaigns today.</text>

      <!-- Input 1 -->
      <text x="0" y="120" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#475569">Work Email</text>
      <rect x="0" y="130" width="360" height="46" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
      <text x="16" y="158" font-family="Arial, sans-serif" font-size="14" fill="#0F172A">media@spotlyte.com</text>

      <!-- Input 2 -->
      <text x="0" y="205" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#475569">Password</text>
      <rect x="0" y="215" width="360" height="46" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
      <text x="16" y="243" font-family="Arial, sans-serif" font-size="16" fill="#0F172A">••••••••••••</text>

      <!-- Sign Up Button -->
      <rect x="0" y="290" width="360" height="48" rx="24" fill="#FBBF24"/>
      <text x="145" y="320" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#0A0F1D">Sign up</text>

      <text x="135" y="375" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#94A3B8">OR CONTINUE WITH</text>

      <!-- Google Button (Hovered / Clicked) -->
      <rect x="0" y="400" width="360" height="48" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="110" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#0F172A">Sign up with Google</text>
      
      <!-- Mouse Cursor on Google Button -->
      <g transform="translate(190, 430)">
        <polygon points="0,0 16,12 8,13 12,22 8,24 4,14 0,17" fill="#000000" stroke="#FFFFFF" stroke-width="1.5"/>
      </g>
    </g>

    <!-- Right: Dark Branded Banner -->
    <g transform="translate(480, 0)">
      <clipPath id="rightClip"><path d="M 0 0 H 412 Q 440 0 440 28 V 612 Q 440 640 412 640 H 0 Z"/></clipPath>
      <rect width="440" height="640" fill="#0C1322" clip-path="url(#rightClip)"/>
      
      <!-- Ambient Glow -->
      <circle cx="220" cy="300" r="180" fill="#FBBF24" opacity="0.08" clip-path="url(#rightClip)"/>

      <!-- Icon -->
      <g transform="translate(180, 160)">
        <rect width="80" height="80" rx="24" fill="#FBBF24"/>
        <text x="24" y="52" font-family="Arial" font-size="36">📢</text>
      </g>

      <text x="220" y="300" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">Drive Your Brand</text>
      <text x="220" y="340" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#FBBF24" text-anchor="middle">Everywhere</text>

      <text x="220" y="400" font-family="Arial, sans-serif" font-size="15" fill="#94A3B8" text-anchor="middle">The most powerful mobile outdoor advertising</text>
      <text x="220" y="425" font-family="Arial, sans-serif" font-size="15" fill="#94A3B8" text-anchor="middle">platform connecting drivers with world-class brands.</text>
    </g>
  </g>
</svg>'''

with open('/tmp/video_gen/s1.svg', 'w') as f: f.write(svg1)
with open('/tmp/video_gen/s2.svg', 'w') as f: f.write(svg2)
with open('/tmp/video_gen/s3.svg', 'w') as f: f.write(svg3)
with open('/tmp/video_gen/s4.svg', 'w') as f: f.write(svg4)
with open('/tmp/video_gen/s5.svg', 'w') as f: f.write(svg5)

print("SVG files generated successfully")
