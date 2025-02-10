import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import X from '../assets/X';

const CalendarModal = ({modalVisible, onClose, onSelectDateRange}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDateString = date => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDayPress = day => {
    if (startDate && endDate) {
      setStartDate(day.dateString);
      setEndDate(null);
    } else if (!startDate) {
      setStartDate(day.dateString);
    } else {
      if (new Date(day.dateString) >= new Date(startDate)) {
        setEndDate(day.dateString);
      } else {
        setStartDate(day.dateString);
        setEndDate(null);
      }
    }
  };

  const getMarkedDates = () => {
    let markedDates = {};
    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        customStyles: {
          container: {
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 8,
          },
          text: {
            color: 'white',
          },
        },
      };
    }

    if (startDate && endDate) {
      let currentDate = startDate;
      while (currentDate <= endDate) {
        markedDates[currentDate] = {
          customStyles: {
            container: {
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 8,
            },
            text: {
              color: 'white',
            },
          },
        };
        currentDate = new Date(
          new Date(currentDate).setDate(new Date(currentDate).getDate() + 1),
        )
          .toISOString()
          .split('T')[0];
      }
      markedDates[endDate] = {
        endingDay: true,
        customStyles: {
          container: {
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 8,
          },
          text: {
            color: 'white',
          },
        },
      };
    }
    return markedDates;
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      onSelectDateRange?.({startDate, endDate});
    }
    onClose();
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleConfirm}
              style={styles.confirmButton}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <X stroke="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Calendar
              current={formatDateString(startDate || new Date())}
              minDate={'2020-05-10'}
              onDayPress={handleDayPress}
              markedDates={getMarkedDates()}
              markingType={'custom'}
              theme={{
                backgroundColor: '#041F4E',
                calendarBackground: '#041F4E',
                selectedDayTextColor: '#041F4E',
                todayTextColor: '#F1F5FF',
                arrowColor: '#FFFFFF',
                monthTextColor: '#FFFFFF',
                dayTextColor: '#FFFFFF',
                textDisabledColor: '#636363',
                textSectionTitleColor: '#FFFFFF',
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 390,
    height: 573,
    backgroundColor: '#041F4E',
    padding: 20,
    alignSelf: 'center',
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  confirmButton: {
    width: 120,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#252525',
    fontWeight: '700',
  },
});

export default CalendarModal;
