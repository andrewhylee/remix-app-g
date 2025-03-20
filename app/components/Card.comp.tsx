import React from "react";
import "../styles/Card.css";

type CardProps = {
  className?: string | undefined;
  image?: string | undefined;
  imageTitle?: string | undefined;
  imageSubtext?: string | undefined;
  ctaTitle?: string | undefined;
  ctaLink?: string;
  ctaLogo?: string | undefined;
  ctaText?: string | undefined;
  ctaSubText?: string | undefined;
  ctaBottomText1?: string | undefined;
  ctaBottomText2?: string | undefined;
  isPassingCustomElements?: boolean | undefined;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  children?: any | undefined;
};

export const Card: React.FC<CardProps> = ({
  className,
  image,
  imageTitle,
  imageSubtext,
  ctaTitle,
  ctaLink,
  ctaLogo,
  ctaText,
  ctaSubText,
  ctaBottomText1,
  ctaBottomText2,
  isPassingCustomElements,
  children,
}) => {
  console.log(children);
  return (
    <div className={"Card card " + className}>
      {isPassingCustomElements ? (
        <>{children}</>
      ) : (
        <>
          {image && (
            <>
              <img src={image} alt={imageTitle} className="card-image" />
              <div className="card-content">
                <h3 className="text_subtitle_2 mx-2 text-center">
                  {imageTitle}
                </h3>
                <p className="text_body mx-1 text-center">{imageSubtext}</p>
              </div>
            </>
          )}
          {!image && ctaTitle && ctaLink && (
            <>
              {ctaLogo && (
                <img
                  src={ctaLogo}
                  alt={ctaTitle}
                  className="card-cta-logo max-w-10 "
                />
              )}
              <div className="card-content">
                <h2 className="text-center">{ctaTitle}</h2>
                <a
                  href={ctaLink}
                  rel="noreferrer"
                  target="_blank"
                  className="card-cta-button mt-3"
                >
                  <p className="text_button">{ctaText}</p>
                  <p className="text_caption">{ctaSubText}</p>
                </a>
                <div className="card-cta-footer">
                  <p className="text_caption">{ctaBottomText1}</p>
                  <p className="text_caption text-gray-600">{ctaBottomText2}</p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
