
#!/usr/bin/env bash
set -e

DIR="/tmp/video_render"
rm -rf "$DIR"
mkdir -p "$DIR"

FLEET="public/spotlyte_taxi_fleet.jpg"
CREATIVE="public/spotlyte_taxi_creative.jpg"
OUT="public/spotlyte_walkthrough.mp4"

echo "Rendering Scene 1: Home Hero..."
# Scene 1: 0 - 3.5s
ffmpeg -y -f lavfi -i "color=c=0x0B1220:s=1280x800:d=3.5" -loop 1 -i "$CREATIVE" \
  -filter_complex "
    [1:v]scale=540:320[car];
    [0:v][car]overlay=680:120[bg1];
    [bg1]drawbox=x=0:y=0:w=1280:h=70:color=0x070B14@1:t=fill,
    drawtext=text='Sp*tlyte':fontcolor=white:fontsize=26:x=60:y=24,
    drawtext=text='Home':fontcolor=0xFBBF24:fontsize=14:x=560:y=28,
    drawtext=text='About':fontcolor=0x94A3B8:fontsize=14:x=630:y=28,
    drawtext=text='How it works':fontcolor=0x94A3B8:fontsize=14:x=700:y=28,
    drawtext=text='Agencies':fontcolor=0x94A3B8:fontsize=14:x=810:y=28,
    drawtext=text='Login':fontcolor=white:fontsize=13:x=965:y=28,
    drawbox=x=1035:y=18:w=95:h=34:color=0xFBBF24@1:t=fill,
    drawtext=text='Register':fontcolor=0x0B1220:fontsize=13:x=1055:y=28,
    drawtext=text='ADVERTISING . LAGOS':fontcolor=0xFBBF24:fontsize=11:x=60:y=130,
    drawtext=text='Spotlyte mobile digital':fontcolor=white:fontsize=42:x=60:y=175,
    drawtext=text='advertising built for':fontcolor=white:fontsize=42:x=60:y=225,
    drawtext=text='moving cities':fontcolor=0xFBBF24:fontsize=42:x=60:y=275,
    drawtext=text='Launch digital campaigns, follow live routes, and measure the':fontcolor=0x94A3B8:fontsize=16:x=60:y=335,
    drawtext=text='real attention your brand earns across Lagos State.':fontcolor=0x94A3B8:fontsize=16:x=60:y=365,
    drawbox=x=60:y=410:w=170:h=44:color=0xFBBF24@1:t=fill,
    drawtext=text='Start campaign ->':fontcolor=0x0B1220:fontsize=14:x=80:y=424,
    drawbox=x=60:y=500:w=270:h=230:color=0x131C2E@1:t=fill,
    drawtext=text='Moving screens':fontcolor=white:fontsize=18:x=80:y=540,
    drawtext=text='Taxi-top digital displays carry':fontcolor=0x94A3B8:fontsize=13:x=80:y=580,
    drawtext=text='your campaign through traffic.':fontcolor=0x94A3B8:fontsize=13:x=80:y=605,
    drawbox=x=360:y=500:w=270:h=230:color=0x131C2E@1:t=fill,
    drawtext=text='Route intelligence':fontcolor=white:fontsize=18:x=380:y=540,
    drawtext=text='Plan coverage by city zones':fontcolor=0x94A3B8:fontsize=13:x=380:y=580,
    drawtext=text='along high-value corridors.':fontcolor=0x94A3B8:fontsize=13:x=380:y=605,
    drawbox=x=660:y=500:w=270:h=230:color=0x131C2E@1:t=fill,
    drawtext=text='Live performance':fontcolor=white:fontsize=18:x=680:y=540,
    drawtext=text='Track impressions, active cars,':fontcolor=0x94A3B8:fontsize=13:x=680:y=580,
    drawtext=text='and pacing without delay.':fontcolor=0x94A3B8:fontsize=13:x=680:y=605,
    drawbox=x=960:y=500:w=270:h=230:color=0x131C2E@1:t=fill,
    drawtext=text='Verified delivery':fontcolor=white:fontsize=18:x=980:y=540,
    drawtext=text='Auditable proof of play':fontcolor=0x94A3B8:fontsize=13:x=980:y=580,
    drawtext=text='confirms ads are active.':fontcolor=0x94A3B8:fontsize=13:x=980:y=605
  " -t 3.5 -vcodec libx264 -pix_fmt yuv420p "$DIR/s1.mp4"

