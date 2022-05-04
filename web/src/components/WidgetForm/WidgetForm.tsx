import * as React from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypesStep } from './Steps/FeedBackTypeStep';
import { FeedBackContentStep } from './Steps/FeedBackContentStep';
import { FeedBackSuccessStep } from './Steps/FeedBackSuccessStep';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão pensando',
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
  const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(
    null
  );
  const [feedbackSent, setFeedbackSent] = React.useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto focus:outline-none">
      {feedbackSent ? (
        <FeedBackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypesStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedBackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a
          className="underline underline-offset-2 ml-1"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}

export { WidgetForm, feedbackTypes, type FeedbackType };
