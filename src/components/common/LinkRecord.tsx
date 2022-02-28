// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, PropsWithChildren } from 'react';
import { registerSimpleComponent } from '../utils';
import { LinkProps, Link } from './Link';

type LinkRecordProps = LinkProps & {
  /**
   * Primary identifier of a record.
   */
  id: string;
};

/**
 * A component for rendering hyperlinks.
 * @param props hyperlink attributes and children content
 * @returns
 */
const LinkRecord: FC<PropsWithChildren<LinkRecordProps>> = (
  props: PropsWithChildren<LinkRecordProps>
) => {
  const { id, children, href, ...rest } = props;

  const linkTarget = `/records/${id}`;

  return (
    <Link href={linkTarget} {...rest}>
      {children}
    </Link>
  );
};

LinkRecord.displayName = 'record-link';

export const LinkRecordComponent = registerSimpleComponent(LinkRecord);

export default LinkRecordComponent;
