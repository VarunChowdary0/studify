import React from 'react'
import { BS, JQ, JS, PHP, REACT, SCSS, css, html, mySQL } from '../assects/course_thumnail'

const Courses = () => {
  return (
    <section class="courses">

        <h1 class="heading">our courses</h1>

        <div class="box-container">

            <div class="box">
              <div class="tutor">
                  <img src="images/pic-2.jpg" alt=""/>
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
                  <img src="images/pic-3.jpg" alt=""/>
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
                  <img src="images/pic-4.jpg" alt=""/>
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
                  <img src="images/pic-5.jpg" alt=""/>
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

      </section>
  )
}

export default Courses