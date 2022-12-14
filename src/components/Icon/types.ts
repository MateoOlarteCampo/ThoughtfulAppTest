export interface IIconProps {
  iconName: IconName;
  onClick?: () => void;
}

type IconName = 'search' | 'arrowLeft' | 'close';