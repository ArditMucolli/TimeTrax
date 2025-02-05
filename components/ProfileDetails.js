import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfilePicture from '../assets/profile/ProfilePicture';
import Star from '../assets/profile/Star';
import ArrowRight from '../assets/ArrowRight';
import Separator from '../assets/profile/Separator';

const ProfileDetails = ({name, status, job, joined, points}) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profilePictureWrapper}>
        <ProfilePicture />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.statusText}>{status}</Text>
          <Separator />
          <Text style={styles.jobText}>{job}</Text>
          <Separator />
          <Text style={styles.joinedText}>Joined {joined}</Text>
        </View>
      </View>
      <View style={styles.pointsSection}>
        <View style={styles.pointsInfo}>
          <Star />
          <Text style={styles.pointsText}>{points} pts</Text>
        </View>
        <TouchableOpacity style={styles.exchangeButton}>
          <Text style={styles.exchangeText}>Exchange</Text>
          <ArrowRight stroke="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: '#F1F5FF',
    borderRadius: 12,
    width: 330,
    height: 250,
    padding: 16,
    marginTop: 40,
    alignSelf: 'center',
    position: 'relative',
  },
  profilePictureWrapper: {
    position: 'absolute',
    top: -55,
    alignSelf: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#252525',
    marginTop: 10,
  },
  statusRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 15,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#979797',
    textAlign: 'center',
  },
  jobText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#979797',
    textAlign: 'center',
  },
  joinedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#979797',
    textAlign: 'center',
  },
  separatorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  pointsSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 31, 78, 0.5)',
    padding: 16,
    borderRadius: 8,
  },
  pointsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  exchangeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exchangeText: {
    fontSize: 11,
    color: 'white',
    marginRight: 8,
  },
});

export default ProfileDetails;
