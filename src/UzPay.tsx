import { StyleSheet, View, type ViewStyle } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import { encode } from 'base-64';

interface ClickProps {
  transactionParam: string;
  merchantId: string;
  serviceId: string;
}

interface PaymeProps {
  merchantId: string;
  merchantUserId: string;
}

interface BaseEvent {
  type: string;
}

interface ClickEvent extends BaseEvent {
  type: 'click';
  params: ClickProps;
  amount: number;
  headerComponent?: React.ReactNode;
  language?: 'uz' | 'ru' | 'en';
  webViewContainerStyle?: ViewStyle;
  webStyle?: ViewStyle;
}

interface PaymeEvent extends BaseEvent {
  type: 'payme';
  params: PaymeProps;
  amount: number;
  headerComponent?: React.ReactNode;
  language?: 'uz' | 'ru' | 'en';
  webViewContainerStyle?: ViewStyle;
  webStyle?: ViewStyle;
}

type UzPayProps = ClickEvent | PaymeEvent;

const UzPay: React.FC<UzPayProps> = ({
  type,
  params,
  amount,
  headerComponent,
  language,
  webViewContainerStyle,
  webStyle,
}) => {
  let uri = '';
  if (type === 'click') {
    uri = `https://my.click.uz/services/pay?service_id=${params.serviceId}&merchant_id=${params.merchantId}&amount=${amount}&transaction_param=${params.transactionParam}&language=${language}`;
  } else if (type === 'payme') {
    let str = `m=${params?.merchantId};ac.user_id=${params?.merchantUserId};a=${
      amount * 100
    };l=${language}`;
    uri = `https://checkout.paycom.uz/${encode(str)}`;
  }

  return (
    <View style={styles.container}>
      {headerComponent}
      <WebView
        containerStyle={webViewContainerStyle}
        showsVerticalScrollIndicator={false}
        source={{ uri: uri }}
        style={[styles.web, webStyle]}
      />
    </View>
  );
};

export default UzPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  web: {
    flex: 1,
  },
});
