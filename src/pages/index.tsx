import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState, WheelEventHandler } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'
import styles from './styles/Home.module.scss'
import startPageStyles from './styles/StartPage.module.scss'

const transitionTimeOut = 1000

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [transitionTitle, setTransitionTitle] = useState(false)
  const [transitionText, setTransitionText] = useState(false)
  const [transitionIcon, setTransitionIcon] = useState(false)

  const handleScroll: WheelEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    if (!divRef.current || !scrollEnabled) return
    setScrollEnabled(false)
    const newScrollPosition =
      e.deltaY < 0
        ? scrollPosition - window.innerHeight
        : scrollPosition + window.innerHeight
    scroll.scrollTo(newScrollPosition)
    setScrollPosition(newScrollPosition)

    setTimeout(() => {
      setScrollEnabled(true)
    }, 1000)
  }

  return (
    <div style={{ overflow: 'auto' }} ref={divRef} onWheel={handleScroll}>
      <div className={clsx(styles.content, startPageStyles.startPage)}>
        <div className={startPageStyles.imgContainer}>
          <CSSTransition
            in={true}
            timeout={transitionTimeOut}
            classNames={{
              appear: startPageStyles.imgAppear,
              appearActive: startPageStyles.imgAppearActive
            }}
            appear
          >
            <img src='/images/marcos.jpeg' alt='Marcos Henrique' />
          </CSSTransition>
        </div>
        <CSSTransition
          in={true}
          timeout={transitionTimeOut}
          classNames={{
            appear: startPageStyles.colorAppear,
            appearActive: startPageStyles.colorAppearActive
          }}
          onEntered={(a, b) => {
            if (b) setTransitionTitle(true)
          }}
          appear
        >
          <div className={startPageStyles.startPageTop}>
            <CSSTransition
              in={transitionTitle}
              timeout={transitionTimeOut}
              classNames={{
                enter: startPageStyles.textEnter,
                enterActive: startPageStyles.textEnterActive
              }}
              onEntered={(a, b) => {
                if (!b) setTransitionText(true)
              }}
            >
              <div
                className={clsx(
                  startPageStyles.startPageTopContainer,
                  transitionTitle
                    ? startPageStyles.oneOpacity
                    : startPageStyles.zeroOpacity
                )}
              >
                <h1>Marcos Henrique</h1>
                <h2>Desenvolvedor Full Stack</h2>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={transitionTimeOut}
          classNames={{
            appear: startPageStyles.colorAppear,
            appearActive: startPageStyles.colorAppearActive
          }}
          appear
        >
          <div className={startPageStyles.startPageBottom}>
            <CSSTransition
              in={transitionText}
              timeout={transitionTimeOut}
              classNames={{
                enter: startPageStyles.textEnter,
                enterActive: startPageStyles.textEnterActive
              }}
              onEntered={(a, b) => {
                if (!b) setTransitionIcon(true)
              }}
            >
              <div
                className={clsx(
                  startPageStyles.startPageContainer,
                  transitionText
                    ? startPageStyles.oneOpacity
                    : startPageStyles.zeroOpacity
                )}
              >
                <h2>E ai, tranquilo?</h2>
                <p>
                  Meu nome é Marcos Henrique, sou um Desenvolvedor Full Stack
                  com experiência em desenvolvimento Java, Javascript e
                  Typescript, tendo conhecimento em Spring Boot, Express,
                  ReactJS, PostgreSQL, dentre outras tecnologias.
                </p>
                <p>
                  Sou apaixonado por programar, aprender e viver. Já fui líder
                  técnico no desenvolvimento de diversos sistemas de pequeno e
                  médio porte, dos quais você pode encontrar mais detalhes na
                  aba de projetos.
                </p>
                <p>
                  Atualmente estou cursando o quinto período da faculdade de
                  Sistemas de Informação, na Universidade Federal de Ouro Preto
                  (UFOP). Ganhei o prêmio de mérito acadêmico em 2019 por
                  possuir o maior coeficiente médio da universidade naquele ano
                  (9.8/10). Já fui premiado com 3 medalhas (2013/2015/2018) e 2
                  menções honrosas (2014/2017) na Olimpíada Brasileira de
                  matemática (OBMEP).
                </p>
                <p>
                  Participo de um projeto de Iniciação Científica na UFOP, onde
                  desenvolvemos software e algoritmos para solucionar o Problema
                  de Roteamento de Veículos Escolares (SBRP na literatura). Quer
                  ver meus projetos? Rola pra baixo!
                </p>
                <CSSTransition
                  in={transitionIcon}
                  timeout={transitionTimeOut}
                  classNames={{
                    enter: startPageStyles.iconEnter,
                    enterActive: startPageStyles.iconEnterActive
                  }}
                >
                  <div
                    className={clsx(
                      startPageStyles.socialMedia,
                      transitionIcon
                        ? startPageStyles.oneOpacity
                        : startPageStyles.zeroOpacity
                    )}
                  >
                    <a target='_blank' href='https://github.com/Marcoshsc'>
                      <Image
                        src='/images/logotipo-do-github.png'
                        alt='Marcos Henrique - Github'
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/marcos-henrique-santos-cunha-b275a21a1/'
                    >
                      <Image
                        width={50}
                        height={50}
                        src='/images/linkedin-logo.png'
                        alt='Marcos Henrique - Linkedin'
                      />
                    </a>
                    <a target='_blank' href='mailto:marcoshscunha@gmail.com'>
                      <Image
                        width={50}
                        height={50}
                        src='/images/email.png'
                        alt='Marcos Henrique - email'
                      />
                    </a>
                  </div>
                </CSSTransition>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      </div>
      <div className={styles.content}>
        <p>Content 2</p>
      </div>
      <div className={styles.content}>
        <p>Content 3</p>
      </div>
      <div className={styles.content}>
        <p>Content 4</p>
      </div>
    </div>
  )
}
