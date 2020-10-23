import axios from 'axios'
import {MHOST, MIGU_HOST} from '@/common/js/config.js'

export function getSearchSongs (name, page) {
    const url = MHOST + `/search?keyword=${name}&offset=${page}`
    
    return axios.get(url)
}

export function getSongDetail (id) {
    const url = MHOST + `/song/detail?ids=${id}`
    
    return axios.get(url) 
}

export function getSearchSongsMiGu (kwd) {
    const url = MIGU_HOST + ``

    return axios.get(url)
}