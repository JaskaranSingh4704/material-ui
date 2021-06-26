import { SimpleStyleFunction, spacing, PropsFor } from './Box';

export type SpacingProps = PropsFor<typeof spacing>;
export function createUnarySpacing<Spacing>(theme: { spacing: Spacing }): Spacing extends number
  ? (abs: number | string) => number | number
  : Spacing extends any[]
  ? <Index extends number>(abs: Index | string) => Spacing[Index] | string
  : Spacing extends (...args: unknown[]) => unknown
  ? Spacing
  : // warns in Dev
    () => undefined;

export const margin: SimpleStyleFunction<
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginX'
  | 'marginY'
>;

export type MarginProps = PropsFor<typeof margin>;

export const padding: SimpleStyleFunction<
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingX'
  | 'paddingY'
>;

export type PaddingProps = PropsFor<typeof padding>;