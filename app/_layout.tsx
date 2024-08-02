import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
    screenOptions={{ 
      tabBarActiveTintColor: 'blue',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
     }}>
      <Tabs.Screen name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }} />
      <Tabs.Screen name="match/index" 
        options={{
          title: 'Match',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />
        }} />
      <Tabs.Screen name="live-Game/index" 
        options={{
          title: 'Game',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
        }} />
      <Tabs.Screen name="match-History/index"
        options={{ 
          title: 'History',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="square" color={color} />
         }} />
      <Tabs.Screen name="player-Statistics/index" 
        options={{ 
          title: 'Player Option',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="circle" color={color} />
        }} />
    </Tabs>
  );
}
