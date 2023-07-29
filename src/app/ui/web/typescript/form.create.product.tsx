import React from 'react';

const FormCreateProduct: React.FC = () => {
  const htmlContent = require('../views/form.create.product.html').default;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default FormCreateProduct;
