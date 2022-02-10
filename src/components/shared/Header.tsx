import React, { FunctionComponent } from 'react';

type Props = {
  title?: string,
  cta?: any
}

const Header: FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <div className="header-content">
        <div className="header-title">
          {props.title && props.title}
        </div>
        <div className="header-cta">
          {props.cta}
        </div>
      </div>
      <div className="header-clearfix" />
    </>
  )
}

export default Header;