import React from 'react';
import Text from 'components/Text';

export default function ProjectParagraph({children}) {
  return (
    <Text component={Text} marginBottom>
      {children}
    </Text>
  );
}
