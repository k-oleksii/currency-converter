import { FC } from 'react';
import { IconArrow } from './IconArrow';
import { IconArrows } from './IconArrows';
import { IconCabinet } from './IconCabinet';
import { IconCalendar } from './IconCalendar';
import { IconCall } from './IconCall';
import { IconChevronDown } from './IconChevronDown';
import { IconFb } from './IconFb';
import { IconInst } from './IconInst';
import { IconPhone } from './IconPhone';
import { IconTw } from './IconTw';
import { IconYb } from './IconYb';

interface IIcons {
  [key: string]: FC;
}

export const icons: IIcons = {
  cabinet: IconCabinet,
  fb: IconFb,
  inst: IconInst,
  tw: IconTw,
  yb: IconYb,
  call: IconCall,
  phone: IconPhone,
  arrows: IconArrows,
  calendar: IconCalendar,
  chevronDown: IconChevronDown,
  arrow: IconArrow,
};
