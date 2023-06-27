import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'
import {
  Homefirstcard,
  Hometop,
  Homebottom,
  ULL,
  LI,
  Bottomfirst,
  Imageicon,
  Paragraphs,
  Heada,
} from './styledComponents'
import Differentcontext from '../../context'

const Leftsection = () => (
  <Differentcontext.Consumer>
    {value => {
      const {backColor} = value
      return (
        <Homefirstcard bgcolor1={backColor}>
          <Hometop>
            <ULL>
              <LI>
                <Link to="/">
                  {' '}
                  <AiFillHome />
                  Home
                </Link>
              </LI>
              <LI>
                <Link to="/trending">
                  {' '}
                  <AiFillFire />
                  Trending
                </Link>
              </LI>
              <LI>
                <Link to="/gaming">
                  <SiYoutubegaming />
                  Gaming
                </Link>
              </LI>
              <LI>
                <Link to="/savedvideos">
                  <GiSaveArrow />
                  Saved Videos
                </Link>
              </LI>
            </ULL>
          </Hometop>
          <Homebottom>
            <Bottomfirst>
              <Paragraphs>CONTACT US</Paragraphs>
            </Bottomfirst>
            <Bottomfirst>
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </Bottomfirst>

            <Bottomfirst>
              <Paragraphs>
                Enjoy! Now to see your channels and recommendations!
              </Paragraphs>
            </Bottomfirst>
          </Homebottom>
        </Homefirstcard>
      )
    }}
  </Differentcontext.Consumer>
)

export default Leftsection
