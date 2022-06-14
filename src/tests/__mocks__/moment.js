// forcing a specific moment in time, so tests that require timestamp...
// to not change don't fail after a rerun
const moment = require.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
