import ccByNc from '../assets/ccByNc.png';

const Footer = () => {

  return (

    <div className="container m-3">
      <div className="row">
        <div className="col-auto">
          <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer"><img src={ ccByNc } alt="Creative Commons Attribution-NonCommercial 4.0 International License" height="50"/></a>
        </div>
        <div className="col fw-light lh-1 text-break">
          <p>CinnaKanban by <a href="https://github.com/heatherdice/Group-Project" target="_blank" rel="noreferrer">Dice, Fenton, Hetrick, Johnson, and Scroggs</a> is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Based on a work at <a href="https://github.com/heatherdice/Group-Project" target="_blank" rel="noreferrer">https://github.com/heatherdice/Group-Project</a>.</p>
        </div>
      </div>
    </div>

  );

};

export default Footer;