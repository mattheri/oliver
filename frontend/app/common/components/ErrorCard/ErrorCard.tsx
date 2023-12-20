import { useEffect, useRef, useState } from "react";
import Toast from "../Toast/Toast";
import If from "../If/If";

type Props = {
  heading?: string;
  error?: string;
  link?: {
    to: string;
    label: string;
  };
  autoDismiss?: number;
};

export default function ErrorCard({
  heading,
  error,
  link,
  autoDismiss = 5000,
}: Props) {
  const initialRenderState = !!error;
  const [show, setShow] = useState(initialRenderState);
  let ref = useRef<NodeJS.Timeout>(null);

  const dismiss = () => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref = { current: null };
    }

    setShow(false);
  };

  useEffect(() => {
    if (initialRenderState && autoDismiss) {
      ref = { current: setTimeout(dismiss, autoDismiss) };

      return () => {
        if (ref.current) {
          clearTimeout(ref.current);
          ref = { current: null };
        }

        setShow(initialRenderState);
      };
    }
  }, [initialRenderState, autoDismiss]);

  return (
    <If condition={show}>
      <If.Then>
        <Toast intent="error" displayClose closeToast={dismiss}>
          <If condition={!!heading}>
            <If.Then>
              <Toast.Heading>{heading}</Toast.Heading>
            </If.Then>
          </If>
          {error}
          <If condition={!!link}>
            <If.Then>
              <Toast.Link to={link?.to!}>{link?.label}</Toast.Link>
            </If.Then>
          </If>
        </Toast>
      </If.Then>
    </If>
  );
}
