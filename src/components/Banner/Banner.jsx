import React from 'react'
import './Banner.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results[7])
    })
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
        <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner_buttons">
            <buttton className="button">Play</buttton>
            <button className="button">My List</button>
        </div>
        <h1 className="desc">{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner