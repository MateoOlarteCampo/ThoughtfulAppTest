import { SvgXml } from 'react-native-svg';
import { icons } from '../../../assets/icons/icons_list';
import { IIconProps } from './types';

const Icon = ({ iconName }: IIconProps) => {
  const xml = icons[iconName];

  return <SvgXml xml={xml} />
}

export default Icon;