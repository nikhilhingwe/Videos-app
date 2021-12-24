// import React from 'react';
import axios from 'axios';
const KEY = 'AIzaSyCvlaEQ8lpGCrnLb36EjFX1P_W9QpY7cTA';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key : KEY 
    }

})
