import axios from 'axios'
import {MHOST} from '@/common/js/config.js'

export function getTop () {
    const url = MHOST + `/toplist`
    return axios.get(url)
} 