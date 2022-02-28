// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type LabelPublicationInfoProps = LabelProps & {
  /** Date of publication, internationalized string. */
  datePublished?: string;

  /** Version string of the published version. */
  version?: string;
};

/**
 * A component that renders record's publication
 * date & published version.
 * @param props props containing publication date & version
 * @returns
 */
const LabelPublicationInfo: BFC<LabelPublicationInfoProps> = ({
  datePublished,
  version,
  ...rest
}: LabelPublicationInfoProps) => {
  const date = datePublished || 'No publication date.';

  return (
    <Label {...rest}>
      {date}
      {version && ` (${version})`}
    </Label>
  );
};

LabelPublicationInfo.displayName = 'label-publication-info';
LabelPublicationInfo.Registerable = createRegisterable(
  LabelPublicationInfo
);

export default LabelPublicationInfo;
