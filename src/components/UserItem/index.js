import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Card, TouchableRipple } from 'react-native-paper'

const UserItem = ({ user, onPress }) => {
  return (
    <TouchableRipple
      style={{ padding: 12 }}
      onPress={onPress}
    >
      <Card
        mode="elevated"
        style={{
          borderRadius: 16
        }}
      >
        <Card.Title
          title={user.first_name ?? ''}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 18,
          }}
          subtitle={user.last_name ?? ''}
          subtitleVariant="bodyMedium"
          left={(props) =>
            <Avatar.Image {...props}
              size={24}
              source={{uri: user.avatar}}
            />
          }
        />
      </Card>
    </TouchableRipple>
  )
}

export default UserItem