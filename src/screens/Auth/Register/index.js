import React, { useState } from 'react'
import { View } from 'react-native'
import { Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import Spacer from '../../../components/Spacer'

const RegisterScreen = ({ navigation }) => {

  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 24, }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Spacer height={16} />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Spacer height={48} />
        <Button
          mode="contained-tonal"
          onPress={() => { }}
        >
          Register
        </Button>
      </View>
    </View>
  )
}

export default RegisterScreen