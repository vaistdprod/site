import React from 'react'
import Image from 'next/image'
import Link from "next/link";

function Marq2() {
  const marquess = ['Spojte se s námi']
  const AllMarquess = Array(6).fill(marquess).flat()
  const contact = ['Kontaktujte nás']
  const AllContact = Array(6).fill(contact).flat()

  return (
    <section className="call-marq section-padding o-hidden">
      <div className="main-marq z-2 p-0 relative lrg main-bg pt-20 pb-20">
        <div className="slide-bar relative flex st1">
          <div className="box">
            {AllMarquess.map((item, i) => (
              <div key={i} className="item">
                <h4 className="flex align-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo TD Productions"
                      width={50}
                      height={38}
                    />
                  </span>
                </h4>
              </div>
            ))}
            {AllMarquess.map((item, i) => (
              <div key={i} className="item">
                <h4 className="flex align-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo TD Productions"
                      width={50}
                      height={38}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <Link 
            href="/kontakty" 
            className="overlay-link absolute full-size"
            aria-label="Přejít na stránku kontaktů"
          ></Link>
        </div>
      </div>

      <div className="main-marq p-0 relative bord-item">
        <div className="slide-bar relative flex st2">
          <div className="box">
            {AllContact.map((item, i) => (
              <div key={i} className="item">
                <h4 className="flex align-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {AllContact.map((item, i) => (
              <div key={i} className="item">
                <h4 className="flex align-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <Link 
            href="/kontakty" 
            className="overlay-link absolute full-size"
            aria-label="Přejít na stránku kontaktů"
          ></Link>
        </div>
      </div>
    </section>
  )
}

export default Marq2