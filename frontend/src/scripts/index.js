import 'styles/index.scss';
import Uploader from './uploader';
import StatisticsPainter from './statistics_painter/statistics_painter';
// bootstrap
import 'bootstrap';

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
let uploader = new Uploader('uploader-form');

uploader.subscribe(new StatisticsPainter('statistics-container'));