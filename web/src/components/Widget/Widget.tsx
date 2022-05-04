import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { WidgetForm } from '../WidgetForm';

function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="h-12 flex items-center bg-brand-500 text-white rounded-full px-3 group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export { Widget };
