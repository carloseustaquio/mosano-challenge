import {UseCasesType} from '#/main/use-cases';
import {resolvedStore} from '#/state/store';

export type RootState = ReturnType<typeof resolvedStore.getState>
export type AppDispatch = typeof resolvedStore.dispatch
export type AsyncThunkConfig = {
  state?: RootState
  dispatch?: AppDispatch
  extra: UseCasesType,
}
