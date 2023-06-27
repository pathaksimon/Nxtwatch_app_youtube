import styled from 'styled-components'

export const Homefirstcard = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#181818' : 'white')};
  width: 250px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  height: 90%;
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    display: none;
  }
`

export const Hometop = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const Homebottom = styled.div`
  width: 100%;
`

export const ULL = styled.ul`
  width: 95%;

  padding-left: 0px;
`
export const LI = styled.li`
  width: 35%;
  margin-bottom: 10px;
  margin-left: 30px;

  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
export const Bottomfirst = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Imageicon = styled.img`
  width: 15%;
`
export const Paragraphs = styled.p`
  font-size: 15px;
`
export const Heada = styled.h1`
  font-size: 10px;
`
