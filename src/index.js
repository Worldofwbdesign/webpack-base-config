const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
  import(/* webpackChunkName: "imageViewer" */ './image_viewer');
}

document.body.appendChild(button);
