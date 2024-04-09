import React from 'react';

const SecretMessage = () => {
  return (
    <div className="container p-8 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Secret Message</h2>
        <p className="text-lg text-gray-500">Decode the hidden message</p>
      </div>

      <div className="p-6 mb-8 bg-gray-900 rounded-lg shadow-lg">
        <h3 className="mb-4 text-2xl font-bold text-green-500">Get a letter:</h3>
        <p className="text-xl text-white">hvs qzis tcf twfgh qvofsqhsf wg hvs gmapcz ct vcfig</p>
      </div>

      <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
        <h3 className="mb-4 text-2xl font-bold text-yellow-500">Get a number:</h3>
        <p className="text-xl text-white">- .-. ..- - .... / .- .-.. --- -. . / - .-. .. ..- -- .--. .... ... / .-.-.- / .... --- .-- / -- .- -. -.-- / ..-. .- -.-. . ... / -.. --- . ... / - .... . / .-.. .. --- -. / --- ..-. / - .-. ..- - .... / .... .- ...- . / ..--..</p>
      </div>
    </div>
  );
};

export default SecretMessage;
