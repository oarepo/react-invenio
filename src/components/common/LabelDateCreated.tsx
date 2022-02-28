// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment, HTMLAttributes } from 'react';
import { registerSimpleComponent } from '../utils';

export type LabelDateCreatedProps = HTMLAttributes<HTMLDivElement> & {
  /** Date when the record was submitted. */
  dateCreated?: string;
};

/**
 * A raw component that renders anything passed as children.
 * @param props props containing children content
 * @returns
 */
const LabelDateCreated: FC<LabelDateCreatedProps> = (
  props: LabelDateCreatedProps
) => {
  const { dateCreated, ...rest } = props;

  return (
    <Fragment>
      {dateCreated && (
        <div {...rest}>
          <small>
            Uploaded on <span>{dateCreated}</span>
          </small>
        </div>
      )}
    </Fragment>
  );
};

LabelDateCreated.displayName = 'label-date-created';

export const LabelDateCreatedComponent = registerSimpleComponent(
  LabelDateCreated
);
