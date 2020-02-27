import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Profil from '../components/Profil';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <Profil />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
