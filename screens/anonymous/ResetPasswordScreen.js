import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    padding: 10,
  },
});

const ResetPasswordScreen = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
  >
    <Text>Let&apos;s reset password.</Text>
  </ScrollView>
);

export default ResetPasswordScreen;
