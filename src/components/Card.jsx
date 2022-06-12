const Card = () => {
  return (
    <div className='container-content__card'>
      <div className='favorite'>
        <img src='/img/unliked.svg' alt='unliked' />
      </div>
      <img
        width={140}
        height={115}
        src='/img/sneakers1.jpg'
        alt='sneakers
            '
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
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
  );
};

export default Card;