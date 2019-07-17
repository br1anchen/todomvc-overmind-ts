import { Overmind, IConfig, IAction, IOnInitialize } from 'overmind';
import { createHook } from 'overmind-react';
import { state } from './state';
import * as actions from './actions';
import * as effects from './effects';
import onInitialize from './onInitialize';

const config = {
  onInitialize,
  state,
  actions,
  effects,
};

export type Config = IConfig<typeof config>;

export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}

export interface OnInitialize extends IOnInitialize<Config> {}

const overmind = new Overmind(config);

export const useOvermind = createHook(overmind);
