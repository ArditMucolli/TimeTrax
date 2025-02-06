import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../components/Header';
import LeavesTab from '../components/leaves/LeavesTab';
import LeavesTable from '../components/leaves/LeavesTable';

const LeavesScreen = () => {
  const [activeTab, setActiveTab] = useState('Leaves');

  return (
    <View style={styles.container}>
      <Header Title="Leaves" />
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Leaves' && styles.activeTab]}
          onPress={() => setActiveTab('Leaves')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Leaves' && styles.activeTabText,
            ]}>
            Leaves
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Table' && styles.activeTab]}
          onPress={() => setActiveTab('Table')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Table' && styles.activeTabText,
            ]}>
            Table
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {activeTab === 'Leaves' ? <LeavesTab /> : <LeavesTable />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 330,
    height: 45,
    marginTop: 30,
    borderRadius: 26,
    paddingHorizontal: 10,
    borderTopWidth: 3,
    borderTopColor: '#D1D5DB',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.001,
    shadowRadius: 6,
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 26,
  },
  activeTab: {
    backgroundColor: '#041F4E',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 600,
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    marginTop: 30,
    padding: 8,
  },
});

export default LeavesScreen;