echo "Rendering Scene 2: Clicking How it works..."
# Scene 2: 3.0s
ffmpeg -y -f lavfi -i "color=c=0x0B1220:s=1280x800:d=3.0" \
  -filter_complex "
    drawbox=x=0:y=0:w=1280:h=70:color=0x070B14@1:t=fill,
    drawtext=text='Sp*tlyte':fontcolor=white:fontsize=26:x=60:y=24,
    drawtext=text='Home':fontcolor=0x94A3B8:fontsize=14:x=560:y=28,
    drawtext=text='About':fontcolor=0x94A3B8:fontsize=14:x=630:y=28,
    drawbox=x=690:y=18:w=105:h=34:color=0x1E293B@1:t=fill,
    drawtext=text='How it works':fontcolor=0xFBBF24:fontsize=14:x=700:y=28,
    drawtext=text='Agencies':fontcolor=0x94A3B8:fontsize=14:x=815:y=28,
    drawbox=x=1035:y=18:w=95:h=34:color=0xFBBF24@1:t=fill,
    drawtext=text='Register':fontcolor=0x0B1220:fontsize=13:x=1055:y=28,
    drawtext=text='WHY WE STARTED':fontcolor=0xFBBF24:fontsize=12:x=60:y=160,
    drawtext=text='Outdoor advertising needed':fontcolor=white:fontsize=46:x=60:y=210,
    drawtext=text='a live operating layer.':fontcolor=white:fontsize=46:x=60:y=265,
    drawtext=text='Spotlyte was created to give brands the city-scale presence of outdoor advertising':fontcolor=0x94A3B8:fontsize=16:x=60:y=330,
    drawtext=text='with responsiveness, visibility, and accountability modern teams expect.':fontcolor=0x94A3B8:fontsize=16:x=60:y=360,
    drawbox=x='if(lte(t,1.5), 300+t*280, 720)':y='if(lte(t,1.5), 350-t*200, 35)':w=12:h=18:color=white@1:t=fill
  " -t 3.0 -vcodec libx264 -pix_fmt yuv420p "$DIR/s2.mp4"

echo "Rendering Scene 3: How it Works & Fleet View..."
# Scene 3: 5.0s
ffmpeg -y -f lavfi -i "color=c=white:s=1280x800:d=5.0" -loop 1 -i "$FLEET" -loop 1 -i "$CREATIVE" \
  -filter_complex "
    [1:v]scale=550:270[fleet];
    [2:v]scale=550:270[creative];
    [0:v][fleet]overlay=670:110[bg1];
    [bg1][creative]overlay=60:440[bg2];
    [bg2]drawbox=x=0:y=0:w=1280:h=70:color=white@1:t=fill,
    drawbox=x=0:y=70:w=1280:h=1:color=0xE2E8F0@1:t=fill,
    drawtext=text='Sp*tlyte':fontcolor=0x0F172A:fontsize=26:x=60:y=24,
    drawtext=text='Home':fontcolor=0x64748B:fontsize=14:x=560:y=28,
    drawtext=text='About':fontcolor=0x64748B:fontsize=14:x=630:y=28,
    drawtext=text='How it works':fontcolor=0x0F172A:fontsize=14:x=700:y=28,
    drawtext=text='Agencies':fontcolor=0x64748B:fontsize=14:x=815:y=28,
    drawbox=x=1035:y=18:w=95:h=34:color=0x0C1527@1:t=fill,
    drawtext=text='Register':fontcolor=white:fontsize=13:x=1055:y=28,
    drawbox=x=60:y=120:w=36:h=36:color=black@1:t=fill,
    drawtext=text='Fleet coverage view':fontcolor=0x0F172A:fontsize=28:x=60:y=190,
    drawtext=text='Route and zone views help teams understand where campaigns are':fontcolor=0x64748B:fontsize=15:x=60:y=230,
    drawtext=text='active, which vehicles are online, and where visibility is concentrated.':fontcolor=0x64748B:fontsize=15:x=60:y=255,
    drawbox=x=670:y=450:w=36:h=36:color=black@1:t=fill,
    drawtext=text='Creative and launch workflow':fontcolor=0x0F172A:fontsize=28:x=670:y=520,
    drawtext=text='Campaign setup keeps assets, timing, approvals, and delivery status':fontcolor=0x64748B:fontsize=15:x=670:y=560,
    drawtext=text='connected so teams can move faster without losing control.':fontcolor=0x64748B:fontsize=15:x=670:y=585
  " -t 5.0 -vcodec libx264 -pix_fmt yuv420p "$DIR/s3.mp4"

