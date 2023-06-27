import {Link} from 'react-router-dom'
import {
  Lista34,
  Imaggecard,
  Detailscard,
  Imageofprofile,
  Heading,
  Paragraph,
} from './styledComponents'

const DetailsGamecard = props => {
  const {first} = props
  const {thumbnailUrl, title, viewCount, id} = first
  return (
    <Link to={`/videos/${id}`}>
      <Lista34>
        <Imaggecard>
          <Imageofprofile src={thumbnailUrl} alt="video thumbnail" />
        </Imaggecard>
        <Detailscard>
          <Paragraph>{title}</Paragraph>
          <Paragraph>{viewCount}</Paragraph>
        </Detailscard>
      </Lista34>
    </Link>
  )
}

export default DetailsGamecard
