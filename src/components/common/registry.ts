// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { lazy } from 'react';

// TODO: this is just first step
// ultimate goal will be to lazyload only the
// components needed by current layout/composition
export const commonComponents: any[] = [
  lazy(() => import(/* webpackChunkName: 'commonComponents' */ './Link')),
  lazy(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelAccessRights')
  ),
  lazy(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelDateCreated')
  ),
  lazy(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelPublicationInfo')
  ),
  lazy(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelSubjects')
  ),
  lazy(() => import(/* webpackChunkName: 'commonComponents' */ './Link')),
  lazy(() => import(/* webpackChunkName: 'commonComponents' */ './LinkRecord')),
  lazy(() =>
    import(/* webpackChunkName: 'commonComponents' */ './TextShortened')
  ),
];
