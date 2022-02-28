// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { registerSimpleComponent } from '../utils';

export type LabelPublicationInfoProps = LabelProps & {
  /** Date of publication, internationalized string. */
  datePublished?: string;

  /** Version string of the published version. */
  version?: string;
};

/**
 * A raw component that renders anything passed as children.
 * @param props props containing children content
 * @returns
 */
const LabelPublicationInfo: FC<LabelPublicationInfoProps> = (
  props: LabelPublicationInfoProps
) => {
  const { datePublished, version, ...rest } = props;

  const date = datePublished || 'No publication date.';

  return (
    <Label {...rest}>
      {date}
      {version && ` (${version})`}
    </Label>
  );
};

LabelPublicationInfo.displayName = 'label-publication-info';

export const LabelPublicationInfoComponent = registerSimpleComponent(
  LabelPublicationInfo
);
