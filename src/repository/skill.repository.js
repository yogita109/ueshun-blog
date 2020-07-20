import axios from 'axios'

export default function () {
  return axios.get('https://gist.githubusercontent.com/yogita109/d9650b5e19f0174c8a744a21a5232db4/raw/daf4e5702ad50f83d600194805f7dc2dac5fcd71/skill-sheet.md')
}
