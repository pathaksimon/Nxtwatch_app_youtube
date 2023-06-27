import styled from 'styled-components'

export const Bigcontainer = styled.div`
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : 'white')};
`

export const LoginContainer = styled.div`
  width: 40%;
  background-color: blue;
  @media (max-width: 767px) {
    width: 100%;
  }
}
`

export const Toplogin = styled.div`
  background-color: brown;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Bottomlogin = styled.div`
  background-color: yellow;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const BringCenter = styled.div`
  width: 85%;
  background-color: aquamarine;
  margin-top: 35px;
`
export const Image = styled.img`
  width: 60%;
`
export const Label1 = styled.label`
  font-size: 18px;
`

export const Input1 = styled.input`
  background-color: white;
  width: 45%;
`
export const Input2 = styled.input`
  background-color: white;
`

export const Button = styled.button`
  background-color: #3b82f6;
  width: 100%;
  margin-top: 20px;
  color: #ffffff;
`
export const Para = styled.p`
  font-size: 15px;
  color: #0f0f0f;
`
export const Tick = styled.div`
  display: flex;
`

export const Form = styled.form`
  background-color: transparent;
`
