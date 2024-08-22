import { AppTheme } from '../model/enum/app-theme';

export function hasLightMode(theme: AppTheme): boolean {
  return theme === AppTheme.LIGHT;
}
