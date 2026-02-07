import { useCallback, useRef, useState } from "react";
import {
  ButtonsRow,
  Card,
  Footer,
  HappyMessage,
  LottieFullscreenOverlay,
  Message,
  Name,
  NoButton,
  NoButtonWrapper,
  Page,
  PageWrapper,
  TeddyImage,
  TeddyImageWrapper,
  YesButton,
} from "./styles";
import {
  DEFAULT_NAME,
  INSTAGRAM_HANDLE,
  INITIAL_NO_BUTTON_POSITION,
  MOVE_THROTTLE_MS,
  NO_BUTTON_MOVE_OFFSET,
  NO_BUTTON_LABEL,
  POSITION_OFFSET_IF_SAME,
  SAME_POSITION_THRESHOLD,
  TEDDY_IMAGE_URL,
  TEDDY_IMAGE_URL_YES,
  YES_ALERT_MESSAGE,
  YES_BUTTON_LABEL,
} from "./constants";
import { type DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

const LOTTIE_URL =
  "https://ik.imagekit.io/ayushprivate/lottie/pFz8XmQjS7.lottie";

interface ValentineCardProps {
  name?: string;
}

function overlapsRect(
  left: number,
  top: number,
  width: number,
  height: number,
  rLeft: number,
  rTop: number,
  rWidth: number,
  rHeight: number,
) {
  return (
    left < rLeft + rWidth &&
    left + width > rLeft &&
    top < rTop + rHeight &&
    top + height > rTop
  );
}

const ValentineCard = ({ name = DEFAULT_NAME }: ValentineCardProps) => {
  const [showLottie, setShowLottie] = useState(false);
  const [noPosition, setNoPosition] = useState(INITIAL_NO_BUTTON_POSITION);
  const [yesClicked, setYesClicked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonsRowRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef(0);
  const dotLottieRef = useRef<DotLottie | null>(null);

  const handleLottieComplete = useCallback(() => {
    setShowLottie(false);
  }, []);

  const dotLottieRefCallback = useCallback(
    (instance: DotLottie | null) => {
      if (dotLottieRef.current) {
        dotLottieRef.current.removeEventListener(
          "complete" as Parameters<DotLottie["addEventListener"]>[0],
          handleLottieComplete,
        );
      }
      dotLottieRef.current = instance;
      if (instance) {
        instance.addEventListener(
          "complete" as Parameters<DotLottie["addEventListener"]>[0],
          handleLottieComplete,
        );
      }
    },
    [handleLottieComplete],
  );

  const moveNoButton = useCallback(() => {
    const cardEl = cardRef.current;
    const buttonsRowEl = buttonsRowRef.current;
    if (!cardEl || !buttonsRowEl) return;

    const now = Date.now();
    if (now - lastMoveTimeRef.current < MOVE_THROTTLE_MS) return;
    lastMoveTimeRef.current = now;

    const cardRect = cardEl.getBoundingClientRect();
    const rowRect = buttonsRowEl.getBoundingClientRect();

    const rowLeft = rowRect.left - cardRect.left;
    const rowTop = rowRect.top - cardRect.top;
    const rowWidth = rowRect.width;
    const rowHeight = rowRect.height;

    const maxX = Math.max(0, cardRect.width - NO_BUTTON_MOVE_OFFSET.width);
    const maxY = Math.max(0, cardRect.height - NO_BUTTON_MOVE_OFFSET.height);

    let newLeft = Math.random() * maxX;
    let newTop = Math.random() * maxY;

    const noWidth = NO_BUTTON_MOVE_OFFSET.width;
    const noHeight = NO_BUTTON_MOVE_OFFSET.height;

    let tries = 0;
    const maxTries = 25;
    while (
      overlapsRect(
        newLeft,
        newTop,
        noWidth,
        noHeight,
        rowLeft,
        rowTop,
        rowWidth,
        rowHeight,
      ) &&
      tries < maxTries
    ) {
      newLeft = Math.random() * maxX;
      newTop = Math.random() * maxY;
      tries++;
    }
    if (tries === maxTries) {
      newTop = Math.max(0, rowTop - noHeight - 8);
      newLeft = Math.min(maxX, Math.max(0, newLeft));
    }

    const isSamePosition =
      Math.abs(newLeft - noPosition.left) < SAME_POSITION_THRESHOLD &&
      Math.abs(newTop - noPosition.top) < SAME_POSITION_THRESHOLD;
    if (isSamePosition) {
      newLeft = Math.min(
        maxX,
        Math.max(0, newLeft + POSITION_OFFSET_IF_SAME.left),
      );
      newTop = Math.min(
        maxY,
        Math.max(0, newTop + POSITION_OFFSET_IF_SAME.top),
      );
      if (
        overlapsRect(
          newLeft,
          newTop,
          noWidth,
          noHeight,
          rowLeft,
          rowTop,
          rowWidth,
          rowHeight,
        )
      ) {
        newTop = Math.max(0, rowTop - noHeight - 8);
      }
    }

    setNoPosition({ left: newLeft, top: newTop });
  }, [noPosition.left, noPosition.top]);

  const handleYesClicked = useCallback(() => {
    setYesClicked(true);
    setShowLottie(true);
  }, [yesClicked]);

  const currentYear = new Date().getFullYear();  

  return (
    <PageWrapper>
    <Page>
      <Card ref={cardRef}>
        <TeddyImageWrapper>
          <TeddyImage
            src={yesClicked ? TEDDY_IMAGE_URL_YES : TEDDY_IMAGE_URL}
            alt={yesClicked ? "Two cute teddies" : "Cute teddy"}
            width={120}
            height={120}
          />
        </TeddyImageWrapper>
        {!yesClicked && (
          <>
            <Message>
              <Name>{name && `${name},`}</Name> will you be my valentine?
            </Message>
            <ButtonsRow ref={buttonsRowRef}>
              <YesButton onClick={handleYesClicked}>
                {YES_BUTTON_LABEL}
              </YesButton>
            </ButtonsRow>

            <NoButtonWrapper
              $left={noPosition.left}
              $top={noPosition.top}
              onMouseEnter={moveNoButton}
              onMouseMove={moveNoButton}
              onTouchStart={moveNoButton}
              onTouchMove={moveNoButton}
            >
              <NoButton>{NO_BUTTON_LABEL}</NoButton>
            </NoButtonWrapper>
          </>
        )}

        {yesClicked && (
          <HappyMessage>
            <Message> {YES_ALERT_MESSAGE} </Message>
          </HappyMessage>
        )}

        {showLottie && (
          <LottieFullscreenOverlay>
            <DotLottieReact
              src={LOTTIE_URL}
              autoplay
              loop={false}
              dotLottieRefCallback={dotLottieRefCallback}
              style={{ width: "100%", height: "100%" }}
              renderConfig={{ autoResize: true }}
            />
          </LottieFullscreenOverlay>
        )}
      </Card>
    </Page>
    <Footer>
      © {currentYear} Your Valentine .{" "}
      <a
       href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
       target="_blank"
       rel="noopener noreferer"
      >
        @{INSTAGRAM_HANDLE}
      </a>
    </Footer>
    </PageWrapper>
  );
};

export default ValentineCard;
