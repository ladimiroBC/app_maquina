import "./app.styles.css";
import React from 'react';
import ReactDOM from 'react-dom';
import FormCreateProduct from './app/ui/web/typescript/form.create.product';

function showMyView() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<FormCreateProduct />, rootElement);
  }
}

console.log("Hola desde webpack :)....");
console.log("Cuando empezamos a desarrollar la app :!..");



