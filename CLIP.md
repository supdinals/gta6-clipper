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

## Revision v3 — the uploaded version

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

1080×1920, 30 fps, H.264 + AAC 48 kHz, 49.1 s total — a YouTube Short.
