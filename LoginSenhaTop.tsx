import * as React from 'react';
import { TextInput } from 'react-native-paper';

const LoginSenhaTop = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      style={{ width: '60%', marginTop: 30, paddingHorizontal: 10, marginBottom: 1,}}

    />
  );
};

export default LoginSenhaTop;
