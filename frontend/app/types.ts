export type Nullable<T> = T | null;

export type Maybe<T> = T | undefined;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Icon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export type IconElement = (props: Parameters<Icon>[0]) => JSX.Element;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
