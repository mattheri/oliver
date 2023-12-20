import If from "../If/If";

type Props = {
  helperText?: string;
  id?: string;
};

export default function InputHelperText({ helperText, id }: Props) {
  const label = id ? `${id} helper text` : "helper text";
  const $id = id ? `${id}-helper-text` : "helper-text";

  return (
    <If condition={!!helperText}>
      <If.Then>
        <p className="text-sm text-gray-500 mt-2" id={$id} aria-label={label}>
          {helperText}
        </p>
      </If.Then>
    </If>
  );
}
