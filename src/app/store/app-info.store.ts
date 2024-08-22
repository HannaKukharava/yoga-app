import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { AppTheme } from '../model/enum/app-theme';
import { withStorageSync } from '../state/storage-sync.feature';
import { hasLightMode } from '../utils/theme-utills';
import { computed } from '@angular/core';

type AppInfoState = { theme: AppTheme };

const initialState: AppInfoState = { theme: AppTheme.LIGHT };

export const AppInfoStore = signalStore(
  withState<AppInfoState>(initialState),
  withComputed(({ theme }) => {
    return {
      hasLightMode: computed(() => hasLightMode(theme())),
    };
  }),
  withMethods(store => {
    return {
      toggleTheme() {
        patchState(store, { theme: hasLightMode(store.theme()) ? AppTheme.DARK : AppTheme.LIGHT });
      },
    };
  }),
  withStorageSync('app-info')
);
