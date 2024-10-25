import './Links.css';

function Links({ props }) {
  const {img, altImg, url, text, param} = props;

  const renderContent = () => {
    const contentMap = {
      img: <img className='img' src={ img } alt={ altImg } />,
      text: <h2 className='text'>{ text }</h2>,
    };

    return contentMap[param] || (
      <>
        <img className='img' src={ img } alt={ altImg } />
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