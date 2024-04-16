import { ChangeEvent, ReactNode } from 'react';

export interface IItem {
  r030: number;
  cc: string;
  exchangedate: string;
}

export interface ISelect {
  name: string;
  items: IExchangeRateItem[];
  onChange?: () => void;
}

export interface IInput {
  type: string;
  placeholder?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
  color?: 'light' | 'blue';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

export interface IHistory {
  id: string;
  date: string;
  inner_currency: string;
  inner_currency_name: string;
  outer_currency: string;
  outer_currency_name: string;
}

export interface ISupport {
  iconName: string;
  phone: string;
  desc: string;
}
export interface IExchangeRateItem {
  r030: number;
  cc: string;
  rate: number;
  exchangedate: string;
}

export interface IExchangeData {
  data: IExchangeRateItem[];
}
