// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment } from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

type LabelSubject = {
  /** Internationalized subject title. */
  title_l10n: string;
};

export type LabelSubjectsProps = LabelProps & {
  /** List of record subjects. */
  subjects?: LabelSubject[];
};

/**
 * A component rendering labels of record's subjects
 * @param props props containing record subjects
 * @returns
 */
const LabelSubjects: BFC<LabelSubjectsProps> = ({
  subjects,
  key,
  ...rest
}: LabelSubjectsProps) => {
  return (
    <Fragment>
      {subjects &&
        subjects.map((subject: any, index: any) => (
          <Label key={index} {...rest}>
            {subject.title_l10n}
          </Label>
        ))}
    </Fragment>
  );
};

LabelSubjects.Registerable = createRegisterable(
  LabelSubjects,
  'label-subjects'
);

export default LabelSubjects;
