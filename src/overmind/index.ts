import { Overmind, IConfig, IAction } from 'overmind';
import { createHook } from 'overmind-react';
import { state } from './state';
import * as actions from './actions';
import * as effects from './effects';

const config = {
  state,
  actions,
  effects,
};

export type Config = IConfig<typeof config>;

export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}

const overmind = new Overmind(config);

export const useOvermind = createHook(overmind);
