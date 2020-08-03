import axios from 'axios'

export default function () {
  return axios.get('https://gist.githubusercontent.com/yogita109/d9650b5e19f0174c8a744a21a5232db4/raw/a37536251f17951a7784b3c539e517edee9aea33/skill-sheet.md')
}
