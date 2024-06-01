import { ReactNode } from 'react';
// import {
//   MoreAction,
//   ToolbarMoreActions
// } from '#/components/ui/toolbar-more-actions';
import { Separator } from '../ui/separator';
import { Heading } from '../ui/heading';

interface HeadingProps {
  title: string;
  description?: string;
  actions?: ReactNode | ReactNode[];
  separator?: boolean;
  // moreActions?: MoreAction[];
  size?: 'md' | 'sm';
  className?: string;
}

export const TitleHeading: React.FC<HeadingProps> = ({
  title,
  description,
  actions,
  className,
  // moreActions = [],
  size = 'md',
  separator = true
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description || ''} size={size} />
        <div className="flex gap-1">
          {actions}
          {/* {moreActions.length > 0 && (
            <ToolbarMoreActions actions={moreActions} />
          )} */}
        </div>
      </div>
      {separator && <Separator className="my-4" />}
    </div>
  );
};
