import { AppTheme } from '../model/enum/app-theme';

export function hasLightTheme(theme: AppTheme): boolean {
  return theme === AppTheme.LIGHT;
}
