import {
  ForwardedRef,
  SelectHTMLAttributes,
  forwardRef,
  useMemo,
  useState,
} from "react";
import Dropdown, {
  DropdownProps,
  ItemOnClickHandler,
} from "../Dropdown/Dropdown";
import { useMediaQuery } from "usehooks-ts";
import { BREAKPOINTS } from "~/common/constants/theme";
import If from "../If/If";
import { twMerge } from "tailwind-merge";
import { button } from "../Button/Button.style";

type SelectItem = {
  label: string;
  value: string;
};

type Props = Omit<DropdownProps, "items"> & {
  items: SelectItem[];
} & Omit<
    SelectHTMLAttributes<HTMLInputElement | HTMLSelectElement>,
    "defaultValue"
  > & {
    defaultValue?: SelectItem;
  };

const Select = forwardRef<HTMLInputElement | HTMLSelectElement, Props>(
  function Select(
    { defaultValue, items, className, buttonIntent, buttonSize, ...props },
    ref,
  ) {
    const [currentValue, setCurrentValue] = useState(defaultValue || items[0]);
    const handleClick: ItemOnClickHandler = (item) => {
      setCurrentValue({
        label: item.label,
        value: item.value!,
      });
    };

    const selectItems = useMemo(
      () =>
        items.map(({ label, value }) => ({
          label,
          value,
          onClick: handleClick,
        })),
      [items],
    );

    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.LG - 1}px)`, {
      initializeWithValue: false,
      defaultValue: true,
    });

    return (
      <If condition={!!isMobile}>
        <If.Then>
          <select
            {...props}
            ref={ref as ForwardedRef<HTMLSelectElement>}
            className={twMerge(
              "select-reset bg-none",
              button({
                intent: buttonIntent ?? "primary",
                size: buttonSize ?? "md",
              }),
            )}
          >
            {items.map((item) => (
              <option
                key={item.value}
                value={item.value}
                className="bg-white text-gray-900"
              >
                {item.label}
              </option>
            ))}
          </select>
        </If.Then>
        <If.Else>
          <>
            <input
              type="hidden"
              value={currentValue.value}
              {...props}
              ref={ref as ForwardedRef<HTMLInputElement>}
            />
            <Dropdown label={currentValue.label} items={selectItems} />
          </>
        </If.Else>
      </If>
    );
  },
);

export default Select;
