import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare as Chat, Server, Wifi, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header com logo */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="InfraTech Logo" className="w-16 h-auto mr-3" />
            <h1 className="text-2xl font-bold text-blue-800">InfraTech Dados & Elétrica</h1>
          </div>
          <ul className="flex space-x-6">
            <li><a href="#servicos" className="text-gray-700 hover:text-blue-600">Serviços</a></li>
            <li><a href="#sobre" className="text-gray-700 hover:text-blue-600">Sobre</a></li>
            <li><a href="#contato" className="text-gray-700 hover:text-blue-600">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero com imagem de servidores */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/servidores.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">Soluções em Redes e Elétrica</h2>
          <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl">
            Infraestrutura de redes estruturadas e instalações elétricas com excelência técnica e segurança.
          </p>
          <Button asChild>
            <a href="#contato" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </section>

      {/* Seção de Serviços com ícones */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 hover:shadow-xl transition rounded-lg">
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cabeamento Estruturado</h3>
              <p>Instalação de redes em CAT5e, CAT6 e fibra óptica, garantindo performance e estabilidade.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:shadow-xl transition rounded-lg">
              <Wifi className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Redes Wireless</h3>
              <p>Projetos de redes sem fio otimizadas para cobertura total e segurança de dados.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:shadow-xl transition rounded-lg">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instalações Elétricas</h3>
              <p>Serviços de baixa e média tensão com foco em eficiência energética e conformidade técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nós em duas colunas */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img
            src="/sobre-infra.jpg"
            alt="Equipe InfraTech"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-80"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Quem Somos</h2>
            <p className="mb-4">
              A InfraTech Dados & Elétrica oferece soluções em infraestrutura e elétrica com uma equipe
              especializada e certificada. Atendemos desde pequenas empresas até grandes corporações,
              sempre com foco em qualidade, prazo e segurança.
            </p>
            <p>
              Nosso compromisso é entregar projetos que superem expectativas, utilizando as melhores práticas
              e tecnologias do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para ação intermediária */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pronto para turbinar sua infraestrutura?</h2>
        <Button asChild>
          <a
            href="#contato"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold transition hover:bg-gray-100"
          >
            Fale Conosco via WhatsApp
          </a>
        </Button>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Entre em Contato</h2>
          <p className="mb-6">
            Tire suas dúvidas e receba um orçamento personalizado pelo WhatsApp.
          </p>
          <Button asChild>
            <a
              href="https://wa.me/5511986489257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Chat className="w-6 h-6 mr-2" /> WhatsApp 11 98648-9257
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} InfraTech Dados & Elétrica. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/5511986489257"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition"
      >
        <Chat className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
