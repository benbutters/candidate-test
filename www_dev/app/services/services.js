
angular.module('Siemens').service('dummyData', function() {

  this.mockJobs = [
    {
      "appointmentImpl": {
        "TRANSACTION_ID": "1001",
        "SOURCE_ID": "a",
        "DESTINATION_ID": "e",
        "APPOINTMENT_ID": 10011,
        "APPT_TYPE": "S",
        "APPNT_REMARKS": "Some remarks",
        "ACCESS_DETAILS": "?",
        "CONTACT_TEL": "087 1234567",
        "CUSTOMER_NAME": "Joe bloggs",
        "CUSTOMER_REF": "cus123",
        "CUSTOMER_TYPE": "Q",
        "DEPOT": "London",
        "DS_PASSWORD_PLAIN": "pass123",
        "DS_PASSWORD_CIPHERTEXT": "xxx",
        "APPNT_DURATION": 30,
        "ESTATE_AGENT": false,
        "ESTI_TRAVEL_TIME": 30,
        "EXCP_PROCESSING": false,
        "EXCP_PROCESSING_REQ": {},
        "FORWARD_ADDRESS1": {},
        "GRID_REF": "xxxx",
        "GUARANTEED_STATUS": false,
        "IDLE_TIME": 20,
        "APPNT_END": "2015-03-31T10:00:00.000Z",
        "APPNT_START": "2015-03-31T09:00:00.000Z",
        "KEY_COLLECT": false,
        "LAST_METER_WO": "34345",
        "NEW_CUSTOMER_NAME": {},
        "ORIGINAL_ETA": {},
        "LAST_BILL_DATE": "2015-01-01T00:00:00.000Z",
        "STAFF_NUMBER": "111011",
        "SITE_CONTACT": {},
        "SHIFT_END": "2015-03-31T17:00:00.000Z",
        "SHIFT_START": "2015-03-31T08:00:00.000Z",
        "SUPPLIER": "x",
        "JOB_TIMESLOT_DEF": "x",
        "WORKPHONE": "3241234",
        "CONTACT_DET": {},
        "CON_NOTIFICATIONS_NAME": {},
        "CON_NOTIFICATIONS_TYPE": {},
        "VUNERABILTY_INFO": {},
        "IHD_REQ": {},
        "CAD_REQ": {},
        "GAS_MSN": {},
        "REQ_DEV": {},
        "SITE": {
          "ADDRESS1": "10 the street",
          "ADDRESS2": "New town",
          "ADDRESS3": "New region",
          "ADDRESS4": {},
          "POSTCODE": "DN17 1BY"
        },
        "JOBS": {
          "JOB": [
            {
              "REFERENCE_ID": 11101,
              "APPOINTMENT_NO": "22201",
              "ENQ_NO": 33301,
              "JOB_TYPE_ID": "xx",
              "JOB_DESCRIPTION": "Descriptive text",
              "JOB_ID": "44401",
              "METER_TYPE": "abc",
              "NEW_METER_TYPE": "?",
              "OUTSTANDING_BALANCE": 100,
              "METER_POINT": {
                "SPR": "xx",
                "PHASE": "xxx",
                "VOLTAGE": "240",
                "CT_RATIO": "0"
              }
            },
            {
              "REFERENCE_ID": 11102,
              "APPOINTMENT_NO": "22202",
              "ENQ_NO": 33302,
              "JOB_TYPE_ID": "xx",
              "JOB_DESCRIPTION": "Another description",
              "JOB_ID": "44402",
              "METER_TYPE": "def",
              "NEW_METER_TYPE": "?",
              "OUTSTANDING_BALANCE": 0,
              "METER_POINT": {
                "SPR": "xx",
                "PHASE": "xxx",
                "VOLTAGE": "240",
                "CT_RATIO": "10"
              }
            }
          ]
        }
      }
    },
    {
      "appointmentImpl": {
        "TRANSACTION_ID": "2002",
        "SOURCE_ID": "b",
        "DESTINATION_ID": "f",
        "APPOINTMENT_ID": 20022,
        "APPT_TYPE": "S",
        "APPNT_REMARKS": "Remaking",
        "ACCESS_DETAILS": "?",
        "CONTACT_TEL": "086 789101112",
        "CUSTOMER_NAME": "Mary Smith",
        "CUSTOMER_REF": "cus124",
        "CUSTOMER_TYPE": "Q",
        "DEPOT": "London",
        "DS_PASSWORD_PLAIN": "testPass",
        "DS_PASSWORD_CIPHERTEXT": "xxx",
        "APPNT_DURATION": 30,
        "ESTATE_AGENT": false,
        "ESTI_TRAVEL_TIME": 30,
        "EXCP_PROCESSING": false,
        "EXCP_PROCESSING_REQ": {},
        "FORWARD_ADDRESS1": {},
        "GRID_REF": "xxxx",
        "GUARANTEED_STATUS": false,
        "IDLE_TIME": 20,
        "APPNT_END": "2015-03-31T12:00:00.000Z",
        "APPNT_START": "2015-03-31T11:00:00.000Z",
        "KEY_COLLECT": false,
        "LAST_METER_WO": "34345",
        "NEW_CUSTOMER_NAME": {},
        "ORIGINAL_ETA": {},
        "LAST_BILL_DATE": "2015-01-03T00:00:00.000Z",
        "STAFF_NUMBER": "111011",
        "SITE_CONTACT": {},
        "SHIFT_END": "2015-03-31T17:00:00.000Z",
        "SHIFT_START": "2015-03-31T08:00:00.000Z",
        "SUPPLIER": "x",
        "JOB_TIMESLOT_DEF": "x",
        "WORKPHONE": "3241234",
        "CONTACT_DET": {},
        "CON_NOTIFICATIONS_NAME": {},
        "CON_NOTIFICATIONS_TYPE": {},
        "VUNERABILTY_INFO": {},
        "IHD_REQ": {},
        "CAD_REQ": {},
        "GAS_MSN": {},
        "REQ_DEV": {},
        "SITE": {
          "ADDRESS1": "14 high street",
          "ADDRESS2": "Old town",
          "ADDRESS3": "Old region",
          "ADDRESS4": {},
          "POSTCODE": "DN14 2BX"
        },
        "JOBS": {
          "JOB": [
            {
              "REFERENCE_ID": 11105,
              "APPOINTMENT_NO": "22205",
              "ENQ_NO": 33305,
              "JOB_TYPE_ID": "xx",
              "JOB_DESCRIPTION": "Descriptive text",
              "JOB_ID": "44405",
              "METER_TYPE": "abc",
              "NEW_METER_TYPE": "?",
              "OUTSTANDING_BALANCE": 200,
              "METER_POINT": {
                "SPR": "xx",
                "PHASE": "xxx",
                "VOLTAGE": "240",
                "CT_RATIO": "0"
              }
            },
            {
              "REFERENCE_ID": 11106,
              "APPOINTMENT_NO": "22206",
              "ENQ_NO": 33306,
              "JOB_TYPE_ID": "xx",
              "JOB_DESCRIPTION": "Another description",
              "JOB_ID": "44406",
              "METER_TYPE": "def",
              "NEW_METER_TYPE": "?",
              "OUTSTANDING_BALANCE": 0,
              "METER_POINT": {
                "SPR": "xx",
                "PHASE": "xxx",
                "VOLTAGE": "240",
                "CT_RATIO": "10"
              }
            }
          ]
        }
      }
    }
  ];

});