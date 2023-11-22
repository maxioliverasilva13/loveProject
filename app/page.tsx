"use client";

import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import PhotoList from "./components/PhotoList";
import Lottie from "lottie-react";
import love2 from "@/public/lottie/love2.json";
import love3 from "@/public/lottie/love3.json";
import love4 from "@/public/lottie/love4.json";
import YouTube from "react-youtube";

import { Gallery } from "./components/Gallery";

// This is an async Server Component
export default function Page() {
  const controls = useAnimation();
  const [text, setText] = useState("");

  useEffect(() => {
    async function animateText() {
      const originalText = "Bienvenida Ale ";
      for (let i = 0; i <= originalText.length; i++) {
        setText(originalText.slice(0, i));
        await controls.start({ opacity: 1, x: 0 });
      }
    }
    animateText();
  }, [controls]);

  return (
    <div className="w-full">
      <h1 className="text-gray-800 mb-40 mt-10 w-full text-center font-semibold text-[45px]">
        <motion.div className="w-full text-center transition-all" animate={controls} initial={{ opacity: 0, x: 0 }}>
          {text}
          <span className="text-red-500 text-[40px]">&hearts;</span>
        </motion.div>
      </h1>

      <div className="w-full my-5 m-auto max-w-full rounded-lg overflow-hidden z-10">
      <iframe width="100%" height="315" className="z-10" src="https://www.youtube.com/embed/vldYYjCQ7jc?si=rXjyWhcmOn_XqtD1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
  

      <div className="my-[1500px] w-full flex-col flex items-center justify-start gap-4">
        <section className="w-full flex items-center jsutify-center">
          <span id="textmoments" className="font-semibold text-center text-[30px] m-auto text-2xl transform">
            Este es un sitio para que veas el inmenso amor que te tengo
            <span className="text-red-500 text-[40px]">&hearts;</span>
          </span>
        </section>

        <section className="mt-10 transition-all md:text-lg text-base font-normal md:max-w-[500px] max-w-full md:px-0 px-5 text-center">
          <span>
            Cometí errores y estoy esforzándome por mejorar en ellos. Sin embargo, mi amor permanece inalterado y mi
            corazón no engaña; mis sentimientos hacia ti son auténticos y sinceros. Me faltan palabras para expresar
            completamente lo que siento, pero estoy dispuesto a arriesgarme y darlo todo por ti.
          </span>
        </section>
        <Lottie className="max-w-[400px]" animationData={love3} loop={true} />
      </div>

      <div className="flex border border-gray-100 shadow-md rounded-lg p-10 mt-[700px] mb-[900px] md:w-[500px] w-full h-auto mx-auto flex-col gap-5 items-center justify-center bg-transparent">
        <motion.div
          className="min-w-[200px] relative w-[200px] h-[200px] bg-white"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 360, 0],
            borderRadius: ["100%", "30%", "50%", "50%", "100%"],
          }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 2,
          }}
        >
          <Image src="/profile.jpg" layout="fill" objectFit="cover" className="rounded-full" alt="Profile" />
        </motion.div>

        <div className="w-full flex-grow h-auto flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-semibold text-gray-800 animate__animated animate__swing">¿Que veo en ti?</h1>
          <ul className="list-disc text-[20px] font-medium flex flex-col gap-4 items-center">
            <li>Amor &#128514;</li>
            <li>Diversion &#128514;</li>
            <li>Carisma &#128540;</li>
            <li>Empatia &#128519;</li>
            <li>Belleza &#129397;</li>
            <li>Locura &#129322;</li>
            <li>Aventuras &#129322;</li>
            <li>Amistad &#129325;</li>
            <li>Ternura &#129303;</li>
            <li>Persona que lucha &#128571;</li>
            <span className="font-semibold text-2xl">+1millon de ideas &#128525;</span>
          </ul>
        </div>
      </div>

      <div className="my-[1500px] w-full flex-col flex items-center justify-start gap-4">
        <section className="w-full flex items-center jsutify-center">
          <span id="textmoments" className="font-semibold text-[30px] m-auto text-2xl transform">
            Veo momentos inolvidables <span className="text-red-500 text-[40px]">&hearts;</span>
          </span>
        </section>

        <section className="mt-10 transition-all md:text-lg text-base font-normal md:max-w-[500px] max-w-full md:px-0 px-5 text-center">
          <span>
            Solo con mirarte veo muy lindos momentos, lo cual me motiva a querer crear momentos mas lindos y duraderos
            con la persona que mas quiero, una chica muy especial y divertida. <br />
            Perdi muchas cosas en el camino que tengo recorrido, mucho me ayudo a mejorar y otras no tanto, pero no
            quiero perder a quien siempre me acompa;o, quiero mostrarle un futuro diferente y a una persona con una
            mentalidad diferente, quiero vivir el dia a dia acompa;ado de la persona correcta, y se lo correcto siempre
            sera estando a tu lado.
          </span>
        </section>
        <Lottie className="max-w-[400px]" animationData={love2} loop={true} />
      </div>

      <div className="flex flex-col w-full items-center justify-start gap-5 m-auto">
        <PhotoList />
      </div>

      <div className="my-[1500px] w-full flex-col flex items-center justify-start gap-4">
        <section className="w-full flex items-center jsutify-center">
          <span id="textmoments" className="font-semibold text-[30px] m-auto text-2xl transform">
            Un poco de texto<span className="text-red-500 text-[40px]">&#128517;</span>
          </span>
        </section>

        <section className="mt-10 transition-all md:text-lg text-base font-normal md:max-w-[500px] max-w-full md:px-0 px-5 text-center">
          <span>
            Confío en que estas líneas encuentren un espacio en tu corazón. Me tomo el tiempo para expresar con
            sinceridad lo que siento, y lo hago con la esperanza de que puedas comprender la magnitud de mis
            sentimientos. En estos dos años de estudios, he atravesado un viaje interno que, lamentablemente, ha
            afectado nuestra relación. Me doy cuenta ahora de que, en medio de todo el caos de estudio/trabajo, perdí de
            vista lo más valioso: tú. Comprendo que mi falta de atención han causado todo esto en nuestro vínculo, y
            lamento sinceramente cualquier dolor que haya causado, de veras ❤.
            <br />
            Reflexionar sobre todo esto me ha permitido reconocer la importancia de vivir plenamente y de apreciar lo
            que realmente importa en la vida. Eres alguien por quien vale la pena luchar, y me duele haber tardado en
            entenderlo.
            <br />
            Quiero que sepas que mi amor por ti no ha disminuido, sino que ha crecido y se ha fortalecido a lo largo de
            este periodo. Estoy arrepentido por haber permitido que la situación llegara a este punto, pero también
            agradezco que estos desafíos hayan abierto mis ojos a lo que realmente importa. ¿Por qué insisto tanto? Es
            porque, a pesar de los errores y obstáculos, he llegado a ver la increíble persona que eres. Eres única,
            encantadora, especial y divertida. Ahora estoy dispuesto a jugármela por ti, a comprometerme y dar lo mejor
            de mí para reconstruir lo que hemos perdido.
            <br />
            Quisiera pedirte la oportunidad de quedarme a tu lado, de caminar juntos y de cambiar lo que sea necesario
            en mí para fortalecer nuestra relación. Mi objetivo es apoyarte en todo momento y, sobre todo, valorarte
            como mereces.
            <br />
            Espero que estas palabras reflejen la seriedad de mis intenciones y el profundo afecto y amor que siento por
            ti. Estoy dispuesto a trabajaren todo para recuperar tu confianza y construir un futuro juntos.
          </span>
        </section>
        <Lottie className="max-w-[400px] min-w-[300px]" animationData={love4} loop={true} />
      </div>

      <div className="my-[1500px]">
        <section className="w-full flex items-center jsutify-center">
          <span id="textmoments" className="font-semibold text-[45px] leading-[50px] my-20 m-auto text-2xl transform">
            Todo lo que pase contigo siempre fue lo mejor<span className="text-red-500 text-[40px]">&#128525;</span>
          </span>
        </section>
        <Gallery title="" titleWidth={8} category="canary" alt="A building in Canary Wharf" />
      </div>

      <div className="mt-[1000px] w-full flex-col flex items-center justify-start gap-4">
        <section className="w-full flex items-center jsutify-center">
          <span id="textmoments" className="font-semibold text-center text-[30px] m-auto text-2xl transform">
            Para finalizar , te dejo un boton para agendar una cita en caso de que estes de acuerdo y pienses mejor tus
            ideas
            <span className="text-red-500 text-[40px]">&hearts;</span>
          </span>
        </section>
        <b>Te amo con todo mi corazon</b>
        <Lottie className="max-w-[400px]" animationData={love3} loop={true} />

        <button
          disabled={false}
          onClick={() => {
            window.open("https://wa.me/098719635", "_blank");
          }}
          className="px-6 z-[99999999] py-4 rounded-full bg-blue-700 text-white font-semibold"
        >
          Agendar cita
        </button>
      </div>
    </div>
  );
}
