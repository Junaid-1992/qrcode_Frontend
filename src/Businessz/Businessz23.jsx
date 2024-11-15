import React from 'react'

import Header from "../header/header"

import Footer from '../Footer/Footer'
import pgmobinner from "../img/mob_inner_img.png"
import unlimitedsvg from "../img/unlimited_svg.svg"
import variatyqrtypes from "../img/variable_svg.svg"
import varietydownload from "../img/variety_download_svg.svg"
import unlimitedmember from "../img/unlimited_member.svg"
import completeanlytics from "../img/complete_analytics.svg"
import editingqr from "../img/editing_qr.svg"
import premiumsupport from "../img/premium_support.svg"
import cancelwhenever from "../img/cancel_whenever.svg"
import customdomain from "../img/custom_domain.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { IoChevronForwardSharp } from 'react-icons/io5'



import h1 from "../img/td1.webp"
import h2 from "../img/td2.webp"
import h3 from "../img/td3.webp"
import h4 from "../img/td4.webp"
import h5 from "../img/td5.webp"
import h6 from "../img/td6.webp"
import h7 from "../img/td7.webp"
import h8 from "../img/td8.webp" 
import l1 from "../img/illustration-BWKMqFzS.webp" 
import l2 from "../img/banner-01-DzZXOIEl.webp" 
import l3 from "../img/banner-02-DtDOGbAf.webp" 
import l4 from "../img/banner-03-Nqqf3yTk.webp" 
import l5 from "../img/banner-04-O4jG7qjz.webp" 
import l7 from "../img/banner-05-Df-ELgVM.webp" 
// import l8 from "../img/banner-06-Do_snnmM.webp" 
import mobilh from "../img/mobilh.png"
import All_Plans from './All_Plans'
import { useTranslation } from 'react-i18next';
const Businessz23= () => {
    const { t } = useTranslation();
    return (
        <> 
 
            <Header />

            <section className="type_first_sec kd23">
    <Container>
        <Row className='hello-row'>
            <Col lg={8}>
                <div className="typepg_breadscrum">
                    <a href="#">{t('homepage_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('business_GDS')}</a>
                    <span><IoChevronForwardSharp /></span>
                    <a href="#">{t('graphicDesignStudio_GDS')}</a>
                </div>
                <div className="type_first_sec_txt">
                    <h2>{t('qrCodesForGraphicDesign_GDS')}</h2>
                    <p className='total-spaas'>
                        {t('implementingQRCodes_GDS')}
                    </p>
                    <a href="#">{t('getStartedNow_GDS')}</a>
                </div>
            </Col>
            <Col lg={3}>
                <div className="mobilh-img-box">
                    <img src={mobilh} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="create_type_sec">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h3>{t('getToKnowFeather_GDS')}</h3>
                    <p>{t('featherDescription_GDS')}</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_img-1 more-left">
                    <img src={l1} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="create_type_sec">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_img-1">
                    <img src={l2} alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h6>{t('vCardPlusQRCode_GDS')}</h6>
                    <h3>{t('connectEasily_GDS')}</h3>
                    <p>{t('optimizeNetworking_GDS')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_GDS')}</button>
                        <button className='More-Info'>{t('moreInfo_GDS')}</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="personalize_type_sec">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h6>{t('imageGalleryQRCode_GDS')}</h6>
                    <h3>{t('showCreativity_GDS')}</h3>
                    <p>{t('boostExposure_GDS')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_GDS')}</button>
                        <button className='More-Info'>{t('moreInfo_GDS')}</button>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_img-1 more-left">
                    <img src={l3} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="create_type_sec">   
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_img-1">
                    <img src={l4} alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h6>{t('linkListingQRCode_GDS')}</h6>
                    <h3>{t('amplifyPresence_GDS')}</h3>
                    <p>{t('simplifyConnection_GDS')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_GDS')}</button>
                        <button className='More-Info'>{t('moreInfo_GDS')}</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="personalize_type_sec">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h6>{t('QRfy_GDS')}</h6>
                    <h3>{t('createManageMonitor_GDS')}</h3>
                    <p>{t('designImpressiveQRCodes_GDS')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_GDS')}</button>
                        <button className='More-Info'>{t('moreInfo_GDS')}</button>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_img-1 more-left">
                    <img src={h5} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>

<section className="personalize_type_sec">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="create_type_img-1">
                    <img src={l5} alt="" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="create_type_txt">
                    <h6>{t('businessQRCode_GDS')}</h6>
                    <h3>{t('makeStudioAccessible_GDS')}</h3>
                    <p>{t('conquerNewCustomer_GDS')}</p>
                    <div className="more-end-btn-box">
                        <button className='hello-cr'>{t('createQRCode_GDS')}</button>
                        <button className='More-Info'>{t('moreInfo_GDS')}</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>


            <section className="create_type_sec">   
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img-1">
                                <img src={l4} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>
                               {t('qrf_sa41')}


                               </h6>
                                <h3>{t('qrf_sa42')}</h3>
                                <p>{t('qrf_sa43')}
                                </p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'> {t('qrf_sa10')}</button>
                                    <button className='More-Info'>{t('qrf_sa11')}</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>{t('qrf_sa18')}</h6>
                                <h3>{t('qrf_sa19')}</h3>
                                <p>{t('qrf_sa20')}</p>
                                <div className="more-end-btn-box">
                                    <button className='hello-cr'> {t('qrf_sa10')}</button>
                                    <button className='More-Info'>{t('qrf_sa11')}</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img-1 more-left">
                                <img src={h5} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <All_Plans/>

            <Footer />

        </>
    )
}

export default Businessz23