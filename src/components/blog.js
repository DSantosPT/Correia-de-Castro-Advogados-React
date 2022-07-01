import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton from './secondary-button'
import PostReaction from './post-reaction'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <div className="blog-story">
        <span className="blog-text textLG">
          <span>March 1, 2019</span>
        </span>
        <h3 className="blog-text02 text2XL">{props.heading}</h3>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-image"
        />
        <span className="blog-text03 textLG">
          <span className="blog-text04">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn&apos;t scroll to get here. Add a button if you want the user
            to see more. We are here to make life better.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className="blog-text07">
            And now I look and look around and there’s so many Kanyes I&apos;ve
            been trying to figure out the bed design for the master bedroom at
            our Hidden Hills compound... and thank you for turning my personal
            jean jacket into a couture piece.
          </span>
          <br></br>
        </span>
        <div className="blog-container01">
          <span className="textLG">
            <span className="blog-text09">&quot;</span>
            <span className="blog-text10">
              And thank you for turning my personal jean jacket into a couture
              piece.
            </span>
            <span className="blog-text11">&quot;</span>
          </span>
          <span className="blog-text12">
            <span className="blog-text13">Kanye West, Producer.</span>
            <span className="blog-text14"></span>
          </span>
        </div>
        <h3 className="blog-text15 text2XL">{props.heading1}</h3>
        <span className="blog-text16 textLG">
          <span className="blog-text17">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn&apos;t scroll to get here. Add a button if you want the user
            to see more. We are here to make life better.
          </span>
          <br></br>
        </span>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="blog-image1"
        />
        <h3 className="blog-text18 text2XL">{props.heading2}</h3>
        <span className="blog-text19 textLG">
          <span className="blog-text20">
            We are here to make life better. And now I look and look around and
            there’s so many Kanyes I&apos;ve been trying to figure out the bed
            design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            I speak yell scream directly at the old guard on behalf of the
            future. daytime All respect prayers and love to Phife’s family Thank
            you for so much inspiration
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className="blog-text23">
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife’s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I&apos;m so proud of the nr #1 song in the country. Panda!
            Good music 2016!
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span className="blog-text26">
            I love this new Ferg album! The Life of Pablo is now available for
            purchase I have a dream. Thank you to everybody who made The Life of
            Pablo the number 1 album in the world! I&apos;m so proud of the nr
            #1 song in the country. Panda! Good music 2016!
          </span>
          <br></br>
          <br></br>
        </span>
        <div className="blog-post">
          <span className="blog-text27 textXL">{props.text}</span>
          <div className="blog-divider"></div>
          <div className="blog-container02">
            <div className="blog-container03">
              <img
                alt={props.image_alt4}
                src={props.image_src4}
                className="blog-image2"
              />
              <div className="blog-container04">
                <span className="blog-text28 textSM">{props.text7}</span>
                <div className="blog-container05">
                  <span className="blog-text29 textXS">{props.text8}</span>
                </div>
              </div>
            </div>
            <SecondaryButton button="FOLLOW"></SecondaryButton>
          </div>
          <span className="blog-text30 textMD">
            <span className="blog-text31">
              Personal profiles are the perfect way for you to grab their
              attention and persuade recruiters to continue reading your CV
              because you’re telling them from the off exactly why they should
              hire you.
            </span>
            <br></br>
          </span>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="blog-image3"
          />
          <div className="blog-container06">
            <div className="blog-container07">
              <svg viewBox="0 0 1024 1024" className="blog-icon">
                <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
              </svg>
              <span className="blog-text32 textXS">{props.text3}</span>
              <svg viewBox="0 0 1024 1024" className="blog-icon2">
                <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
              </svg>
              <span className="blog-text33 textXS">{props.text4}</span>
              <svg viewBox="0 0 1024 1024" className="blog-icon4">
                <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
              </svg>
              <span className="blog-text34 textXS">{props.text5}</span>
            </div>
            <div className="blog-container08">
              <img
                alt={props.image_alt5}
                src={props.image_src5}
                className="blog-image4"
              />
              <img
                alt={props.image_alt6}
                src={props.image_src6}
                className="blog-image5"
              />
              <img
                alt={props.image_alt7}
                src={props.image_src7}
                className="blog-image6"
              />
              <span className="blog-text35 textXS">{props.text6}</span>
            </div>
          </div>
          <div className="blog-divider1"></div>
          <span className="blog-text36 textSM">{props.text1}</span>
          <PostReaction
            name="Michael Lewis"
            likes="3"
            image_src="/playground_assets/team1-200h.jpg"
          ></PostReaction>
          <PostReaction
            name="Jessica Stones"
            text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down."
            shares="1"
            image_src="/playground_assets/team6-200h.jpg"
          ></PostReaction>
          <span className="blog-text37 textSM">{props.text2}</span>
          <div className="blog-container09">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="blog-image7"
            />
            <textarea
              rows="1"
              placeholder={props.textarea_placeholder}
              className="blog-textarea textarea textSM"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

Blog.defaultProps = {
  image_alt4: 'image',
  image_src4: '/playground_assets/team5-200w.jpg',
  image_src1: '/playground_assets/sofia-kuniakina-1100w.jpg',
  image_alt5: 'image',
  text5: '12',
  image_src3: '/playground_assets/team4-200h.png',
  image_alt1: 'image',
  heading1: 'Using Video Games To Generate Clicks',
  image_alt3: 'image',
  heading: 'The Castle Looks Different at Night...',
  image_alt7: 'image',
  image_src2: '/playground_assets/new-york-city-1400w.jpg',
  text: 'What people say...',
  image_src5: '/playground_assets/team5-200w.jpg',
  text6: 'and 30+ more',
  text2: 'Load next',
  image_src6: '/playground_assets/team6-200h.jpg',
  text7: 'JOHN SNOW',
  image_alt6: 'image',
  image_src: '/playground_assets/new-york-city-1400w.jpg',
  image_alt2: 'image',
  text1: 'Load previous',
  text4: '36',
  textarea_placeholder: 'Write your comment',
  text3: '150',
  image_src7: '/playground_assets/team1-200h.jpg',
  heading2: 'Rest of the Story',
  image_alt: 'image',
  text8: '3 days ago',
}

Blog.propTypes = {
  image_alt4: PropTypes.string,
  image_src4: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt5: PropTypes.string,
  text5: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt1: PropTypes.string,
  heading1: PropTypes.string,
  image_alt3: PropTypes.string,
  heading: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
  image_src5: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  image_src6: PropTypes.string,
  text7: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src: PropTypes.string,
  image_alt2: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text3: PropTypes.string,
  image_src7: PropTypes.string,
  heading2: PropTypes.string,
  image_alt: PropTypes.string,
  text8: PropTypes.string,
}

export default Blog
