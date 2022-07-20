import { Dispatch, SetStateAction } from "react";

export interface IDeathsProps {
  country: string | null;
  countryInfo: IRecentStats[] | undefined;
}

export interface ICasesProps {
  country: string | null;
  countryInfo: IRecentStats[] | undefined;
}

export interface ICasesData {
  label: string;
  cases: number;
}

export interface IDeathsData {
  label: string;
  deaths: number;
}

export interface IContentProps {
  countryInfo: IRecentStats[] | undefined;
  country: string | null;
}

export interface IRecentStats {
  Confirmed: number;
  Deaths: number;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ISearchProps {
  countries: ICountries[];
  setCountry: Dispatch<SetStateAction<string | null>>;
  setCountryInfo: Dispatch<SetStateAction<IRecentStats[] | undefined>>;
  country: string | null;
  countryInfo: IRecentStats[] | undefined;
}

export interface ICountries {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface ICountry {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
}
