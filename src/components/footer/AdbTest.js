const util = require('util');
const exec = util.promisify(require('child_process').exec);

export async function listAdbDevices() {
  try {
    const { stdout, stderr } = await exec('adb devices');
    console.log('Devices:', stdout);
    console.error('Error:', stderr);
  } catch (error) {
    console.error('Exec error:', error);
  }
}
