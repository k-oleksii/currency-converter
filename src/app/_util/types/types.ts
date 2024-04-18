import { ReactNode } from 'react';

export interface IItem {
  r030: number;
  cc: string;
  exchangedate: string;
}

export interface ISelect {
  name: string;
  items: IExchangeRateItem[];
  handleFocus?: () => void;
  handleBlur?: () => void;
}

export interface IInput {
  type: string;
  placeholder?: string;
  name: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
}

export interface IButton {
  color?: 'light' | 'blue';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  onClick?: () => void;
}

export interface IHistory {
  from: {
    curr: string;
    curr_code: string;
  };
  to: {
    curr: string;
    curr_code: string;
  };
  id: string;
  date: string;
  removeHistory: (id: string) => void;
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
