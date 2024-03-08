import * as React from 'react';
import { TextInput } from 'react-native-paper';

const LoginemailTop = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email2222222222222"
      value={text}
      onChangeText={text => setText(text)}
      style={{width: '60%', marginBottom: -45, paddingHorizontal: 10}}
    />
  );
};

export default LoginemailTop;