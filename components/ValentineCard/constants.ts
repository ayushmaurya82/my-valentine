export const DEFAULT_NAME = "";

export const YES_ALERT_MESSAGE = "Hey! thank you for choosing me as your valentine! 💕";

export const YES_BUTTON_LABEL = "Yes";
export const NO_BUTTON_LABEL = "No";

export const INITIAL_NO_BUTTON_POSITION = { left: 100, top: 0 };

export const NO_BUTTON_MOVE_OFFSET = { width: 100, height: 50 };

/** When new random position equals last position, add this so the button still moves */
export const POSITION_OFFSET_IF_SAME = { left: 40, top: 30 };

/** Treat positions within this many px as "same" (floats rarely match exactly) */
export const SAME_POSITION_THRESHOLD = 2;

/** Min ms between moves when cursor chases (so No button keeps escaping) */
export const MOVE_THROTTLE_MS = 80;

/** Single teddy (smili) on top of the card, white BG */
export const TEDDY_IMAGE_URL = "/teddy-valentine1.png";

/** Two teddies shown when user clicks Yes, white BG */
export const TEDDY_IMAGE_URL_YES = "/teddy-valentine12.png";

export const INSTAGRAM_HANDLE = "buildtoscript";
