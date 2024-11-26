import { FadeLoader } from 'react-spinners'

export default function Spinner() {
  const override = {
    display: 'flex',
    margin: '40vh auto'
  }
  return (
    <FadeLoader
      cssOverride={override}
      height={50}
      width={10}
      margin={30}
      color='white'
    />
  )
}
