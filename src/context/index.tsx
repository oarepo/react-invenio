// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Component, createContext } from 'react';

interface UIContextState {
  id: string;
}

interface UpdateStateArg {
  key: keyof UIContextState;
  value: any;
}

interface UIContextStore {
  state: UIContextState;
  update: (arg: UpdateStateArg) => void;
}

const UIContext = createContext({} as UIContextStore);

class Provider extends Component<{}, UIContextState> {
  public readonly state = {
    id: 'default',
  };

  private update = ({ key, value }: UpdateStateArg) => {
    this.setState({ [key]: value });
  };

  public render() {
    const store: UIContextStore = {
      state: this.state,
      update: this.update,
    };

    return (
      <UIContext.Provider value={store}>
        {this.props.children}
      </UIContext.Provider>
    );
  }
}

export const WithUIContext = Provider;
