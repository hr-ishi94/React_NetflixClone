import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(movies);
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}

  const HandleClick=(id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Empty array!');
      }

    })
  }
  
  return (
    <div className='row'>
        <h2 >{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>

            <img onClick={()=> HandleClick(obj.id)} className={props.isSmall? 'smallposter ': 'poster'} src={imageUrl+obj.backdrop_path} alt="" />
          )}
            </div>
           {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost