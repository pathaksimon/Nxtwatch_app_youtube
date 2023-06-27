import styled from 'styled-components'

export const Bottom = styled.div`
  display: flex;
  width: 100%;
`

export const Rightsectionoftrending = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : 'white')};
  min-height: 100vh;
  margin-top: 60px;

  width: calc(100% - 250px);
  margin-left: 250px;

  @media (max-width: 576px) {
    margin-left: 0px;
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    margin-left: 0px;
    width: 100%;
  }
`
export const Toppy = styled.div`
  width: 100%;
  background-color: grey;
`
export const ULU2 = styled.ul`
  width: 95%;
  padding-left: 0px;
`
export const Lista34 = styled.li`
  width: 90%;
  list-style-type: none;
  display: flex;
`
export const Imaggecard = styled.div`
  width: 45%;
  margin-left: 10px;
`
export const Detailscard = styled.div`
  width: 55%;
  margin-left: 10px;
`
export const Imageofprofile = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 10px;
`
export const Paragraph = styled.p`
  font-size: 10px;
`
