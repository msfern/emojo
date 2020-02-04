import React from 'react';

export default function Loading() {
  const style = {
    fontSize: '4rem',
    color: '#fff'
  }

  return (
      <i className="fa fa-cog fa-spin" style={style} />
  );
}