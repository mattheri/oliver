import type { Settings } from "react-slick";
import type {
  ReactNode,
  PropsWithRef,
  ForwardedRef,
  ElementType,
  MutableRefObject,
  DependencyList,
} from "react";

import { Children, forwardRef, useEffect, useRef } from "react";

import SlickSlider from "react-slick";

import SliderArrowNext from "./SliderArrowNext";
import SliderArrowPrevious from "./SliderArrowPrevious";
import SliderDotsContainer from "./SliderDotsContainer";
import SliderDot from "./SliderDot";

type Props = PropsWithRef<{
  slideAs?: ElementType;
  children: ReactNode;
  deps?: DependencyList;
}> &
  Omit<Settings, "slide">;

const Slider = forwardRef(
  (
    {
      children,
      dots = true,
      infinite = true,
      speed = 500,
      slidesToShow = 1,
      slidesToScroll = 1,
      nextArrow = <SliderArrowNext />,
      prevArrow = <SliderArrowPrevious />,
      appendDots = (dots) => <SliderDotsContainer>{dots}</SliderDotsContainer>,
      customPaging = () => <SliderDot />,
      slideAs: SlideAs = "article",
      deps = [],
      ...settings
    }: Props,
    ref: ForwardedRef<SlickSlider>,
  ) => {
    const sliderRef = useRef<any>(null);

    useEffect(() => {
      const activeRef =
        (ref as MutableRefObject<SlickSlider>)?.current || sliderRef.current;
      activeRef.slickGoTo(0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderRef, ref, ...deps]);

    return (
      <SlickSlider
        ref={ref || sliderRef}
        dots={dots}
        infinite={infinite}
        speed={speed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        nextArrow={nextArrow}
        prevArrow={prevArrow}
        customPaging={customPaging}
        appendDots={appendDots}
        {...settings}
      >
        {Children.map(children, (child) => (
          <SlideAs>{child}</SlideAs>
        ))}
      </SlickSlider>
    );
  },
);

export default Object.assign(Slider, {
  ArrowNext: SliderArrowNext,
  ArrowPrevious: SliderArrowPrevious,
  Dot: SliderDot,
  DotsContainer: SliderDotsContainer,
});
