// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import classNames from 'classnames';
import React, { FC } from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { registerSimpleComponent } from '../utils';

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
 * A raw component that renders anything passed as children.
 * @param props props containing children content
 * @returns
 */
const LabelAccessRights: FC<LabelAccessStatusProps> = (
  props: LabelAccessStatusProps
) => {
  const { accessRights, size, className, ...rest } = props;

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

export const LabelAccessRightsComponent = registerSimpleComponent(
  LabelAccessRights
);
