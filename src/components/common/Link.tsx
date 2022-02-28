// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, PropsWithChildren } from 'react';
import { registerSimpleComponent } from '../utils';

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * A component for rendering hyperlinks.
 * @param props hyperlink attributes and children content
 * @returns
 */
export const Link: FC<PropsWithChildren<LinkProps>> = (
  props: PropsWithChildren<LinkProps>
) => {
  const { children, ...rest } = props;
  return <a {...rest}>{children}</a>;
};

Link.displayName = 'link';

export const LinkComponent = registerSimpleComponent(Link);

export default LinkComponent;
