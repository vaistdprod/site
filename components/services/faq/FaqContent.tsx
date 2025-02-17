import React from "react";
import Image from "next/image";

interface FaqContentProps {
  onAccordionClick: (index: number) => void;
}

const faqs = [
  {
    question: "Jak dlouho trvá vytvoření webových stránek?",
    answer: "Doba realizace webových stránek se odvíjí od rozsahu projektu a požadavků klienta. Jednodušší prezentační web můžeme vytvořit během 2-3 týdnů, komplexnější projekty mohou trvat 2-3 měsíce."
  },
  {
    question: "Kolik stojí vytvoření webových stránek?",
    answer: "Cena webových stránek závisí na mnoha faktorech - rozsahu, funkcionalitě, designu a dalších požadavcích. Pro přesnou kalkulaci nás kontaktujte s vaší představou a my vám připravíme nezávaznou nabídku."
  },
  {
    question: "Vytváříte responzivní webové stránky?",
    answer: "Ano, všechny naše webové stránky jsou plně responzivní a optimalizované pro všechna zařízení - počítače, tablety i mobilní telefony."
  },
  {
    question: "Jaké technologie používáte?",
    answer: "Využíváme moderní technologie jako React, Next.js, TypeScript a další. Pro každý projekt vybíráme nejvhodnější technologický stack podle požadavků a potřeb."
  },
  {
    question: "Jak probíhá spolupráce?",
    answer: "Spolupráce začíná úvodní konzultací, kde si ujasníme vaše požadavky a představy. Následně připravíme návrh řešení a cenovou kalkulaci. Po schválení začneme s realizací projektu, během které s vámi budeme v pravidelném kontaktu."
  },
  {
    question: "Poskytujete i SEO optimalizaci?",
    answer: "Ano, SEO optimalizace je součástí našich služeb. Pomůžeme vám s optimalizací pro vyhledávače, aby vaše stránky byly dobře viditelné a dosahovaly lepších výsledků ve vyhledávání."
  }
];

export default function FaqContent({ onAccordionClick }: FaqContentProps) {
  return (
    <section className="intro-accord relative">
      <div className="container relative z-7">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50 h-full relative">
              <Image
                src="/assets/imgs/fotoprodukce.jpg"
                alt="Fotoprodukce"
                fill
                className="object-center full-size object-cover"
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, 43vw"
              />
            </div>
          </div>

          <div className="col-lg-6 flex align-center">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Nejčastější dotazy</h6>
                <h3>
                  Odpovědi na vaše otázky<br />
                </h3>
              </div>

              <div className="accordion bord">
                {faqs.map((faq, index) => (
                  <div key={index} className={`item ${index === 0 ? 'active' : ''} fadeInUp`}>
                    <div onClick={() => onAccordionClick(index)} className="title">
                      <h6>{faq.question}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className={`accordion-info accordion-content-${index}`} style={{ maxHeight: index === 0 ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
