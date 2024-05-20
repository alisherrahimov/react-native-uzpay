import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UzPay from '../../src/UzPay';

export default function Page() {
  return (
    <View style={styles.container}>
      <UzPay
        headerComponent={<Text>Header</Text>}
        amount={1000}
        type="payme"
        params={{ merchantId: '', merchantUserId: '' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
