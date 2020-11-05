/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Text from 'components/Text';
import ImprintLayout from 'components/ImprintLayout';
import LocalizedLayout from 'localized/de/LocalizedLayout';

export default function Imprint() {
  return (
    <LocalizedLayout title="Impressum">
      <ImprintLayout>
        <Text variant="h3">Jan Amann</Text>
        <Text marginBottom>
          Partner für User Interface Entwicklung und Design
        </Text>
        <Text marginBottom>
          Wiesenrainstraße 15
          <br />
          6890 Lustenau
          <br />
          Österreich
        </Text>
        <Text marginBottom>UID: ATU70057369</Text>
        <Text marginBottom>
          E-Mail: jan@amann.me <br />
          Tel: +43 681 / 84 39 0 333
        </Text>
        <Text>Kein Tracking, keine Datenschutzerklärung ✌️</Text>
      </ImprintLayout>
    </LocalizedLayout>
  );
}
