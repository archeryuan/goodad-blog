import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Navigation from './navigation'
import { Helmet } from "react-helmet"

import logo from "../assets/images/goodblog_logo_light.png";
import lightLogo from "../assets/images/Logo-Light.png"
import previewLogo from "../assets/images/preview.png"
import fav1 from "../assets/images/32x32.png"
import fav2 from "../assets/images/256x256.png"

import '../assets/css/normalize.min.css'
import '../assets/css/webflow.min.css'
import '../assets/css/goodad.webflow.min.css'
import '../assets/css/customize.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/main.css'

const Header = (props) => {
  let showLogo = logo
  return (
        <div id="header-goodad" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <a href="./index.html" className="scrollto">
                <img className="img-fluid" src={showLogo} alt="GoodBlog - Result Oriented Marketing Tips for SME"  />
              </a>
            </div>
            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                  <li className="active"><a href="#Home" id="Nav-Home" alt="Home" title="Home">Home</a></li>
                  <li><a href="https://goodad.co/index.html#Features" id="Nav-Features" alt="Features" title="Features">Features</a></li>
                  <li><a href="https://goodad.co/index.html#Procedures" id="Nav-Procedures" alt="Procedures" title="Procedures">Procedures</a></li>
                  <li><a href="https://goodad.co/index.html#Pricing" id="Nav-Pricing" alt="Pricing" title="Pricing">Pricing</a></li>
                  <li><a href="https://goodad.co" id="Nav-GoodAd" alt="GoodAd" title="GoodAd">GoodAd</a></li>
                  <li><a href="https://goodpage.app" id="Nav-GoodPage" alt="GoodPage" title="GoodPage">GoodPage</a></li>
                <li><a href="https://app.goodad.co/" className="nav-tab-login">Login</a></li>
                <li><a href="https://app.goodad.co/auth/signUp" className="nav-tab-signup" target="_blank">SignUp</a></li>
              </ul>
            </nav>
          </div>
        </div>
)}

const BlogHeader = () => (
      <div className="blog-sec-a">
        <div data-delay={4000} data-animation="slide" data-autoplay={1} data-duration={500} data-infinite={1} className="blog-hero-slide w-slider">
          <div className="mask w-slider-mask">
            <div className="slide-1 w-slide">
              <div className="con-top w-container">
                <h1 className="heading-white-top">HOW TO START DIGITAL MARKETING</h1><a id="Sec-A1-Create" href="/如何開始網上宣傳" className="nav-tab-subscrible middle w-button">READ</a></div>
            </div>
            <div className="slide-2 w-slide">
              <div className="con-top w-container">
                <h1 className="heading-white-top">5 TIPS TO WORKING WITH MARKETING AGENCY</h1><a id="Sec-A1-Create" href="/如何開始網上宣傳" className="nav-tab-subscrible middle w-button">READ</a></div>
            </div>
            <div className="slide-3 w-slide">
              <div className="con-top w-container">
                <h1 className="heading-white-top">DIFFERENCES BETWEEN<br />SEO AND SEM</h1><a id="Sec-A1-Create" href="/如何開始網上宣傳" className="nav-tab-subscrible middle w-button">READ</a></div>
            </div>
            <div className="slide-4 w-slide">
              <div className="con-top w-container">
                <h1 className="heading-white-top">DO YOU NEED A DIGITAL MARKETER?</h1><a id="Sec-A1-Create" href="/如何開始網上宣傳" className="nav-tab-subscrible middle w-button">READ</a></div>
            </div>
            <div className="slide-5 w-slide">
              <div className="con-top w-container">
                <h1 className="heading-white-top">PATH TO CREATING YOUR FIRST MARKETING CAMPAIGN</h1><a id="/如何開始網上宣傳" href="#Pricing" className="nav-tab-subscrible middle w-button">READ</a></div>
            </div>
          </div>
          <div className="left-arrow w-slider-arrow-left">
            <div className="w-icon-slider-left" />
          </div>
          <div className="right-arrow w-slider-arrow-right">
            <div className="w-icon-slider-right" />
          </div>
          <div className="w-slider-nav w-round" />
        </div>
      </div>
)


