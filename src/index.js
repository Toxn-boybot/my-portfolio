import { createRoot } from 'react-dom/client';
import App from './App';

// import './css/circle.css';
// import './css/fm.revealator.jquery.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/preloader.min.css';
import './css/skins/yellow.css';
import './css/style.css';


import './index.css'


// import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
// import './js/jquery-3.5.0.min.js';
// import './js/fm.revealator.jquery.min';



// import './js/cbpGridGallery.js';
// import './js/classie.js';
// import './js/custom.js';
// import './js/fm.revealator.jquery.min.js';


// import './js/imagesloaded.pkgd.min.js';

// import './js/jquery.hoverdir';

// import './js/modernizr.custom';

// import './js/preloader.min';
import './js/myAnimations';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
