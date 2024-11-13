import './Links.css';

function Links({ imgPath, altImg, url, text, param }) {
  const renderContent = () => {
    const contentMap = {
      img: <img className='img' src={ imgPath } alt={ altImg } />,
      text: <h2 className='text'>{ text }</h2>,
    };

    return contentMap[param] || (
      <>
        <div className='img'><img src={ imgPath } alt={ altImg } /></div>
        <h2 className='text'>{ text }</h2>
      </>
    );
  };

  return (
    <a className='link' href={ url }>
      { renderContent() }
    </a>
  );
}

export default Links;