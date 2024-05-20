import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { UzPay } from 'react-native-uzpay';

export default function App() {
  return (
    <View style={styles.container}>
      <UzPay
        type="payme"
        params={{
          // 62fa657ea12ad7a48f4b2dd9
          // 100003AA
          merchantUserId: '100003AA',
          merchantId: '62fa657ea12ad7a48f4b2dd9',
          // serviceId: 'serviceId',
        }}
        amount={1000} //so'm
        headerComponent={<Text>Header</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
