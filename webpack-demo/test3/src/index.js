import _ from 'lodash';
import './1.css';

function component() {
        var element = document.createElement('div');

               // Lodash, now imported by this script
                element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

document.body.appendChild(component());