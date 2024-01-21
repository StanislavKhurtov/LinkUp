import { Link } from 'react-router-dom'

export const Aside = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Profile</Link>
          </li>
          <li>
            <Link to={'/message'}>Dialogs</Link>
          </li>
          <li>
            <Link to={'/music'}>Music</Link>
          </li>
          <li>
            <Link to={'/news'}>News</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
