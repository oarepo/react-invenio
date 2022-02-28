// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import { registerSimpleComponent } from '../utils';

type LabelSubject = {
  /** Internationalized subject title. */
  title_l10n: string;
};

export type LabelSubjectsProps = LabelProps & {
  /** List of record subjects. */
  subjects?: LabelSubject[];
};

/**
 * A raw component that renders anything passed as children.
 * @param props props containing children content
 * @returns
 */
const LabelSubjects: FC<LabelSubjectsProps> = (props: LabelSubjectsProps) => {
  const { subjects, key, ...rest } = props;
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

LabelSubjects.displayName = 'label-subjects';

export const LabelSubjectsComponent = registerSimpleComponent(LabelSubjects);
