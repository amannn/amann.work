import React from 'react';
import Text from 'components/Text';

export default function Title({children, intro}) {
  return (
    <>
      <Text color="accent" variant="label">
        {intro}
      </Text>
      <Text component="h2" variant="h2">
        {children}
      </Text>
    </>
  );
}
