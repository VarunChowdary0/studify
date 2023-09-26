import React from 'react'

const Watch_Video = () => {
  return (
    <>
        <section class="watch-video">

            <div class="video-container">
              <div class="video">
              <iframe width="950" height="534" src="https://www.youtube.com/embed/HcOc7P5BMi4" title="HTML Tutorial for Beginners | Complete HTML with Notes &amp; Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3 class="title">complete HTML tutorial (part 01)</h3>
              <div class="info">
                  <p class="date"><i class="fas fa-calendar"></i><span>22-10-2022</span></p>
                  <p class="date"><i class="fas fa-heart"></i><span>44 likes</span></p>
              </div>
              <div class="tutor">
                  <img src="images/pic-2.jpg" alt=""/>
                  <div>
                    <h3>john deo</h3>
                    <span>developer</span>
                  </div>
              </div>
              <form action="" method="post" class="flex">
                  <a href="playlist.html" class="inline-btn">view playlist</a>
                  <button><i class="far fa-heart"></i><span>like</span></button>
              </form>
              <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
              </p>
            </div>

            </section>

            <section class="comments">

            <h1 class="heading">5 comments</h1>

            <form action="" class="add-comment">
              <h3>add comments</h3>
              <textarea name="comment_box" placeholder="enter your comment" required maxLength="1000" cols="30" rows="10"></textarea>
              <input type="submit" value="add comment" class="inline-btn" name="add_comment"/>
            </form>

            <h1 class="heading">user comments</h1>

            <div class="box-container">

              <div class="box">
                  <div class="user">
                    <img src="images/pic-1.jpg" alt=""/>
                    <div>
                        <h3>pavan bejadi</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">this is a comment from pavanbejadi300</div>
                  <form action="" className="flex-btn">
                    <input type="submit" value="edit comment" name="edit_comment" className="inline-option-btn" />
                    <input type="submit" value="delete comment" name="delete_comment" className="inline-delete-btn" />
                  </form>
              </div>

              <div class="box">
                  <div class="user">
                    <img src="images/pic-2.jpg" alt=""/>
                    <div>
                        <h3>john deo</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">awesome tutorial!
                    keep going!</div>
              </div>

              <div class="box">
                  <div class="user">
                    <img src="images/pic-3.jpg" alt=""/>
                    <div>
                        <h3>john deo</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">amazing way of teaching!
                    thank you so much!
                  </div>
              </div>

              <div class="box">
                  <div class="user">
                    <img src="images/pic-4.jpg" alt=""/>
                    <div>
                        <h3>john deo</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">loved it, thanks for the tutorial!</div>
              </div>

              <div class="box">
                  <div class="user">
                    <img src="images/pic-5.jpg" alt=""/>
                    <div>
                        <h3>john deo</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">this is what I have been looking for! thank you so much!</div>
              </div>

              <div class="box">
                  <div class="user">
                    <img src="images/pic-2.jpg" alt=""/>
                    <div>
                        <h3>john deo</h3>
                        <span>22-10-2022</span>
                    </div>
                  </div>
                  <div class="comment-box">thanks for the tutorial!

                    how to download source code file?
                  </div>
              </div>

            </div>

            </section>
    </>
  )
}

export default Watch_Video