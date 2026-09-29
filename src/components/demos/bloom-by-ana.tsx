"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Flower2,
  X,
} from "lucide-react";
import { bloom, waLink, type Servico } from "@/lib/demos";
import { WhatsAppFloat, WhatsAppIcon } from "./shared";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#atelie", label: "O Ateliê" },
  { href: "#sobre-mim", label: "Sobre mim" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contactos", label: "Contactos" },
];

const googleMapsUrl =
  "https://www.google.com/maps/place/Bloom+By+Ana+Portugal/@41.379408,-8.7652036,17z/data=!4m6!3m5!1s0xd24478fd6d547bb:0x4432f0142fbaafcb!8m2!3d41.379408!4d-8.7652036!16s%2Fg%2F11zkjj9g1m";

const googleReviews = [
  {
    nome: "Joana Lima",
    texto:
      "Atendimento excelente, sempre muito atenciosa e disponível para ajudar. As peças são lindíssimas, feitas à mão com imenso cuidado e detalhe, e o facto de serem personalizadas torna tudo ainda mais especial. Dá mesmo para sentir o carinho e a dedicação em cada criação. Recomendo muito!",
  },
  {
    nome: "O Mundo de Gê",
    texto:
      "O atendimento foi muito agradável, senti-me ouvido. A Ana foi mesmo uma excelente profissional, não tinha o vaso que eu queria e ela conseguiu exatamente um como eu pedi, e as plantas ela fez a decoração mais bela do que eu tinha em mente. Fui surpreendido por ter ficado tudo melhor do que eu pedi e imaginava. Uma verdadeira artista!",
  },
  {
    nome: "Cristina Fangueiro",
    texto:
      "A Ana é uma excelente profissional! Tem um gosto incrível e produtos de muita qualidade, e consegue criar trabalhos únicos, personalizados e lindíssimos. Cada projeto reflete cuidado, criatividade e atenção ao detalhe. Recomendo totalmente a quem quer transformar a sua casa com estilo e personalidade!",
  },
  {
    nome: "Elena Vtyurina",
    texto:
      "Bom atendimento! Excelente trabalho de uma talentosa criadora que faz ramos lindos e únicos. As peças feitas à mão muito criativas e diferentes que já vi. Recomendo!",
  },
  {
    nome: "Sara Gonçalves",
    texto:
      "Serviço impecável e arranjos maravilhosos. Nota-se o cuidado em cada detalhe. Sem dúvida a minha florista de eleição!!",
  },
  {
    nome: "matilde ferreira",
    texto:
      "O trabalho da Bloom é coração fora do peito. Talento, dedicação e profissionalismo. Recomendo a 100%!",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.99 11.99 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

const avatarStyles = [
  "bg-[#f3dcd5] text-[#7a5c49]",
  "bg-[#e7ece4] text-[#5c6b5a]",
  "bg-[#eee4d4] text-[#8a6f5c]",
  "bg-[#f0dcd8] text-[#a06a5c]",
];

function ReviewCard({ r, i }: { r: (typeof googleReviews)[number]; i: number }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-[#e3d5cb] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarStyles[i % avatarStyles.length]}`}
            aria-hidden="true"
          >
            {r.nome.charAt(0)}
          </span>
          <div>
            <figcaption className="text-sm font-semibold text-[#4a382c]">
              {r.nome}
            </figcaption>
            <span className="text-xs text-[#8a6f5c]">Crítica no Google</span>
          </div>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </div>
      <div className="mt-3 flex gap-0.5 text-[#fbbc04]" aria-label="Classificação: 5 de 5 estrelas">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[#6b5445]">
        {r.texto}
      </blockquote>
    </figure>
  );
}

function ServiceCard({ s }: { s: Servico }) {
  const destaque = !!s.destaque;
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg md:p-6 ${
        destaque ? "border-[#4a382c]/40 bg-[#4a382c] text-[#f7efe9] shadow-xl shadow-[#4a382c]/20" : "border-[#e3d5cb] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4
          className={`font-display-cormorant text-xl font-semibold md:text-2xl ${
            destaque ? "text-white" : "text-[#4a382c]"
          }`}
        >
          {s.nome}
        </h4>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            destaque ? "bg-[#f3dcd5] text-[#4a382c]" : "bg-[#f3dcd5] text-[#7a5c49]"
          }`}
        >
          {s.preco}
        </span>
      </div>
      <p
        className={`mt-2 flex-1 text-sm leading-relaxed ${
          destaque ? "text-[#f0e3da]/90" : "text-stone-600"
        }`}
      >
        {s.desc}
      </p>
      <a
        href={waLink(bloom.waPhone, `Olá Ana! Gostaria de saber mais sobre: ${s.nome}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline ${
          destaque ? "text-[#f3dcd5]" : "text-[#4a382c]"
        }`}
      >
        <WhatsAppIcon className={`h-4 w-4 ${destaque ? "text-[#25D366]" : "text-[#25D366]"}`} />
        Pedir proposta
      </a>
    </div>
  );
}

export function BloomByAna() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf6f1] font-body-montserrat text-[#4a382c]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e3d5cb]/70 bg-[#faf6f1]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/bloom/logo-bloom.png"
              alt="Logótipo Bloom by Ana"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-[#e3d5cb]"
            />
            <span className="font-display-cormorant text-xl font-semibold uppercase tracking-[0.18em] md:text-2xl">
              Bloom by Ana
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#7a5c49] transition-colors hover:text-[#4a382c]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink(bloom.waPhone, bloom.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#4a382c] px-5 py-2.5 text-sm font-semibold text-[#faf6f1] shadow-sm transition-all hover:bg-[#382a20] md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir proposta
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c6b8] text-[#4a382c] md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-[#e3d5cb] bg-[#faf6f1] px-4 py-3 md:hidden"
            aria-label="Menu móvel"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[#4a382c] hover:bg-[#f3dcd5]/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(bloom.waPhone, bloom.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#4a382c] px-5 py-3 text-sm font-semibold text-[#faf6f1]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir proposta pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1200px 500px at 85% -10%, #f3dcd5 0%, transparent 60%), radial-gradient(900px 400px at -10% 110%, #f3dcd5 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 md:px-6 md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e3d5cb] bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#7a5c49] shadow-sm">
                <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                {bloom.instagram}
              </div>
              <h1 className="mt-5 font-display-cormorant text-5xl font-semibold leading-[1.05] md:text-7xl">
                Flores que
                <br />
                <em className="text-[#b98a76]">contam histórias</em>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6b5445] md:text-lg">
                {bloom.intro}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink(bloom.waPhone, bloom.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-[#1fb958]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pedir proposta pelo WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9b3a3] px-7 py-3.5 text-sm font-semibold text-[#4a382c] transition-colors hover:border-[#4a382c]"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#8a6f5c]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {bloom.morada}, {bloom.zona}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Resposta rápida no WhatsApp
                </span>
              </div>
            </div>

            {/* Imagem hero em moldura de arco (como o logótipo) */}
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-8 border-white shadow-2xl shadow-[#4a382c]/20">
                <Image
                  src="/images/bloom/bloom-hero-real.jpg"
                  alt="Coroa floral de noiva em flores preservadas — Bloom by Ana"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 480px, 100vw"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-4 rounded-2xl bg-[#4a382c] px-5 py-4 text-[#f7efe9] shadow-xl md:-left-8"
              >
                <p className="font-display-cormorant text-lg font-semibold leading-tight">
                  Arte floral
                </p>
                <p className="text-xs text-[#e3d5cb]">Póvoa de Varzim</p>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="border-y border-[#e3d5cb]/80 bg-white/70">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-5 md:grid-cols-4 md:px-6">
            {bloom.badges.map((b) => (
              <p
                key={b}
                className="flex items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-wider text-[#7a5c49] md:text-xs"
              >
                <Flower2 className="h-4 w-4 shrink-0 text-[#b98a76]" aria-hidden="true" />
                {b}
              </p>
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Serviços
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-5xl">
                Cada proposta nasce à sua medida
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6b5445] md:text-base">
                Há momentos que merecem ser pensados ao pormenor. Diga-nos qual é o seu —
                enviamos uma proposta personalizada, sem compromisso.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {bloom.servicos.map((s) => (
                <ServiceCard key={s.nome} s={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Destaque — Ramos de Noiva */}
        <section className="bg-[#f3dcd5]/70 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border-8 border-white shadow-xl">
                <Image
                  src="/images/bloom/bloom-preservado-real.jpg"
                  alt="Ramo de noiva em flores preservadas — criação Bloom by Ana"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 384px, 100vw"
                />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                O serviço mais pedido
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                O seu ramo de noiva, desenhado flor a flor.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6b5445] md:text-base">
                O ramo de noiva é muito mais do que flores — é o acessório que acompanha
                cada passo do seu dia mais especial. Criamos ramos desenhados à sua medida,
                em harmonia com o vestido, as cores e a história que quer contar. Trabalhamos
                com flores frescas e preservadas e, se desejar, transformamos o seu ramo
                numa recordação eterna depois do casamento.
              </p>
              <p className="mt-4 font-display-cormorant text-xl italic text-[#b98a76]">
                “Eternal flowers for eternal moments.”
              </p>
              <a
                href={waLink(
                  bloom.waPhone,
                  "Olá Ana! Gostaria de saber mais sobre os ramos de noiva."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4a382c] px-6 py-3.5 text-sm font-semibold text-[#faf6f1] transition-all hover:bg-[#382a20]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Criar o meu ramo de noiva
              </a>
            </div>
          </div>
        </section>

        {/* O Ateliê */}
        <section id="atelie" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                O Ateliê
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                Uma nova casa, o mesmo carinho
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6b5445] md:text-base">
                {bloom.sobre}
              </p>
              <ul className="mt-6 space-y-3">
                {bloom.sobrePontos.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#4a382c]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f3dcd5]">
                      <Check className="h-3 w-3 text-[#7a5c49]" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-7 border-l-2 border-[#e9c6bb] pl-5 font-display-cormorant text-lg italic leading-relaxed text-[#7a5c49]">
                “{bloom.citacao}”
              </blockquote>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border-8 border-[#faf6f1] shadow-xl">
                <Image
                  src="/images/bloom/bloom-atelie-real.jpg"
                  alt="Quadro floral e coroa de flores preservadas criados no ateliê Bloom by Ana"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 448px, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-4 shadow-lg">
                <p className="text-xs font-semibold text-[#8a6f5c]">Rua Tenente Valadim 82</p>
                <p className="font-display-cormorant text-lg font-semibold text-[#4a382c]">
                  Póvoa de Varzim
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mim */}
        <section id="sobre-mim" className="scroll-mt-20 bg-[#f3dcd5]/40 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-t-[999px] rounded-b-[1.5rem] border-2 border-[#b98a76]/40 sm:block"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border-8 border-white shadow-xl">
                <Image
                  src="/images/bloom/anita.jpg"
                  alt="Ana, fundadora do Bloom by Ana, a sorrir no ateliê rodeada de flores preservadas"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 384px, 100vw"
                />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Sobre mim
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                Prazer, sou a Ana
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#6b5445] md:text-base">
                <p>
                  Eu sou a Ana, uma mulher e mãe cheia de energia e sonhos, ideias e
                  vontade de contar histórias através de produtos naturais e artesanato.
                </p>
                <p>
                  O Bloom é um projeto de alma que nasceu pela minha vontade de cuidar e
                  criar acessórios e lembranças com flores preservadas e produtos naturais,
                  que marquem a diferença na vida das pessoas que chegam até mim.
                </p>
                <p>
                  Quero que te sintas acolhida neste meu projeto e que recorras a mim sempre
                  que quiseres cuidar de ti e organizar eventos especiais e personalizados,
                  que contem a tua história e realizem os teus sonhos.
                </p>
                <p>
                  Envia-me mensagem privada para saberes mais sobre mim e o meu projeto e
                  para eu perceber como te posso ajudar a criar momentos inesquecíveis.
                </p>
              </div>
              <p className="mt-6 font-display-cormorant text-2xl italic text-[#b98a76]">
                Com carinho, Ana
              </p>
              <a
                href={waLink(
                  bloom.waPhone,
                  "Olá Ana! Gostaria de saber mais sobre ti e o teu projeto."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4a382c] px-6 py-3.5 text-sm font-semibold text-[#faf6f1] transition-all hover:bg-[#382a20]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Enviar mensagem privada
              </a>
            </div>
          </div>
        </section>

        {/* O processo */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Como funciona
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                Da ideia ao dia D, sem preocupações
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {bloom.processo.map((p) => (
                <div
                  key={p.num}
                  className="rounded-2xl border border-[#e3d5cb] bg-white p-6 text-center"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#4a382c] font-display-cormorant text-xl font-semibold text-[#faf6f1]">
                    {p.num}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#4a382c]">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b5445]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trabalhos */}
        <section id="trabalhos" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Trabalhos
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                Um pouco do que já floresceu
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
              {bloom.trabalhos.map((t) => (
                <figure
                  key={t.src}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 270px, 50vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4a382c]/85 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-[#faf6f1] md:text-sm">
                    {t.legenda}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={bloom.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b3a3] px-6 py-3 text-sm font-semibold text-[#4a382c] transition-colors hover:border-[#4a382c] hover:bg-[#faf6f1]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Mais trabalhos no Instagram {bloom.instagram}
              </a>
            </div>
          </div>
        </section>

        {/* Avaliações Google */}
        <section id="avaliacoes" className="scroll-mt-20 bg-[#f3dcd5]/40 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Avaliações
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                O que dizem no Google
              </h2>
              <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-full border border-[#e3d5cb] bg-white px-5 py-2.5 shadow-sm">
                <GoogleG className="h-6 w-6" />
                <span className="font-display-cormorant text-2xl font-semibold text-[#4a382c]">
                  5,0
                </span>
                <span className="flex gap-0.5 text-[#fbbc04]" aria-label="5 de 5 estrelas">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4" />
                  ))}
                </span>
                <span className="text-xs font-medium text-[#8a6f5c]">
                  15 críticas no Google
                </span>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {googleReviews.map((r, i) => (
                <ReviewCard key={r.nome} r={r} i={i} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9b3a3] px-6 py-3 text-sm font-semibold text-[#4a382c] transition-colors hover:border-[#4a382c] hover:bg-white"
              >
                <GoogleG className="h-4 w-4" />
                Ver as 15 críticas no Google
              </a>
            </div>
          </div>
        </section>

        {/* Contactos + Mapa */}
        <section id="contactos" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:gap-12 md:px-6">
            <div className="md:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b98a76]">
                Contactos
              </span>
              <h2 className="mt-3 font-display-cormorant text-3xl font-semibold md:text-4xl">
                Vamos falar sobre o seu momento
              </h2>

              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a76]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4a382c]">Ateliê</p>
                    <p className="mt-0.5 text-[#6b5445]">
                      {bloom.morada}
                      <br />
                      {bloom.codigoPostal}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a76]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4a382c]">Telefone / WhatsApp</p>
                    <p className="mt-0.5 text-[#6b5445]">{bloom.telefone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a76]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#4a382c]">Instagram</p>
                    <a
                      href={bloom.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-[#6b5445] underline-offset-4 hover:underline"
                    >
                      {bloom.instagram}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a76]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4a382c]">Email</p>
                    <a
                      href="mailto:ana-monica.lima@hotmail.com"
                      className="mt-0.5 block break-all text-[#6b5445] underline-offset-4 hover:underline"
                    >
                      ana-monica.lima@hotmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a76]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4a382c]">Visitas ao ateliê</p>
                    <ul className="mt-1 space-y-0.5 text-[#6b5445]">
                      <li>
                        <span className="font-medium text-[#4a382c]">Segunda a sexta</span> — 9h30 às 12h30 · 14h30 às 19h
                      </li>
                      <li>
                        <span className="font-medium text-[#4a382c]">Sábado</span> — 9h às 12h30
                      </li>
                    </ul>
                    <p className="mt-1.5 text-xs text-[#8a6f5c]">
                      Marcações pelo WhatsApp.
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href={waLink(bloom.waPhone, bloom.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-[#1fb958]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir proposta pelo WhatsApp
              </a>
            </div>

            <div className="md:col-span-3">
              <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#e3d5cb] shadow-sm md:min-h-[460px]">
                <iframe
                  title="Mapa — Bloom by Ana, Póvoa de Varzim"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(bloom.mapaQuery)}&output=embed&z=15`}
                  className="h-full min-h-[320px] w-full border-0 md:min-h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#4a382c] py-10 text-[#e3d5cb]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bloom/logo-bloom.png"
              alt="Logótipo Bloom by Ana"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-[#6b5445]"
            />
            <div>
              <p className="font-display-cormorant text-xl font-semibold uppercase tracking-[0.18em] text-[#faf6f1]">
                Bloom by Ana
              </p>
              <p className="mt-0.5 text-xs text-[#c9b3a3]">
                Arte floral · {bloom.zona}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={bloom.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Bloom by Ana"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6b5445] transition-colors hover:border-[#f3dcd5] hover:text-[#f3dcd5]"
            >
              <Instagram className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a
              href={waLink(bloom.waPhone, bloom.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Bloom by Ana"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6b5445] transition-colors hover:border-[#f3dcd5] hover:text-[#f3dcd5]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:ana-monica.lima@hotmail.com"
              aria-label="Email da Bloom by Ana"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6b5445] transition-colors hover:border-[#f3dcd5] hover:text-[#f3dcd5]"
            >
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs text-[#a58d7b]">
            © 2026 Bloom by Ana · Todos os direitos reservados
          </p>
        </div>
      </footer>

      <WhatsAppFloat
        phone={bloom.waPhone}
        msg={bloom.waMsg}
        label="Pedir proposta"
        ringClass="ring-[#e9c6bb]/40"
      />
    </div>
  );
}
