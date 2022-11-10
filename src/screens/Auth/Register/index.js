import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ActivityIndicator, Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import Spacer from '../../../components/Spacer'
import { useRegisterMutation } from '../../../services/authApi'

const RegisterScreen = ({ navigation }) => {

  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [register, { isLoading }] = useRegisterMutation()
  const onRegisterClick = () => {
    register({ email, password })
      .unwrap()
      .then((response) => {
        console.log('response', response)
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}]
        })
      })
      .catch((err) => {
        console.log('error', err)
        Alert.alert('Error', err.data.error)
      })

  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title="Register"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 32, }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
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
        {isLoading
          ? <ActivityIndicator
            animating
          />
          : <Button
            mode="contained-tonal"
            onPress={onRegisterClick}
          >
            Register
          </Button>
        }
      </View>
    </View>
  )
}

export default RegisterScreen