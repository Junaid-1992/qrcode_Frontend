import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/socailtemp1.webp"
import { useTranslation } from 'react-i18next';

const Firsttypesec1 = ({handleregister}) => {
    const { t } = useTranslation();
  return (
    <>
 <section
        className="type_first_sec"
        style={{
          background: 'linear-gradient(332deg, rgb(104, 216, 233) 0%, rgba(104, 216, 233, 0) 58.35%)'
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="typepg_breadscrum">
                <a href="#">{t("NB-home")}</a>
                <span><IoChevronForwardSharp /></span>
                <a href="#">{t("NB_types_of_qr_code")}</a>
                <span><IoChevronForwardSharp /></span>
                <a href="#">{t("NB_website")}</a>
              </div>
              <div className="type_first_sec_txt">
                <h6>{t("NB_generate_list_of_links")}</h6>
                <h2>
                  {t("NB_share_your")} <span>{t("NB_social_networks")}</span>
                </h2>
                <p>{t("NB_expand_audience")}</p>
                <a href="#" onClick={handleregister}>
                  {t("NB_create_qr_code")} <FaArrowRight />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="website_qrcode_mob mobile-respon">
                <img src={pgmobinner} alt={t("NB_image_alt")} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Firsttypesec1