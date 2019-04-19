/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Text from 'components/Text';
import LocalizedLayout from 'localized/en/LocalizedLayout';

export default function Imprint() {
  return (
    <LocalizedLayout title="Imprint">
      <Text variant="h3">Jan Amann</Text>
      <Text marginBottom>
        Partner for User Interface Engineering and Design
      </Text>
      <Text marginBottom>
        Wiesenrainstraße 15
        <br />
        6890 Lustenau
        <br />
        Austria
      </Text>
      <Text marginBottom>UID: ATU70057369</Text>
      <Text marginBottom>
        E-Mail: jan@amann.me <br />
        Tel: +43 681 / 84 39 0 333
      </Text>
      <Text>No tracking, no privacy policy ✌️</Text>
    </LocalizedLayout>
  );
}
