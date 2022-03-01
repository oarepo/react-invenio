// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { PropsWithChildren } from 'react';
import { createRegisterable } from '../utils';
import { LinkProps, Link } from './Link';
import { BFC } from './types';

type LinkRecordProps = LinkProps & {
  /**
   * Primary identifier of a record.
   */
  id: string;
};

/**
 * A component for rendering hyperlinks.
 * @param props conaining info for construction of record hyperlink
 * @returns
 */
export const LinkRecord: BFC<PropsWithChildren<LinkRecordProps>> = ({
  id,
  children,
  href,
  ...rest
}: PropsWithChildren<LinkRecordProps>) => {
  const linkTarget = `/records/${id}`;

  return (
    <Link href={linkTarget} {...rest}>
      {children}
    </Link>
  );
};

LinkRecord.Registerable = createRegisterable(LinkRecord, 'record-link');

export default LinkRecord;
