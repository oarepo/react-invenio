// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import loadable from '@loadable/component';

// TODO: this is just first step
// ultimate goal will be to lazyload only the
// components needed by current layout/composition
export const commonComponents: any[] = [
  loadable(() => import(/* webpackChunkName: 'commonComponents' */ './Link')),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelAccessRights')
  ),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelDateCreated')
  ),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelPublicationInfo')
  ),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LabelSubjects')
  ),
  loadable(() => import(/* webpackChunkName: 'commonComponents' */ './SLabel')),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './LinkRecord')
  ),
  loadable(() =>
    import(/* webpackChunkName: 'commonComponents' */ './TextShortened')
  ),
];
