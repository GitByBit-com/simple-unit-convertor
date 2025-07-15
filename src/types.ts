export type MassUnit = 'kg' | 'g' | 'pounds' | 'ounces';
export type LengthUnit = 'meters' | 'km' | 'miles' | 'feet' | 'inches';
export type Unit = MassUnit | LengthUnit;

export interface ConversionResult {
  value: number;
  unit: Unit;
  to: (targetUnit: Unit) => ConversionResult;
}

export enum MeasureKind {
  Mass = 'mass',
  Length = 'length',
}

export type BestKind = 'metric' | 'imperial';

export type Numeric = number;

export type MeasureEntry = {
  names: string[];
  symbols?: string[];
  ratio: Numeric;
  difference?: Numeric;
};

export type Measure = {
  kind: MeasureKind;
  units: MeasureEntry[];
};