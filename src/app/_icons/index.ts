import { FC } from 'react';
import { IconCabinet } from './IconCabinet';
import { IconCall } from './IconCall';
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
};
