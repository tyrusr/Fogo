//imports
import { useState, useEffect } from 'react'

//function and any parameters for args
export default function GetProfile() {
  //deconstructors go here

  useEffect(() => {
    async function Profile() {
      try {
        //hook call goes here
      } catch(err) {
        //handle error
      } 
    }

    Profile();
  }, []);

  //a h1 or something with ternary operator where if user state is null then it says loading or it displays the user message and other details when not null
  //call other component ie profile listings inside this one
  return (
    <h1>wip</h1>
  );

}
