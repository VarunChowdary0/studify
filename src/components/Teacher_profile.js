import React from 'react'

const Teacher_profile = () => {
  return (
    <>
      <section class="teacher-profile">

<h1 class="heading">profile details</h1>

<div class="details">
   <div class="tutor">
      <img src="images/pic-2.jpg" alt=""/>
      <h3>john deo</h3>
      <span>developer</span>
   </div>
   <div class="flex">
      <p>total playlists : <span>4</span></p>
      <p>total videos : <span>18</span></p>
      <p>total likes : <span>1208</span></p>
      <p>total comments : <span>52</span></p>
   </div>
</div>

</section>

<section class="courses">

<h1 class="heading">our courses</h1>

<div class="box-container">

   <div class="box">
      <div class="thumb">
         <img src="images/thumb-1.png" alt=""/>
         <span>10 videos</span>
      </div>
      <h3 class="title">complete HTML tutorial</h3>
      <a href="/Playlist" class="inline-btn">view playlist</a>
   </div>

   <div class="box">
      <div class="thumb">
         <img src="images/thumb-2.png" alt=""/>
         <span>10 videos</span>
      </div>
      <h3 class="title">complete CSS tutorial</h3>
      <a href="/Playlist" class="inline-btn">view playlist</a>
   </div>

   <div class="box">
      <div class="thumb">
         <img src="images/thumb-3.png" alt=""/>
         <span>10 videos</span>
      </div>
      <h3 class="title">complete javascript tutorial</h3>
      <a href="/Playlist" class="inline-btn">view playlist</a>
   </div>

   <div class="box">
      <div class="thumb">
         <img src="images/thumb-4.png" alt=""/>
         <span>10 videos</span>
      </div>
      <h3 class="title">complete Boostrap tutorial</h3>
      <a href="/Playlist" class="inline-btn">view playlist</a>
   </div>

</div>

</section>
    </>
  )
}

export default Teacher_profile