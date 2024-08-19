import { getState, patchState, signalStoreFeature, withHooks } from '@ngrx/signals';
import { effect } from '@angular/core';

export function withStorageSync(key: string, storageFactory = () => localStorage) {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        const storage = storageFactory();
        const stateStr = storage.getItem(key);

        if (stateStr) {
          patchState(store, JSON.parse(stateStr));
        }

        effect(() => {
          const state = getState(store);
          storage.setItem(key, JSON.stringify(state));
        });
      },
    })
  );
}
