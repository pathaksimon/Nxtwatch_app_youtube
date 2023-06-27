import styled from 'styled-components'

export const Bottom = styled.div`
  display: flex;
  width: 100%;
`

export const Clickedcardright = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : 'white')};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  width: calc(100% - 250px);
  margin-left: 250px;
`
export const VideoPlayer = styled.div`
  width: 100%;
`
export const Bottomvideocard = styled.div`
  width: 100%;
`
export const Bottomfirst1 = styled.div`
  width: 100%;
`

export const Paragraph12 = styled.p`
  font-size: 12px;
  color: ${props => (props.bgcolor1 ? 'white' : '#0f0f0f')};
`

export const Bottomsecond1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Bottomleft = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`

export const Bottomright = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`
export const Likebutton = styled.button`
  width: 30%;
  color: ${props => (props.back ? '#2563eb' : '#64748b')};
`
export const Dislikebutton = styled.button`
  width: 30%;
  color: ${props => (props.back1 ? '#2563eb' : '#64748b')};
`
export const Savebutton = styled.button`
  width: 30%;
  color: ${props => (props.back2 ? '#2563eb' : '#64748b')};
`
export const Hori = styled.hr`
  width: 100%;
`
export const Belowhorifirst = styled.div`
  width: 100%;
`
export const Belowhorisecond = styled.div`
  width: 100%;
`
export const Thumbnailholder = styled.div`
  width: 25%;
  display: flex;
`
export const Imageofprofile = styled.img`
  width: 30%;
`

export const Updown = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
export const Closingpara = styled.p`
  font-size: 15px;
`
