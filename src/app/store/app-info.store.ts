import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { AppTheme } from '../model/enum/app-theme';
import { withStorageSync } from '../state/storage-sync.feature';
import { hasLightTheme } from '../utils/theme-utills';

type AppInfoState = { theme: AppTheme };

const initialState: AppInfoState = { theme: AppTheme.LIGHT };

export const AppInfoStore = signalStore(
  withState<AppInfoState>(initialState),
  withComputed(({ theme }) => ({})),
  withMethods(store => ({
    toggleTheme() {
      patchState(store, { theme: hasLightTheme(store.theme()) ? AppTheme.DARK : AppTheme.LIGHT });
    },
  })),
  withStorageSync('app-info')
);
