const BaseUrl = 'https://itunes.apple.com/search?term=Michael+jackson';

import axios from 'axios';


export const getSongsList = () => {
    return axios.get(BaseUrl)
        .then(res => {
            // console.log('Get Songs List', res)
            if (res.status == 200) {
                return res.data.results
            }
            else {
                return [];
            }
        }).catch((err) => {
            console.log("error while api fetch", err)
        })
}