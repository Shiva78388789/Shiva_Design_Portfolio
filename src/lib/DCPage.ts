'use client';

import { Component } from 'react';

/**
 * Base class for the ported pages. Mirrors the prototype runtime's DCLogic:
 * a class component whose `renderVals()` returns the flat object the view
 * template reads from.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class DCPage<P = {}> extends Component<P, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: `_${string}`]: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderVals(): Record<string, any> {
    return {};
  }
}
