import Card from './components/Card';
import Header from './components/Header';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className='wrapper'>
      <RightSide />
      <Header />
      <div className='container'>
        <div className='search-block'>
          <h1 className='title'>Все кроссовки</h1>
          <div className='search'>
            <img width={20} height={20} src='/img/search.svg' alt='search' />
            <input type='search' />
          </div>
        </div>

        <div className='container-content'>
          <Card />
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/liked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers2.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers3.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>8 499 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers4.jpg'
              alt='sneakers
            '
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>8 999 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers5.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>15 199 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers6.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>11 299 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers7.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>10 799 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers8.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>16 499 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers9.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>13 999 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers10.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>8 499 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers11.jpg'
              alt='sneakers
            '
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>8 999 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='container-content__card'>
            <div className='favorite'>
              <img src='/img/unliked.svg' alt='unliked' />
            </div>
            <img
              width={140}
              height={115}
              src='/img/sneakers12.jpg'
              alt='sneakers
            '
            />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className='card-info'>
              <div>
                <span>Цена:</span>
                <p>11 299 руб.</p>
              </div>
              <button>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                    fill='#D3D3D3'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
