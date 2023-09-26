import React from 'react'
import { BS, JQ, JS, PHP, REACT, SCSS, css, html, mySQL } from '../assects/course_thumnail'
import { pic2, pic3, pic4, pic5 } from '../assects/fake_profiles'

const Home = () => {
  return (
    <>
      <section class="home-grid">

        <h1 class="heading">quick options</h1>

        <div class="box-container">

            <div class="box">
              <h3 class="title">likes and comments</h3>
              <p class="likes">total likes : <span>25</span></p>
              <a href="#" class="inline-btn">view likes</a>
              <p class="likes">total comments : <span>12</span></p>
              <a href="#" class="inline-btn">view comments</a>
              <p class="likes">saved playlists : <span>4</span></p>
              <a href="#" class="inline-btn">view playlists</a>
            </div>

            <div class="box">
              <h3 class="title">top categories</h3>
              <div class="flex">
                  <a href="#"><i class="fas fa-code"></i><span>development</span></a>
                  <a href="#"><i class="fas fa-chart-simple"></i><span>business</span></a>
                  <a href="#"><i class="fas fa-pen"></i><span>design</span></a>
                  <a href="#"><i class="fas fa-chart-line"></i><span>marketing</span></a>
                  <a href="#"><i class="fas fa-music"></i><span>music</span></a>
                  <a href="#"><i class="fas fa-camera"></i><span>photography</span></a>
                  <a href="#"><i class="fas fa-cog"></i><span>software</span></a>
                  <a href="#"><i class="fas fa-vial"></i><span>science</span></a>
              </div>
            </div>

            <div class="box">
              <h3 class="title">popular topics</h3>
              <div class="flex">
                  <a href="#"><i class="fab fa-html5"></i><span>HTML</span></a>
                  <a href="#"><i class="fab fa-css3"></i><span>CSS</span></a>
                  <a href="#"><i class="fab fa-js"></i><span>javascript</span></a>
                  <a href="#"><i class="fab fa-react"></i><span>react</span></a>
                  <a href="#"><i class="fab fa-php"></i><span>PHP</span></a>
                  <a href="#"><i class="fab fa-bootstrap"></i><span>bootstrap</span></a>
              </div>
            </div>

            <div class="box">
              <h3 class="title">become a tutor</h3>
              <p class="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
              <a href="/Teachers" class="inline-btn">get started</a>
            </div>

        </div>

      </section>

      <section class="courses">

        <h1 class="heading">our courses</h1>

        <div class="box-container">

            <div class="box">
              <div class="tutor">
                  <img src={pic2} alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={html} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete HTML tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src={pic3} alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={css} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete CSS tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src={pic4} alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={JS} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete JS tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src={pic5} alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={BS} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete Boostrap tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-6.jpg" alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={JQ} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete JQuery tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-7.jpg" alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={SCSS} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete SASS tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-8.jpg" alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={PHP} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete PHP tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-9.jpg" alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={mySQL} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete MySQL tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-1.jpg" alt=""/>
                  <div class="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
              </div>
              <div class="thumb">
                  <img src={REACT} alt=""/>
                  <span>10 videos</span>
              </div>
              <h3 class="title">complete react tutorial</h3>
              <a href="/Playlist" class="inline-btn">view playlist</a>
            </div>

        </div>

        <div class="more-btn">
            <a href="/Courses" class="inline-option-btn">view all courses</a>
        </div>

      </section>

</>
  )
}

export default Home