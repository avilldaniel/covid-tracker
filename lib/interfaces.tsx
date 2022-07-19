import { Dispatch, SetStateAction } from "react";

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
