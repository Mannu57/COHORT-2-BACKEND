import { useState } from "react";
import { createContext } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

  const [song, setSong] = useState({
  "url": "https://ik.imagekit.io/Manu01/cohort-2/moodify/songs/Tu_Hi_Tu_Mera__Raag.FM__KACvhI5db.mp3",
  "posterUrl": "https://ik.imagekit.io/Manu01/cohort-2/moodify/posters/Tu_Hi_Tu_Mera__Raag.FM__pdotYjiyY.jpeg",
  "title": "Tu Hi Tu Mera (Raag.FM)",
  "mood": "happy",
  })

  const [loading, setLoading] = useState(false)

  return(
    <SongContext.Provider 
      value = {{ loading, setLoading, song, setSong}}>
        {children}
    </SongContext.Provider>
  )
}