// Final imagery for the frames that were empty drop-slots in the design
// reference. Put the file in public/assets/ and map the slot id to its path,
// e.g. 'work-card-1': '/assets/work/engage-x.webp'.
// Slots without an entry render an empty placeholder frame.
export const IMAGE_SLOTS: Record<string, string> = {
  // Mobile home, "what's up" section
  'home-about-1': '/assets/shiva.png',
  'home-about-2': '/assets/workplace.png',
};
