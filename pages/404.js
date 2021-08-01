import Link from 'next/link'
const notFound = () => {
  return (
    <div className='not-found'>
      <img src='./logo.svg'></img>
      <h1>Oooops...</h1>
      <h2>The page you are trying to reach cannot be found.</h2>
      <p>
        Go back to the {}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default notFound
