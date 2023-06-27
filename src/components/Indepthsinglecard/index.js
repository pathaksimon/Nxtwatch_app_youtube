import {Link} from 'react-router-dom'
import {
  Lista12,
  Toplistacard,
  Bottomlistacard,
  Cardimage,
  Bottomfirst1,
  Bottomsecond2,
  Prara,
} from './styledComponents'

const Indepthsinglecard = props => {
  const {first1} = props
  const {channel, thumbnailUrl, title, viewCount, publishedAt, id} = first1
  const {name, profilImageUrl} = channel
  return (
    <Lista12>
      <Link to={`/blogs/${id}`}>
        <Toplistacard>
          <Cardimage src={thumbnailUrl} alt="video thumbnail" />
        </Toplistacard>
        <Bottomlistacard>
          <Bottomfirst1 src={profilImageUrl} alt="channel logo" />
          <Bottomsecond2>
            <Prara>{title}</Prara>
            <Prara>{name}</Prara>
            <Prara>{viewCount}</Prara>
            <Prara>{publishedAt}</Prara>
          </Bottomsecond2>
        </Bottomlistacard>
      </Link>
    </Lista12>
  )
}

export default Indepthsinglecard
