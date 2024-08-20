import React, { useState } from 'react';

const Logout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione sua lógica de cadastro aqui
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Submeter o formulário de cadastro
    console.log("Cadastro realizado:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Cadastro</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-semibold mb-2">Confirme a Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Já tem uma conta?{' '}
          <a href="#" className="text-blue-500 hover:underline">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default Logout;
