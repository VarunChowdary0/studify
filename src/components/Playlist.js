import React from 'react'
import { html1 } from '../assects/course_thumnail'

const Playlist = () => {
  return (
    <>
      <section class="playlist-details">

          <h1 class="heading">playlist details</h1>

          <div class="row">

            <div class="column">
                <form action="" method="post" class="save-playlist">
                  <button type="submit"><i class="far fa-bookmark"></i> <span>save playlist</span></button>
                </form>

                <div class="thumb">
                  <img src="images/thumb-1.png" alt=""/>
                  <span>10 videos</span>
                </div>
            </div>
            <div class="column">
                <div class="tutor">
                  <img src="images/pic-2.jpg" alt=""/>
                  <div>
                      <h3>john deo</h3>
                      <span>21-10-2022</span>
                  </div>
                </div>

                <div class="details">
                  <h3>complete HTML tutorial</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
                  <a href="/Teacher_profile" class="inline-btn">view profile</a>
                </div>
            </div>
          </div>

          </section>

          <section class="playlist-videos">

          <h1 class="heading">playlist videos</h1>

          <div class="box-container">

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src={html1} alt=""/>
                <h3>complete HTML tutorial (part 01)</h3>
            </a>

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src="images/post-1-2.png" alt=""/>
                <h3>complete HTML tutorial (part 02)</h3>
            </a>

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src="images/post-1-3.png" alt=""/>
                <h3>complete HTML tutorial (part 03)</h3>
            </a>

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src="images/post-1-4.png" alt=""/>
                <h3>complete HTML tutorial (part 04)</h3>
            </a>

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src="images/post-1-5.png" alt=""/>
                <h3>complete HTML tutorial (part 05)</h3>
            </a>

            <a class="box" href="/Watch_Video">
                <i class="fas fa-play"></i>
                <img src="images/post-1-6.png" alt=""/>
                <h3>complete HTML tutorial (part 06)</h3>
            </a>

          </div>

          </section>
    </>
  )
}

export default Playlist