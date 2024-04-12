import { ReactNode } from 'react';

export interface IItem {
  currency: string;
}

export interface ISelect {
  name: string;
  items: IItem[];
}

export interface IInput {
  type: string;
  placeholder?: string;
  name: string;
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