echo "Rendering Scene 4: From Upload to Uptime Route Animation..."
# Scene 4: 3.5s
ffmpeg -y -f lavfi -i "color=c=0x0A0F1D:s=1280x800:d=3.5" \
  -filter_complex "
    drawbox=x=0:y=0:w=1280:h=70:color=0x070B14@1:t=fill,
    drawtext=text='Sp*tlyte':fontcolor=white:fontsize=26:x=60:y=24,
    drawtext=text='How Spotlyte works':fontcolor=white:fontsize=42:x=60:y=160,
    drawtext=text='from upload to uptime.':fontcolor=0xFBBF24:fontsize=42:x=60:y=210,
    drawtext=text='Spotlyte connects advertisers, driver partners, and digital screens':fontcolor=0x94A3B8:fontsize=16:x=60:y=265,
    drawtext=text='in one route-aware campaign workflow.':fontcolor=0x94A3B8:fontsize=16:x=60:y=295,
    drawbox=x=640:y=110:w=580:h=320:color=0x141C2E@1:t=fill,
    drawtext=text='ROUTE TELEMETRY DISPATCH':fontcolor=0xFBBF24:fontsize=12:x=670:y=140,
    drawbox=x='680+t*100':y='260-sin(t*2)*80':w=40:h=22:color=0xFBBF24@1:t=fill,
    drawtext=text='TAXI':fontcolor=0x0B1220:fontsize=10:x='686+t*100':y='266-sin(t*2)*80',
    drawbox=x=60:y=480:w=360:h=220:color=0x141C2E@1:t=fill,
    drawtext=text='01 Create campaign':fontcolor=white:fontsize=20:x=80:y=520,
    drawtext=text='Upload creatives and set route priorities.':fontcolor=0x94A3B8:fontsize=14:x=80:y=560,
    drawbox=x=460:y=480:w=360:h=220:color=0x141C2E@1:t=fill,
    drawtext=text='02 Activate the fleet':fontcolor=white:fontsize=20:x=480:y=520,
    drawtext=text='Screens matched to active Lagos routes.':fontcolor=0x94A3B8:fontsize=14:x=480:y=560,
    drawbox=x=860:y=480:w=360:h=220:color=0x141C2E@1:t=fill,
    drawtext=text='03 Measure delivery':fontcolor=white:fontsize=20:x=880:y=520,
    drawtext=text='Real-time telemetry and verified impressions.':fontcolor=0x94A3B8:fontsize=14:x=880:y=560
  " -t 3.5 -vcodec libx264 -pix_fmt yuv420p "$DIR/s4.mp4"

echo "Rendering Scene 5: Register Modal..."
# Scene 5: 3.5s
ffmpeg -y -f lavfi -i "color=c=0x060B18:s=1280x800:d=3.5" \
  -filter_complex "
    drawbox=x=180:y=90:w=920:h=620:color=white@1:t=fill,
    drawtext=text='Create Account':fontcolor=0x0F172A:fontsize=32:x=240:y=150,
    drawtext=text='Start launching moving outdoor campaigns today.':fontcolor=0x64748B:fontsize=14:x=240:y=190,
    drawtext=text='Work Email':fontcolor=0x475569:fontsize=12:x=240:y=240,
    drawbox=x=240:y=255:w=360:h=46:color=0xF8FAFC@1:t=fill,
    drawtext=text='media@spotlyte.com':fontcolor=0x0F172A:fontsize=14:x=255:y=270,
    drawtext=text='Password':fontcolor=0x475569:fontsize=12:x=240:y=320,
    drawbox=x=240:y=335:w=360:h=46:color=0xF8FAFC@1:t=fill,
    drawtext=text='............':fontcolor=0x0F172A:fontsize=18:x=255:y=350,
    drawbox=x=240:y=405:w=360:h=46:color=0xFBBF24@1:t=fill,
    drawtext=text='Sign up':fontcolor=0x0A0F1D:fontsize=15:x=390:y=420,
    drawtext=text='OR CONTINUE WITH':fontcolor=0x94A3B8:fontsize=11:x=370:y=475,
    drawbox=x=240:y=500:w=360:h=46:color=white@1:t=fill,
    drawtext=text='Sign up with Google':fontcolor=0x0F172A:fontsize=14:x=350:y=515,
    drawbox=x=660:y=90:w=440:h=620:color=0x0C1322@1:t=fill,
    drawbox=x=840:y=220:w=80:h=80:color=0xFBBF24@1:t=fill,
    drawtext=text='Drive Your Brand':fontcolor=white:fontsize=28:x=770:y=340,
    drawtext=text='Everywhere':fontcolor=0xFBBF24:fontsize=28:x=810:y=380,
    drawtext=text='The most powerful mobile advertising platform':fontcolor=0x94A3B8:fontsize=14:x=725:y=430,
    drawtext=text='connecting drivers with world-class brands.':fontcolor=0x94A3B8:fontsize=14:x=740:y=455,
    drawbox=x='if(lte(t,1.8), 240+t*100, 420)':y='if(lte(t,1.8), 300+t*115, 515)':w=12:h=18:color=black@1:t=fill
  " -t 3.5 -vcodec libx264 -pix_fmt yuv420p "$DIR/s5.mp4"

echo "Concatenating scenes..."
cat <<EOF > "$DIR/concat.txt"
file '$DIR/s1.mp4'
file '$DIR/s2.mp4'
file '$DIR/s3.mp4'
file '$DIR/s4.mp4'
file '$DIR/s5.mp4'
EOF

ffmpeg -y -f concat -safe 0 -i "$DIR/concat.txt" -c copy "$OUT"

echo "SUCCESS! Created $OUT"
ls -lh "$OUT"