const Footer = () => (
  <div className="sec-e-footer">
    <div className="con-footer w-container">
      <div className="div-footer-box">
        <div className="w-row">
          <div className="col-footer-box w-clearfix w-col w-col-7 w-col-medium-6">
            <div className="footer-box-title"><strong> Need a Good Web Page for Ads?</strong></div>
            <div className="footer-box-text">Build result oriented marketing page now!</div>
          </div>
          <div className="w-clearfix w-col w-col-5 w-col-medium-6"><a href="https://goodpage.app" target="_blank" id="btn_goodpage" className="footer-box-create-button w-button" target="_blank">Try GoodPage</a></div>
        </div>
      </div>
      <div className="grid-footer w-row">
        <div className="w-col w-col-7">
          <div className="w-row">
            <div className="col-footer-lines w-clearfix w-col w-col-4">
              <div className="footer-title">Site Map</div>
              <a href="./index.html#Home" id="Footer-Home-link" className="footer-links">Home</a>
              <a href="./index.html#Features" id="Footer-Features-link" className="footer-links">Features</a>
              <a href="./index.html#Procedures" id="Footer-Procedures-link" className="footer-links">Procedures</a>
              <a href="./index.html#Pricing" id="Footer-Pricing-link" className="footer-links">Pricing</a>
            </div>
            <div className="col-footer-lines w-clearfix w-col w-col-4">
              <div className="footer-title">Legal</div>
              <a href="./privacy-policy.html" id="Footer-Policy-link" className="footer-links">Privacy Policy</a>
              <a href="./disclaimer.html" id="Footer-Disclaimer-link" className="footer-links">Disclaimer</a>
              <a href="./terms.html" className="footer-links">Terms &amp; conditions</a>
              <a href="mailto:info@goodad.co" id="Footer-Email-link" className="footer-links">info@goodad.co</a>
            </div>
            <div className="col-footer-lines w-clearfix w-col w-col-4">
                <div className="footer-title">Link</div>
                <a href="https://goodad.co" id="Footer-GoodAd-link" className="footer-links">GoodAd</a>
                <a href="https://goodpage.app" id="Footer-GoodPage-link" className="footer-links">GoodPage</a>
                <a href="https://blog.goodad.co" id="Footer-GoodBlog-link" className="footer-links">GoodBlog</a>
                <a href="https://icp.goodpage.app" id="Footer-GoodPage-link" className="footer-links">ICP Filing Expert</a>
              </div>
          </div>
        </div>
        <div className="w-clearfix w-col w-col-5">
        <a href="index.html" className="link-footer-logo w-inline-block w--current">
        <img className="img-fluid" src={logo} height="35" alt="GoodBlog - Result Oriented Marketing Tips for SME" title="GoodBlog - Result Oriented Marketing Tips for SME" />
        </a>
          <div className="footer-copyright-text">GoodAd © 2019. All rights reserved</div>
        </div>
      </div>
    </div>
  </div>
);

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    let title = "GoodBlog - Result Oriented Marketing Tips for SME"

    let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }

    return (

      // <Container>
      //   <Navigation />
      //   {children}
      // </Container>
      <div>
        <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
          <html lang="en" />
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta name="title" content="GoodBlog - Result Oriented Marketing Tips for SME" />
          <meta name="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!" />
          <meta name="keywords" content="Result Oriented Marketing, Google Ads,Get the Real ROI From Your Ads Money, Remarketing, SME,Startup,SEO,,Facebook Ads,Search Engine Marketing,GoodPage,GoodAd" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="3 days" />
          <meta name="author" content="Social Analytics (HK) Limited, Master Concept Group" />
          <link rel="canonical" href="https://www.goodad.co" rel="nofollow"/>
          <meta name="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!" />
          <meta name="image" content="http://goodad.co/images/goodad_logo_sq.png" />
          <meta itemprop="name" content="GoodBlog - Result Oriented Marketing Tips for SME" />
          <meta itemprop="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!" />
          <meta itemprop="image" content="http://goodad.co/images/goodad_logo_sq.png" />
          <meta name="og:title" content="GoodBlog - Result Oriented Marketing Tips for SME" />
          <meta name="og:description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!" />
          <meta name="og:image" content="http://goodad.co/images/goodad_cover.png" />
          <meta name="og:url" content="http://goodad.co" />
          <meta name="og:site_name" content="GoodBlog" />
          <meta name="og:locale" content="en_HK" />
          <meta name="og:video" content="https://youtu.be/rkEOOKN1tUQ" />
          <meta name="fb:admins" content="267282930737726" />
          <meta name="og:type" content="website" />
          <link href={fav1} rel="shortcut icon" type="image/x-icon" />
          <link href={fav2} rel="apple-touch-icon" />
        </Helmet>
        <Header />
        <BlogHeader />
        <div id="Features" className="sec-b-blog">
          <div className="con-blog-list w-container">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Template
