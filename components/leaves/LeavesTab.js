import React from 'react';
import {ScrollView} from 'react-native'; // Import ScrollView
import LeavesContainer from './LeavesContainer';

const LeavesTab = () => {
  return (
    <ScrollView>
      <LeavesContainer
        monthText="February 2025"
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        monthText="January 2025"
        leaveTitle="5 Days Application"
        status="Declined"
        statusColor="rgba(241, 13, 13, 0.2)"
        statusTextColor="rgba(255, 48, 48, 0.5)"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
    </ScrollView>
  );
};

export default LeavesTab;
