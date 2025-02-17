import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { Member } from '@/types';

const SOCIAL_MEDIA = {
  facebook: { icon: faFacebookF, label: "Facebook" },
  twitter: { icon: faXTwitter, label: "X" },
  instagram: { icon: faInstagram, label: "Instagram" },
  linkedin: { icon: faLinkedinIn, label: "LinkedIn" }
};

interface IntroContentProps {
  memberData: Member;
}

export default function IntroContent({ memberData }: IntroContentProps) {
  return (
    <section className="team-single section-padding pb-0">
      <div className="container">
        <div className="row md-marg justify-around bord relative">
          <div className="col-lg-5">
            <div className="img md-mb50 relative">
              <Image
                src={memberData.image}
                alt={memberData.name}
                fill
                className="object-cover"
                sizes="(max-width: 575px) 85vw, (max-width: 991px) 65vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="col-lg-6 flex align-center">
            <div className="cont">
              <h2>{memberData.name}</h2>
              <h6 className="sub-title main-color mt-10">{memberData.role}</h6>
              <div className="text mt-15">
                <p>{memberData.about}</p>
              </div>
              <div className="info mt-30">
                <ul className="rest">
                  {memberData.email && (
                    <li className="mb-25 fz-18">
                      <span className="sub-title mr-15">Email:</span>
                      <a href={`mailto:${memberData.email}`}>{memberData.email}</a>
                    </li>
                  )}
                  {memberData.phone && (
                    <li className="fz-18">
                      <span className="sub-title mr-15">Telefon:</span>
                      <a href={`tel:${memberData.phone}`}>{memberData.phone}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row md-marg justify-around mt-80">
          <div className="col-lg-6 flex align-center">
            <div className="text md-mb50">
              <h4 className="mb-15">O mně</h4>
              <p>{memberData.about}</p>
              <ul className="rest mt-30 social-icon flex align-center">
                {Object.entries(SOCIAL_MEDIA).map(([platformKey, { icon, label }]) => {
                  const validKeys: (keyof Member)[] = ['instagram', 'facebook'];
                  if (!validKeys.includes(platformKey as keyof Member)) {
                    return null;
                  }
                  const link = memberData[platformKey as keyof Member];
                  if (!link) return null;
                  return (
                    <li key={platformKey} className="hover-this cursor-pointer ml-10">
                      <a
                        href={typeof link === 'string' ? link : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-anim"
                        aria-label={`Otevřít profil na ${label}`}
                      >
                        <FontAwesomeIcon icon={icon} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
