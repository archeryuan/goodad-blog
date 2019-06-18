import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from "../assets/images/GoodAd-Blog-Logo.png";
import lightLogo from "../assets/images/Logo-Light.png"
import previewLogo from "../assets/images/preview.png"

import '../assets/css/normalize.css'
import '../assets/css/webflow.css'
import '../assets/css/goodad.webflow.css'

const Header = (props) => {
  let showLogo = logo
  return (
  <div className="sec-a-top-bar">
          <div data-collapse="medium" data-animation="over-right" data-duration={400} className="top-nav-bar-blog w-nav">
            <div className="con-nav-bar-blog w-container">
              <nav role="navigation" className="nav-menu-blog w-nav-menu">
                <a id="Nav-Features" href="http://www.goodad.co" className="nav-link w-nav-link">Home</a>
                <a id="Nav-Features" href="http://www.goodad.co/how-it-works.html" className="nav-link w-nav-link">How it works</a>
                <a id="Nav-Pricing" href="/" className="nav-link w-nav-link w--current">Blog</a>
                <a href="mailto:info@goodad.co?subject=Inquiry%20to%20GoodAd" className="nav-link w-hidden-main w-nav-link">Contact Us</a>
                <a href="https://app.goodad.co/auth/signUp" className="nav-link-mobile-login w-hidden-main w-nav-link">SIGNUP</a>
                <a href="https://app.goodad.co" className="nav-link-mobile-signup w-hidden-main w-nav-link">LOGIN</a>
              </nav>
              <a href="index.html" id="Nav-Logo" className="link-top-logo w-nav-brand">
                 <img src={showLogo} width={60} className="blog-logo" />
              </a>
              <a id="Signup-from-FP" className="nav-tab-subscrible w-hidden-medium w-hidden-small w-hidden-tiny w-nav-link">Subscribe</a>
              <div className="menu-button-blog w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
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
                <div className="footer-box-title"><strong>Earn more clicks with the same budget!</strong></div>
                <div className="footer-box-text">Start your automated campaign now.<br /></div>
              </div>
              <div className="w-clearfix w-col w-col-5 w-col-medium-6"><a href="https://app.goodad.co/auth/signUp" target="_blank" id="Sec-E1-Create" className="footer-box-create-button w-button">CREATE&nbsp;CAMPAIGN</a></div>
            </div>
          </div>
          <div className="grid-footer w-row">
            <div className="w-col w-col-7">
              <div className="w-row">
                <div className="col-footer-lines w-clearfix w-col w-col-4">
                  <div className="footer-title">HELP</div><a href="mailto:info@goodad.co?subject=Inquiry%20to%20GoodAd" id="Footer-Email-link" className="footer-links">info@goodad.co</a><a href="#" id="Footer-Help-link" className="footer-links">Help center</a><a href="mailto:info@gooad.co?subject=Inquiry%20to%20GoodAd" id="Footer-Contact-link" className="footer-links">Contact us</a></div>
                <div className="col-footer-lines w-clearfix w-col w-col-4">
                  <div className="footer-title">ABOUT</div><a href="#" id="Footer-About-link" className="footer-links">About us</a><a href="privacy-policy.html" id="Footer-Policy-link" className="footer-links">Privacy Policy</a><a href="disclaimer.html" id="Footer-Disclaimer-link" className="footer-links">Disclaimer</a></div>
                <div className="col-footer-lines w-clearfix w-col w-col-4">
                  <div className="footer-title">PRODUCT</div><a href="#" id="Footer-Features-link" className="footer-links">Features</a><a href="how-it-works.html" className="footer-links">How it works</a><a href="blog.html" className="footer-links w--current">Blog</a></div>
              </div>
            </div>
            <div className="w-clearfix w-col w-col-5"><a href="index.html" className="link-footer-logo w-inline-block"><img src={lightLogo} /></a>
              <div className="footer-copyright-text">GoodAd © 2018. All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
);

const TemplateWrapper = (props) => {
  const { children } = props;
  return (
    <div>
      <Helmet>
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NGCXZCV');</script>
      <!-- End Google Tag Manager -->
    <!-- COMMON TAGS -->
    <title>GoodBlog - Result Oriented Marketing Tips for SME</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta name="title" content="GoodBlog - Result Oriented Marketing Tips for SME">
    <meta name="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!">
    <meta name="keywords" content="Result Oriented Marketing, Google Ads,Get the Real ROI From Your Ads Money, Remarketing, SME,Startup,SEO,,Facebook Ads,Search Engine Marketing,GoodPage,GoodAd">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="revisit-after" content="3 days">
    <meta name="author" content="Social Analytics (HK) Limited, Master Concept Group">

    <!-- Search Engine -->
    <link rel="canonical" href="https://www.goodad.co" rel="nofollow"/>
    <meta name="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!">
    <meta name="image" content="http://goodad.co/images/goodad_logo_sq.png">
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="GoodBlog - Result Oriented Marketing Tips for SME">
    <meta itemprop="description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!">
    <meta itemprop="image" content="http://goodad.co/images/goodad_logo_sq.png">
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="GoodBlog - Result Oriented Marketing Tips for SME">
    <meta name="og:description" content="Result Oriented Marketing for Google Ads set in 3 min. Auto Ads/Keywords suggestion and optimization by AI. Advertise now!">
    <meta name="og:image" content="http://goodad.co/images/goodad_cover.png">
    <meta name="og:url" content="http://goodad.co">
    <meta name="og:site_name" content="GoodBlog">
    <meta name="og:locale" content="en_HK">
    <meta name="og:video" content="https://youtu.be/rkEOOKN1tUQ">
    <meta name="fb:admins" content="267282930737726">
    <meta name="og:type" content="website">
    <!-- Open Graph general (Facebook, Pinterest & Google+) End-->
    <meta content="summary" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Webflow" name="generator">
      <Helmet/>
      <Header />
      <BlogHeader />
      <div id="Features" className="sec-b-blog">
        <div className="con-blog-list w-container">
          {children()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
