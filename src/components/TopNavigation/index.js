import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../../screens/DiscoverScreen';
import NewsScreen from '../../screens/NewsScreen';
import TopTabBar from '../../components/TopTabBar'
export default function TopNavigation() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  const [routes] = React.useState([
    { key: 'first', title: 'Discover' },
    { key: 'second', title: 'News' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={()=><TopTabBar index={index} 
      setIndex={setIndex}
      />}
    />
  );
}