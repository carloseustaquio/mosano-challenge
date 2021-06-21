import {store} from '#/state/store';
import {makeUseCases} from '#/main/use-cases';

export const makeStore = () => store(makeUseCases());
