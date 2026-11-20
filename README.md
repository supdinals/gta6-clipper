# Kai Cenat FOUND BIGFOOT in GTA 6?! — a make.fun gta6-clipper-01 entry

This repo is an entry for the make.fun bounty **gta6-clipper-01** ("Clip GTA 6
for the most YouTube views", $500, 20 places, places decided by the entry
video's YouTube views at the deadline).

The entry itself is a 49-second vertical YouTube Short. `VIDEO.json` names
the video; `main.ts` is the small program the grader runs to read it.

## The clip

Kai Cenat, nine and a half hours into his first GTA 6 marathon, is hunting
"Mr. Mangrove" — the skunk ape, GTA 6's Bigfoot — through a dark swamp when
something moves in the trees. He screams "I FOUND HIM!", the party gives
chase, and Kai loops "he said don't shoot him!" while the hunter announces
another victim. The clip closes with a full-screen pitch: make clips like
this with AI and earn money on make.fun.

Full creative notes (source timestamps, hook, pitch wording, SFX) live in
[CLIP.md](CLIP.md).

## How it was made

Made end to end by an AI agent in one session, with ffmpeg 8.1 and yt-dlp:

1. **Moment hunt.** Searched the web for what was already going viral from
   Kai's stream, then scanned the Part 1 VOD's caption track
   (video `VZqAPdUvqnQ`) for scream/laughter density to rank candidate
   windows. The Bigfoot chase won on reaction strength and quotability.
2. **Pull.** Downloaded just the needed VOD section at 1080p with
   `yt-dlp --download-sections` (9:47:15–9:48:40), and verified the moment
   on a 480p pull first: frames, facecam position, transcript lines.
3. **Cut.** One ffmpeg pass: trim 9:47:33–9:48:13, stack layout (facecam
   crop on top, centre-cropped gameplay below), a gamma/saturation lift
   for the night scene, burned-in English speech subtitles (faster-whisper,
   hand-checked), and one centred opening hook — "Kai found Big Foot in
   GTA VI" in Noto Sans Display Black, 0:00–0:02.8. (Earlier drafts carried
   three emphasis caption cards; Soup's frame-by-frame review cut them for
   this single hook — see CLIP.md.)
4. **Pitch card.** A second ffmpeg pass rendered a 9-second 1080×1920 card
   with the make.fun pitch in big text, plus one vine-boom SFX hit mixed
   against silence and level-checked with `astats` (peak −0.5 dB).
5. **Join & verify.** Concatenated the two parts, then checked the result:
   ffprobe specs (1080×1920, 30 fps, 49.1 s) and extracted frames at the
   hook, the chase, the cliffhanger and the pitch card to confirm the text
   is legible and inside the frame.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `VIDEO.json` to `out/VIDEO.json`. Node 22, standard library
only, no network.

## License

MIT — see [LICENSE](LICENSE). The clip's footage belongs to its respective
owners (Kai Cenat's stream, Rockstar Games' GTA VI); this repo contains no
video, only the pointer to it and the notes on how the clip was cut.
