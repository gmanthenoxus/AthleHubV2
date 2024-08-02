// src/hooks/useUserIdentification.ts
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useUserIdentification = () => {
  const [userName, setUserName] = useState<string | null>(null)

  const saveUserName = async (name: string) => {
    try {
      await AsyncStorage.setItem('@user_name', name)
      alert('Name saved!');
      setUserName(name)
    } catch (e) {
      console.error('Failed to save the name to the storage')
    }
  }

  const loadUserName = async () => {
    try {
      const name = await AsyncStorage.getItem('@user_name')
      if (name !== null) {
        setUserName(name)
      }
    } catch (e) {
      console.error('Failed to load the name from storage')
    }
  }

  return { userName, saveUserName, loadUserName }
}

export default useUserIdentification



