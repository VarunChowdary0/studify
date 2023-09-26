import React from 'react'

const Teachers = () => {
  return (
    <section class="teachers">

   <h1 class="heading">expert teachers</h1>

   <form action="" method="post" class="search-tutor">
      <input type="text" name="search_box" placeholder="search tutors..." required maxLength="100"/>
      <button type="submit" class="fas fa-search" name="search_tutor"></button>
   </form>

   <div class="box-container">

      <div class="box offer">
         <h3>become a tutor</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
         <a href="/register" class="inline-btn">get started</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-3.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-4.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-5.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-6.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-7.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-8.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>developer</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <a href="/teacher_profile" class="inline-btn">view profile</a>
      </div>

   </div>

</section>
  )
}

export default Teachers