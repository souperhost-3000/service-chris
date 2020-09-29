/* eslint-disable camelcase */
const average = ({ user_data }) => {
  const n = user_data.length;
  const resultObject = {
    cleanliness: 0,
    communication: 0,
    checkin: 0,
    accuracy: 0,
    location: 0,
    value: 0,
    totalAvg: 0,
  };

  for (let i = 0; i < user_data.length; i += 1) {
    resultObject.cleanliness += user_data[i].cleanliness;
    resultObject.communication += user_data[i].communication;
    resultObject.checkin += user_data[i].checkin;
    resultObject.accuracy += user_data[i].accuracy;
    resultObject.location += user_data[i].location;
    resultObject.value += user_data[i].value;

    if (i === user_data.length - 1) {
      const keys = Object.keys(resultObject);
      for (let j = 0; j < keys.length; j += 1) {
        resultObject[keys[j]] /= n;
        resultObject[keys[j]] = Number(resultObject[keys[j]].toFixed(1));
      }
    }
  }
  resultObject.totalAvg = (resultObject.cleanliness
    + resultObject.checkin + resultObject.communication
    + resultObject.accuracy + resultObject.location
    + resultObject.value) / 6;
  resultObject.totalAvg = Number(resultObject.totalAvg.toFixed(2));

  return resultObject;
};

export default average;
