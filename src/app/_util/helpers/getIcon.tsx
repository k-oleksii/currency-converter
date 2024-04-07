import { icons } from '../icons';

export const getIcon = (name: string) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent />;
};
