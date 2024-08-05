import {notNull, isValidDate, isNumber} from '../../../validators/common/util';
import moment from 'moment';

const validateProfile = (profile, sport) => {
  const validation = {
    gender: false,
    dob: false,
    sport: false,
    experience: false,
    valid: false
  };
  const {gender, dob} = profile;
  const {id, name, yearOfExperience, skillLevel} = sport;
  validation.gender = notNull(gender);
  validation.dob = isValidDate(dob) && moment(dob).add(16, 'years').isBefore(moment(new Date())) && moment(dob).isAfter(moment(new Date()).subtract(100, 'years'));
  validation.sport = notNull(id) && notNull(name);
  validation.experience = isNumber(yearOfExperience) && parseInt(yearOfExperience, 10) > 0;
  validation.skillLevel = notNull(skillLevel.id) && notNull(skillLevel.name);
  validation.valid = validation.gender && validation.dob && validation.sport && validation.experience &&
  validation.skillLevel;
  return validation;
};

export default validateProfile;
