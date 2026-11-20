# Creative notes — "Kai Cenat FOUND BIGFOOT in GTA 6?!"

## Source

- Stream: Kai Cenat, "🌴PLAYING GTA 6 FOR THE FIRST TIME🌴" — his GTA VI
  marathon, started Nov 18, 2026, 8 PM ET, on Twitch and the Kai Cenat Live
  YouTube channel.
- VOD used: the YouTube replay of Part 1, video ID `VZqAPdUvqnQ`
  (11 h 35 m 55 s). The same broadcast is on Twitch as VOD 2932305259.
- Moment: VOD **9:47:33 – 9:48:13** (the "Mr. Mangrove" skunk-ape hunt).

## The moment

Deep in a night swamp mission, an NPC hunter has been tracking a creature he
calls Mr. Mangrove — GTA 6's skunk ape, its Bigfoot. Kai hears something in
the trees, screams "I FOUND HIM! He's over here!", and the whole party
sprints after it while Kai panics: "Don't lose him! … He said don't shoot
him! He said do NOT shoot him!" It ends on the NPC's line that the creature
has taken "another victim" — a natural cliffhanger.

Why this moment:

- It is the loudest, most quotable reaction cluster in the Part 1 VOD
  (found by scanning the VOD's caption track for scream/laughter density).
- "Bigfoot in GTA" is a legendary GTA myth (San Andreas era), so the hook
  lands with viewers who have never watched Kai.
- It is one self-contained beat: hear it → find it → chase it → cliffhanger.
  No story context needed.
- Kai's facecam reaction (frozen, mouth open) carries the top half of the
  stack layout for the whole clip.

## The cut

- 0:00–0:40 — the moment, stack layout: Kai's facecam on top
  (source rect x=10, y=428, w=390, h=225), gameplay below
  (centre crop 900×1080), night footage lifted with
  eq gamma 1.32 / brightness 0.05 / saturation 1.18 so the swamp reads on
  a phone screen.
- One hook only (v3, see the revision note below): **Kai found Big Foot
  in GTA VI**, centred on the frame, 0:00–0:02.8, in Noto Sans Display
  Black. Nothing else is overlaid on the moment except the speech
  subtitles.
- 0:40–0:49 — the pitch card (see below).

## The pitch (exact wording on screen)

Full-screen card, dark navy background, 9 seconds:

> MAKE CLIPS LIKE THIS
> WITH AI AND
> EARN MONEY ON
> **make.fun**
> make.fun/bounty/gta6-clipper-01

## SFX

One effect only: a vine-boom hit at the pitch card's first frame, mixed
against silence so it cannot be buried. Boosted to peak at −0.5 dB and
verified numerically with ffmpeg `astats` (the moment's own audio peaks at
~0 dB, RMS ≈ −15 dB, so no other effect would survive under Kai's voice —
an earlier job taught us that effects mixed quietly under a loud streamer
are simply inaudible).

## FINAL CUTS — 59 s moment + 1 s outro (2026-11-20 revision)

Soup's revision: the moment runs ~59 s and the pitch card is cut to
exactly 1.0 s (vine-boom still at its first frame, peak −0.58 dB).
Total ≤ 60.0 s on every final. The 50 s + 9 s builds above stay on disk
untouched.

### Draft 1 final — Bigfoot (`clip-draft1-final.mp4`)

- **59.955 s, 1080×1920, 54,420,894 bytes.** Moment 58.93 s + pitch 1.0 s.
- **New source range:** Part 1 VOD **9:47:15–9:48:14** (8 s more setup
  at the head; the cliffhanger reveal now holds ~4 s longer before the
  pitch).
- **Cue changes:** all 13 v4 cues shifted +8.00 s; one new cue from the
  added setup, verified with medium whisper: **2.46–5.36 "I heard it!"**
  (the line that starts the whole hunt). A cut-off "I" fragment at
  ~0:15 stays unsubtitled, and the NPC's "another victim" (~0:55) stays
  excluded — Kai-only as before.

### Draft 2 final — Broke (`clip-draft2-final.mp4`)

- **59.955 s, 1080×1920, 53,687,140 bytes.** Moment 58.93 s + pitch 1.0 s.
- **New source range:** Part 1 VOD **2:01:58–2:02:57** — extended at
  the END, not the head. (A head extension to 2:01:50 was rendered
  first and discarded: those 8 s are the black death screen, so the
  gameplay panel sat black under the hook. Noted so nobody retries it.)
- **Cue changes:** the original 13 cues are unchanged; the closing
  fragment "Bro, like—" is replaced by the full rant ending, verified
  with medium whisper: 49.10–52.60 "Bro, like, yo — this is racist,
  bro!" · 52.60–54.50 "Bro, come on, I'm not—" · 54.50–58.12 "Even
  doing anything to you, bro! / Why are you chasing me, though?" The
  clip now ends mid-fight on that question; the last ~0.8 s is NPC
  groans (non-verbal).

### Draft 3 final — Kidnap (`clip-draft3-final.mp4`)

- **59.955 s, 1080×1920, 65,864,336 bytes.** Moment 58.93 s + pitch 1.0 s.
- **MASKED (Soup's decision, 2026-11-20):** in this final file the
  n-word in the two "back of my car" cues is rendered **"n***a"** —
  the rest of each line is identical, and both cues are wrapped to two
  lines so nothing runs off-screen. The audio is untouched (masking is
  subtitle-only). **This on-disk final is the masked version**; the
  earlier verbatim render was overwritten.
- **New source range:** Part 1 VOD **2:03:25–2:04:24** — extended at
  the end: Kai finishes loading the second body and drives off with
  both of them in the truck bed.
- **Cue changes:** the original 13 cues are untouched (verbatim, per
  Soup's instruction). Two new cues from the added range, verified with
  medium whisper and the caption track: 50.18–51.28 "Get in there! Get
  in there now!" · 52.52–54.82 "All right? All right, / come on, come
  on, come on." The last ~4 s (54.8–58.9) has no speech — engine and
  road noise as he escapes.

## Draft 3 — "Kai kidnapped an NPC"

Third upload candidate (file `clip-draft3.mp4`, 59.1 s, 1080×1920),
same recipe as Draft 2. Note on sourcing: Kai's Part 2 and Part 3 VODs
have no caption tracks yet (checked 2026-11-20), so this draft comes
from Part 1 — the direct continuation of Draft 2's sequence, cut as its
own self-contained beat.

- **Moment:** Right after Draft 2's fight, Kai turns the tables: he
  chases the NPCs down, hoists them onto his shoulder one by one, and
  stuffs them into the back of his pickup — "We gonna put you in the
  back of my car!" — while his wanted level rises.
- **Source:** Part 1 VOD, 2:03:25–2:04:15.
- **Start hook (0:00–0:02.8):** "Kai kidnapped an NPC / in GTA VI"
- **Subtitles (13 cues, Kai-only):** Come here! Now you come here! /
  No, no, no, no! · Bring your ass! / Get your ass out of here! · Let me
  pick you up real quick! · Come on, come on, come on, come on! · Come
  on, open this motherfucker! · Yeah, yeah, yeah, yeah! · We gonna take
  you and your friend! · Hold on, come here. · Come here, come here,
  come here! · We gonna take you too, come here! · Okay, hurry up, hurry
  up, hurry up! · We gonna put you in the back of my car, nigga! · We
  gonna put you in the back of my car now, nigga!
  Verification notes: medium whisper garbled the overlapped shouting at
  0:00–0:19, so the first two cues and the "Yeah, yeah, yeah, yeah!" cue
  are worded from the VOD caption track (medium confirms their timing
  and shape); medium misheard "punch you in" for the caption track's
  "put you in the back of my car" — the caption wording wins. NPC lines
  in the fight exchange were excluded (Kai-only). Subtitles are faithful
  to Kai's actual speech, profanity and the n-word included (he says it
  twice, at 0:45 and 0:47) — mask before upload if that's a concern.
  **Update 2026-11-20: Soup decided to mask it. The FINAL cut (above)
  renders it "n***a"; this older 50 s file is unchanged and still
  carries the verbatim word (and those two long cues run off the
  screen edges in it — another reason to upload the final instead).**
- **YouTube title:** Kai Cenat KIDNAPPED an NPC in GTA 6?! 🚚 #GTA6 #Shorts
- **YouTube description:**

  Kai Cenat beats the NPC who jumped him, then carries him AND his
  friend to his pickup truck one by one. "We gonna put you in the back
  of my car!" 💀

  Made by my AI agent for a $500 bounty on make.fun, where you can earn
  money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  Play code: makefun-hoof-slate-laurel

  #GTA6 #GTAVI #KaiCenat #Kidnap #Shorts

## Draft 2 — "Kai went broke"

Second upload candidate (file `clip-draft2.mp4`, 59.1 s, 1080×1920),
same recipe as Draft 1 v4: stack layout, reframed gameplay crop with the
source's bottom caption strip cropped out, Kai-only seam subtitles
verified with faster-whisper medium against the VOD caption track, the
same pitch card at 0:50–0:59. One adaptation: this is bright daylight
footage, so the night-lift grade is replaced with a mild grade
(gamma 1.06) that doesn't blow out the scene.

- **Moment:** Kai dies, respawns at the marina, and discovers the game
  took his last $527 — "I'm broke as fuck!" — then a random NPC attacks
  him outside a yoga studio and Kai loses it: "This is racist, bro! I'm
  not doing nothing to you!"
- **Source:** Part 1 VOD, 2:01:58–2:02:48.
- **Start hook (0:00–0:02.8):** "Kai went broke / in GTA VI"
- **Subtitles (14 cues, Kai-only):** Yo, Bach. · Yo, why is this so hard,
  bro? · This is like real. · Bro, this is like really, I just lost— ·
  $527 fucking dollars! · I'm broke as fuck! · What are we doing here? ·
  Nah, bitch, I need some money, Sidekick! · Hold on now. Sidekick. ·
  What? Bro, relax, bro! · Bro, I'm not even doing anything to you! /
  Like, what are you talking about, bro? · This is racist, bro! / I'm not
  doing nothing to you! · Bro, Tim the Tatman, calm the fuck down! ·
  Bro, like—
  Two short NPC interjections ("Hey, come on", "Okay then / can you
  stop?") were excluded under the Kai-only rule; the remaining gaps are
  pauses and fight sounds. Subtitles are faithful to the audio,
  profanity included — it is Kai's actual speech.
- **YouTube title:** Kai Cenat Went BROKE in GTA 6?! 💸 #GTA6 #Shorts
- **YouTube description:**

  Kai Cenat dies, respawns, and finds out GTA 6 took his last $527 —
  then a random NPC attacks him for no reason and he completely loses
  it. 😭

  Made by my AI agent for a $500 bounty on make.fun, where you can earn
  money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  Play code: makefun-hoof-slate-laurel

  #GTA6 #GTAVI #KaiCenat #Broke #Shorts

## Revision v4 — the uploaded version

Soup's v4 pass over v3:

- **Duration extended to 59.1 s** (still under the 60 s Shorts limit):
  the moment now runs 0:00–0:50 — VOD 9:47:23–9:48:13 — adding the 10 s
  tension build before the scream (Kai frozen, listening, as the groaning
  starts). The pitch card is untouched at 0:50–0:59.
- **Baked-in source captions deleted by reframing** (Soup's correction:
  removed, not covered — no blur band, no bar). Kai's stream recording
  carries its own small caption line in the bottom strip of the source
  frame (NPC lines included). The gameplay crop no longer includes that
  strip at all: the crop window is now 783×940 from the top of the source
  frame (was 900×1080), re-scaled to fill the same 1080×1296 gameplay
  area — a slightly tighter, more zoomed framing with no distortion and
  nothing overlaid. Frame checks across the moment (including 0:19.5,
  where the NPC caption used to sit, and the 0:46.5 reveal) show no
  surviving baked-in caption text anywhere; the only readable captions
  in the clip are our Kai subtitles at the seam. (An earlier v4 render
  used a blur band; it was replaced by this crop at Soup's direction.)
- **Kai subtitles completed and re-verified with a bigger model.** The
  extended moment was re-transcribed with faster-whisper **medium**
  (no VAD, word timestamps; a large-v3 download stalled in this
  environment, medium completed) and cross-checked against the small
  model and the VOD caption track. The medium pass confirmed every v3 cue
  and its timings (within ~0.2 s), and confirmed the remaining gaps are
  non-verbal: the 0:00–0:15 setup is ambient sound and creature groans
  (the caption track shows only a cut-off "I" fragment), 0:21–0:23 is
  footsteps, and 0:43–0:50 holds only the NPC's "another victim" line —
  excluded under the Kai-only rule — plus ambient. One medium garble
  ("You know", 0:40) matched nothing in the caption track and was
  rejected. Final list: the same 13 Kai cues, shifted +10 s.

## Revision v3

Soup reviewed v2 frame by frame ("hampir sempurna") and asked for one
clean-up, which is the final uploaded cut:

- All three v1/v2 emphasis captions are **removed** ("KAI FOUND BIGFOOT
  IN GTA 6?!", "HE SAID DO NOT SHOOT HIM!!", "ANOTHER VICTIM?!").
- A single hook replaces them: the exact text **"Kai found Big Foot in
  GTA VI"**, set in **Noto Sans Display Black** (weight 900 — a different,
  heavier display font than the DejaVu Sans Bold used elsewhere), white
  with black outline over a soft dark box, centred horizontally and
  vertically on the 1080×1920 frame, shown only for 0:00–0:02.8.
- The pitch card is unchanged.
- Subtitles are **Kai-only** (Soup's addendum): the two in-game/NPC cues
  from v2 — "Get after him! We can catch him right now!" (0:08.56–0:10.78)
  and "Another victim." (0:36.06–0:37.42) — are removed. All 13 remaining
  cues are Kai's voice only. (The small caption text occasionally visible
  at the very bottom of the gameplay is part of Kai's original stream
  recording itself, not an added subtitle.)
- Subtitle position (Soup's addendum 2): moved from the bottom of the
  gameplay area up to the **seam between the facecam and the gameplay** —
  top-anchored at y≈644, directly under Kai, growing downward when a cue
  wraps to two lines.

## Subtitles (v2)

The uploaded version (v2) adds burned-in English sentence subtitles for all
speech in the moment (0:00–0:40), low-centre in the gameplay area: Kai's
"Oh shit! Hey! I found him! He's over here!", the NPC's "Get after him! We
can catch him right now!", Kai's "don't lose him" panic and the five
"he said don't shoot him!" repeats, and the closing "Another victim."
Transcribed locally with faster-whisper (small, word timestamps), then
hand-checked line by line against the VOD's caption track and the game's
own on-screen subtitles; shouted garbles were corrected from those sources
and one unverified whisper line was dropped rather than guessed. The pitch
card is unchanged from v1.

## Specs

1080×1920, 30 fps, H.264 + AAC 48 kHz, 59.1 s total (v4) — a YouTube Short.
