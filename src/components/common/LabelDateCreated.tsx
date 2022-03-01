// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment, HTMLAttributes } from 'react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type LabelDateCreatedProps = HTMLAttributes<HTMLDivElement> & {
  /** Date when the record was submitted. */
  dateCreated?: string;
};

/**
 * A component that renders date of record's creation.
 * @param props props containing record creation date
 * @returns
 */
const LabelDateCreated: BFC<LabelDateCreatedProps> = ({
  dateCreated,
  ...rest
}: LabelDateCreatedProps) => {
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

LabelDateCreated.Registerable = createRegisterable(
  LabelDateCreated,
  'label-date-created'
);

export default LabelDateCreated;
