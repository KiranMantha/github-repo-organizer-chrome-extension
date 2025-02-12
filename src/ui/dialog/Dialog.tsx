import { ForwardedRef, forwardRef, MutableRefObject, ReactNode } from 'preact/compat';
import { useRef } from 'preact/hooks';
import { Button } from '../button';
import { StyledDialog } from './Dialog.styles';

const Dialog = forwardRef(
  (
    {
      title,
      children,
      footer,
      stickyFooter,
      onClose
    }: {
      title: string;
      children?: ReactNode | ReactNode[];
      footer?: ReactNode;
      stickyFooter?: boolean;
      onClose?: () => void;
    },
    ref: ForwardedRef<HTMLDialogElement>
  ) => {
    const internalRef = (ref as MutableRefObject<HTMLDialogElement | null>) || useRef<HTMLDialogElement | null>(null);

    const closeDialog = () => {
      internalRef.current?.close();
      onClose?.();
    };

    return (
      <StyledDialog ref={internalRef}>
        <h4 className="m-0 dialog-title">
          {title}
          <Button className="f-right" onClick={closeDialog}>
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              fill="currentColor"
            >
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </Button>
        </h4>
        {children}
        {footer ? <div className={`dialog-footer ${stickyFooter ? 'footer-sticky' : ''}`}>{footer}</div> : null}
      </StyledDialog>
    );
  }
);

Dialog.displayName = 'Dialog';

export { Dialog };
