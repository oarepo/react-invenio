// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import classNames from 'classnames';
import React from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type LabelAccessStatusProps = LabelProps & {
  accessRights: {
    /** Unique identifier of access right mode. */
    id: string;
    /** Internationalized title for the access right mode. */
    title_l10n?: string;
    /** Icon class name. */
    icon?: string;
  };
};

/**
 * A component rendering the record's access rights label.
 * @param props props containing accessRights info
 * @returns
 */
const LabelAccessRights: BFC<LabelAccessStatusProps> = ({
  accessRights,
  size,
  className,
  ...rest
}: LabelAccessStatusProps) => {
  const rsize = size || 'tiny';
  const statusClass = accessRights.id || 'open';
  const statusIcon = accessRights.icon || 'unlock';
  const classess = classNames(className, `access-status ${statusClass}`);

  return (
    <Label size={rsize} className={classess} {...rest}>
      {statusIcon && <i className={`icon ${statusIcon}`} />}
      {accessRights.title_l10n}
    </Label>
  );
};

LabelAccessRights.displayName = 'label-access-rights';
LabelAccessRights.Registerable = createRegisterable(
  LabelAccessRights
);

export default LabelAccessRights;
