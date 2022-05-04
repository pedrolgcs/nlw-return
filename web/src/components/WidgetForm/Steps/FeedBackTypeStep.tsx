import { feedbackTypes, FeedbackType } from '../WidgetForm';
import { CloseButton } from '../../CloseButton';

type FeedBackTypesStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

function FeedBackTypesStep({ onFeedbackTypeChanged }: FeedBackTypesStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-6 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}

export { FeedBackTypesStep };
