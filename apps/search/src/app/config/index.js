const configuration = require('./config.json');
const config = {
//   BaseURL: 'https://www.apimint.com:443/mock/COACHLIST/v1',
  // BaseURL: 'https://dev.coachlist.com/api/v1',
  // baseURL: 'https://www.coachlist.com/api/v1',
  baseURL: configuration.baseUrl,
  esBaseURL: configuration.esBaseUrl,
  esUserName: configuration.esUserName,
  esPassword: configuration.esPassword,
  googleApiKey: configuration.googleApiKey,
  registerUrl: configuration.baseUrl + '/user/select-role',
  endpoints: {
    test: {
      method: 'GET',
      url: 'http://httpbin.org/get'
    },
    user: {
      ssp: {
        locations: {
          method: 'GET',
          url: '/isp/{profileID}/training-locations/{sportID}',
          headers: {
            'Content-type': 'application/json',
            'x-mock-access': '213b88a141b0a704287809735cd7db'
          }
        },
        sessions: {
          method: 'GET',
          url: '/isp/{profileID}/sessions/{sportID}',
          headers: {
            'Content-type': 'application/json',
            'x-mock-access': '213b88a141b0a704287809735cd7db'
          }
        },
        delete: {
          sessions: {
            url: '/isp/{profileID}/sport/{sportID}/session/{sessionID}'
          },
          event: {
            url: '/ssp/event/{eventID}'
          },
          discount: {
            url: '/isp/{profileID}/volume-discount/{discountID}'
            // Url: '/isp/{profileID}/sport/{sportID}/volume-discount/{discountID}'
          }
        },
        events: {
          method: 'GET',
          url: '/ssp/events',
          headers: {
            'Content-type': 'application/json',
            'x-mock-access': '213b88a141b0a704287809735cd7db'
          }
        },
        profile: {
          method: 'GET',
          url: '/isp/{profileID}/profile',
          headers: {
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': '{token}'
          }
        },
        activate: {
          method: 'POST',
          url: '/isp/profile/{profileID}/activate'
        },
        set: {
          profile: {
            method: 'POST',
            url: '/isp/{profileID}',
            headers: {
              'Content-type': 'application/json',
              'X-CSRF-TOKEN': '{token}'
            }
          },
          sports: {
            method: 'POST',
            url: '/isp/{profileID}/sport/{sportID}',
            headers: {
              'Content-type': 'application/json',
              'X-CSRF-TOKEN': '{token}'
            }
          },
          event: {
            method: 'POST',
            url: '/event'
          }
        }
      }
    },
    metadata: {
      sports: {
        method: 'GET',
        url: '/sports',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      degrees: {
        method: 'GET',
        url: '/university-degrees',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      certifications: {
        method: 'GET',
        url: '/sports/{sportID}/certifications',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      skills: {
        method: 'GET',
        url: '/skills',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      ages: {
        method: 'GET',
        url: '/age-groups',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      training: {
        method: 'GET',
        url: '/isp/sub-ssp-types/{sportID}',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      services: {
        method: 'GET',
        url: '/isp/other-services/{sportID}',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      countries: {
        method: 'GET',
        url: '/countries',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      states: {
        method: 'GET',
        url: '/country/{countryID}/states?s=200',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      /* For SSP Details Page */
      sspSessionList: {
        method: 'GET',
        url: '/ssp/{nickname}/{sportID}/sessions',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      sspProfileData: {
        method: 'GET',
        url: '/showssp/{nickname}/{sportID}',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      },
      /* End of For SSP Details Page */
      institutions: {
        method: 'GET',
        url: '/institutions',
        headers: {
          'Content-type': 'application/json',
          'x-mock-access': '213b88a141b0a704287809735cd7db'
        }
      }
    }
  },
  translations: {
    enUs: require('../locale/enUs.json'),
    es: require('../locale/es.json')
  },
  colors: [
    '#42B7DB', '#ff913d', '#84c54b', '#d179ce'
  ],
  colorCombinations: [
    {
      borderColor: '#42B7DB',
      borderTopColor: '#42B7DB',
      color: '#42B7DB',
      background: 'rgba(22, 183, 219, 0.2)'
    }, {
      borderColor: ' #ff913d',
      borderTopColor: ' #ff913d',
      color: '#ff913d',
      background: 'rgba(255, 145, 61, 0.2)'
    }, {
      borderColor: '#84c54b',
      borderTopColor: '#84c54b',
      color: '#84c54b',
      background: 'rgba(132, 197, 75, 0.2)'
    }, {
      borderColor: '#d179ce',
      borderTopColor: '#d179ce',
      color: '#d179ce',
      background: 'rgba(209, 121, 206, 0.2)'
    }
  ],
  cancellationPollicies: ['L', 'C', 'N'],
  rewardsHistoryFilters: {
    ALL: 'all',
    REFERRALS: 'referrals',
    SESSIONS_COMPLETED: 'sessionComplete'
  },
  // RedirectUrl: 'https://dev.coachlist.com/logout',
  // redirectUrl: 'https://www.coachlist.com/logout',
  redirectUrl: configuration.baseUrl + '/logout',
  forgotPassWord: configuration.baseUrl + '/password/email',
  TOKEN_NAME: 'x-mock-access',
  // TOKEN_NAME: 'X-CSRF-TOKEN'
  RegStages: {
    DASHBOARD: 45
  },
  supportEmails: {
    firstSupportEmail: 'support@coachlist.com',
    secondSupportEmail: 'admin@coachlist.com'
  },
  RegExp: {
    Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nickName: /^[a-zA-Z0-9-]*$/,
    url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    phone: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
    zipcode: /^[a-zA-Z0-9-_]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
  },
  pointPerFriendInvite: 10,
  sessionBookingStatus: {
    BOOKING_ACCEPTED: 'BOOKING.ACCEPTED',
    BOOKING_DECLINED: 'BOOKING.DECLINED',
    BOOKING_RQUESTED: 'BOOKING.REQUESTED',
    RESCHEDULE_ACCEPTED: 'RESCHEDULE.ACCEPTED',
    RESCHEDULE_DECLINED: 'RESCHEDULE.DECLINED',
    RESCHEDULE_REQUESTED: 'RESCHEDULE.REQUESTED'
  },
  messagingSystem: {
    defaultThreadPageLimit: 10,
    defaultThreadPage: 1,
    messageActionFilters: {
      sessionFromAndToDateFormat: 'D-M-YYYY'
    },
    messageThreadItem: {
      maxMembersNameChars: 20
    },
    messageAttachment: {
      imageAttachmentName: 'image',
      fileAttachmentName: 'attachment'
    },
    MESSAGE_TYPE: {
      MESSAGE_SENT: 'MESSAGE.SENT',
      MESSAGE_RECEIVED: 'MESSAGE.RECEIVED',
      BOOKING: 'BOOKING',
      SSP_OUT_OF_COACHLIST: 'SSP_OUT_OF_COACHLIST', // SSP NO LONGER PART OF CAOCHLIST
      BOOKING_DECLINED_PROFILE: 'BOOKING_DECLINED_PROFILE',
      BOOKING_DECLINED_SCHEDULE: 'BOOKING_DECLINED_SCHEDULE',
      RATE_SESSION: 'RATE_SESSION',
      REFUND_SUCCESSFUL: 'REFUND_SUCCESSFUL',
      SESSION_COMPLETED: 'SESSION_COMPLETED',
      RESCHEDULE_REQUEST: 'RESCHEDULE_REQUEST',
      RESCHEDULE_REQUEST_DECLINED: 'RESCHEDULE_REQUEST_DECLINED',
      BOOKING_PARTAILLY_ACCEPTED: 'BOOKING_PARTAILLY_ACCEPTED'
    },
    metadataPollDelay: 60000,
    messageSearchDebounceTimeout: 400,
    threadLabelColors: [
      'msg_messagesList-label--colorGreen',
      'msg_messagesList-label--colorYellow',
      'msg_messagesList-label--colorPurple'
    ],
    messageRecipientProfileTypes: [
      {
        type: 'team',
        displayName: 'typeTeam'
      },
      {
        type: 'session',
        displayName: 'typeSession'
      },
      {
        type: 'athlete',
        displayName: 'typeAthlete'
      }
    ],
    messageThreadSorters: {
      sortby: [
        {
          displayTextKey: 'recieved',
          value: 'recieved'
        },
        {
          displayTextKey: 'sender',
          value: 'sender'
        }
      ],
      orderBy: [
        {
          displayTextKey: 'newest',
          value: 'newest'
        },
        {
          displayTextKey: 'oldest',
          value: 'oldest'
        }
      ]
    },
    messageThreadFilters: {
      messageTypes: [
        {
          displayName: 'bookingRequest',
          value: 'BOOKING_REQUEST.ALL',
          sub: [
            {
              displayName: 'accepted',
              value: 'BOOKING_REQUEST.ACCEPTED'
            },
            {
              displayName: 'declined',
              value: 'BOOKING_REQUEST.DECLINED'
            }
          ]
        },
        {
          displayName: 'enquiry',
          value: 'ENQUIRY.ALL',
          sub: [

            {
              displayName: 'notResponded',
              value: 'ENQUIRY.NOT_RESPONDED'
            },
            {
              displayName: 'sentCustomPackage',
              value: 'ENQUIRY.SEND_CUSTOM_PACKAGE'
            }
          ]
        },
        {
          displayName: 'rescheduleRequest',
          value: 'RESCHEDULE_REQUEST.ALL',
          sub: [
            {
              displayName: 'accepted',
              value: 'RESCHEDULE_REQUEST.ACCEPTED'
            },
            {
              displayName: 'declined',
              value: 'RESCHEDULE_REQUEST.DECLINED'
            }
          ]
        },
        {
          displayName: 'conversation',
          value: 'CONVERSATION'
        }
      ]
    }
  },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  offerTerminologies: {
    Session: 'S',
    Lesson: 'L',
    Class: 'C',
    Training: 'T'
  },
  assetsBasePath: './',
  profileBaseUrl: 'https://coachlist.com/profile/',
  phoneTypes: {
    landline: 'landline',
    mobile: 'mobile'
  },
  tokenQueryStringName: 'token',
  jwtTokenNameInLocalStorage: 'coachlistJwtAuthToken',
  userTypes: {
    ssp: {
      name: 'ssp',
      sspSubTypes: {
        ISP: 'isp',
        CAMP: 'camp',
        BUSINESS: 'business',
        SERVICE_PROVIDER: 'service-provider'
      }
    }
  },
  genders: [
    {
      displayName: 'AccountDetails.genderMale',
      value: 'M'
    },
    {
      displayName: 'AccountDetails.genderFemale',
      value: 'F'
    },
    {
      displayName: 'AccountDetails.genderOther',
      value: 'O'
    }
  ],
  defaultPosition: {
    lat: 38.68551,
    lng: -96.503906
  },
  defaultZoom: 4,
  minZoom: 2,
  zoomLevels: {
    country: 4,
    state: 7,
    city: 15
  },
  selectedSessionColor: '#caf39c',
  normalSessionColor: '#eeb0ec',
  googleMapUrl: 'https://maps.googleapis.com/maps/api/js?key={key}&libraries=geometry,places',
  dashboardUrl: configuration.dashboardBaseUrl,
  dashboardLoginUrl: configuration.baseUrl + '/login',
  dashboardRegisterUrl: configuration.baseUrl + '/register',
  dashboardHost: configuration.dashboardBaseUrl,
  dashboardShoppingCart: configuration.dashboardBaseUrl + '/#/shopping-cart',
  auth: {
    localStorage: {
      keys: {
        registration: 'registration',
        shortRegRedirectUrl: 'shortRegRedirectUrl'
      },
      registration: {
        short: 'short'
      }
    }
  }
};

export default config;
