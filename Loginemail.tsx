import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Loginemail = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={{width: '40%', marginTop: 150, paddingHorizontal: 10}}
    />
  );
};

export default Loginemail;