import * as React from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { Loading } from '../Loading';

type ScreenShotButtonProps = {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
};

function ScreenShotButton({
  screenshot,
  onScreenshotTook,
}: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = React.useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTook(base64Image);

    setIsTakingScreenShot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}

export { ScreenShotButton };
