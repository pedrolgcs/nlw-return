import * as React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../CloseButton';
import { ScreenShotButton } from '../../ScreenShotButton';
import { FeedbackType, feedbackTypes } from '../WidgetForm';

type FeedBackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};

function FeedBackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedBackContentStepProps) {
  const [screenshot, setScreenshot] = React.useState<string | null>(null);
  const [comment, setComment] = React.useState('');

  const feedbackInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ comment, screenshot });
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackInfo.image.source}
            alt={feedbackInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-6 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-x-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}

export { FeedBackContentStep };
