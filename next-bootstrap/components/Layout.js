import Head from 'next/head';
import NavigationBar from './NavigationBar';
// import Scrollspy from 'react-scrollspy';


import { 
  Nav,
  Navbar
} from 'react-bootstrap';

const Layout = (props) => (
  <div>
<React.Fragment>
    <Head>
      <title>BMD React Next</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet"></link>
      {/* <link rel="stylesheet" href="static/assets/global.css"></link> */}
    </Head>
    
    <NavigationBar />

</React.Fragment>
    <>
      {props.children}
      <style jsx global >{` 

        body {
          background-color: #f5f5f5;
          color: #4e4e4e;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #1e1e1e;
        }

        a {
          color: #1e1e1e;
          transition: all 0.5s ease-in-out;
        }

        a:hover {
          color: #0078ff;
          text-decoration: none;
          transition: all 0.5s ease-in-out;
        }

        .p-r {
          position: relative;
        }

        .color-a {
          color: #0078ff;
        }

        .color-d {
          color: #f5f5f5;
        }

        .color-text-a {
          color: #4e4e4e;
        }

        .box-shadow,
        .paralax-mf,
        .service-box,
        .work-box,
        .card-blog {
          box-shadow: 0 13px 8px -10px rgba(0, 0, 0, 0.1);
        }

        .box-shadow-a,
        .button:hover {
          box-shadow: 0 0 0 4px #cde1f8;
        }

        .display-5 {
          font-size: 2.5rem;
          font-weight: 300;
          line-height: 1.1;
        }

        .display-6 {
          font-size: 2rem;
          font-weight: 300;
          line-height: 1.1;
        }

        .avatar {
          width: 32px;
          height: 32px;
          margin-right: 4px;
          overflow: hidden;
        }

        .bg-image {
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center center;
        }

        .overlay-mf {
          background-color: #0078ff;
        }

        .overlay-mf {
          position: absolute;
          top: 0;
          left: 0px;
          padding: 0;
          height: 100%;
          width: 100%;
          opacity: .7;
        }

        .paralax-mf {
          position: relative;
          padding: 8rem 0;
        }

        .display-table {
          width: 100%;
          height: 100%;
          display: table;
        }

        .table-cell {
          display: table-cell;
          vertical-align: middle;
        }

        /*--/ Sections /--*/

        .sect-4 {
          padding: 4rem 0;
        }

        .sect-pt4 {
          padding-top: 4rem;
        }

        .sect-mt4 {
          margin-top: 4rem;
        }

        /*--/ Title s /--*/

        .title-s {
          font-weight: 600;
          color: #1e1e1e;
          font-size: 1.1rem;
        }

        /*--/ Title A /--*/

        .title-box {
          margin-bottom: 4rem;
        }

        .title-a {
          font-size: 3rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .subtitle-a {
          color: #4e4e4e;
        }

        .line-mf {
          width: 40px;
          height: 5px;
          background-color: #0078ff;
          margin: 0 auto;
        }

        /*--/ Title Left /--*/

        .title-box-2 {
          margin-bottom: 3rem;
        }

        .title-left {
          font-size: 2rem;
          position: relative;
        }

        .title-left:before {
          content: '';
          position: absolute;
          height: 3px;
          background-color: #0078ff;
          width: 100px;
          bottom: -12px;
        }

        /*------/ Box /------*/

        .box-pl2 {
          padding-left: 2rem;
        }

        .box-shadow-full {
          padding: 3rem 1.25rem;
          position: relative;
          background-color: #fff;
          margin-bottom: 3rem;
          z-index: 2;
          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
        }

        /*------/ Socials /------*/

        .socials {
          padding: 1.5rem 0;
        }

        .socials ul li {
          display: inline-block;
        }

        .socials .ico-circle {
          height: 40px;
          width: 40px;
          font-size: 1.7rem;
          border-radius: 50%;
          line-height: 1.4;
          margin: 0 15px 0 0;
          box-shadow: 0 0 0 3px #0078ff;
          transition: all 500ms ease;
        }

        .socials .ico-circle:hover {
          background-color: #0078ff;
          color: #fff;
          box-shadow: 0 0 0 3px #cde1f8;
          transition: all 500ms ease;
        }

        /*------/ Ul resect /------*/

        .ul-resect,
        .socials ul,
        .list-ico,
        .blog-wrapper .post-meta ul,
        .box-comments .list-comments,
        .widget-sidebar .list-sidebar,
        .widget-tags ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
        }

        .list-ico {
          line-height: 2;
        }

        .list-ico span {
          color: #0078ff;
          margin-right: 10px;
        }

        /*------/ Ico Circle /------*/

        .ico-circle {
          height: 100px;
          width: 100px;
          font-size: 2rem;
          border-radius: 50%;
          line-height: 1.55;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 0 0 10px #0078ff;
          display: block;
        }



        /*--/ Scrolltop s /--*/

        .scrolltop-mf {
          position: relative;
          display: none;
        }

        .scrolltop-mf span {
          z-index: 999;
          position: fixed;
          width: 42px;
          height: 42px;
          background-color: #0078ff;
          opacity: .7;
          font-size: 1.6rem;
          line-height: 1.5;
          text-align: center;
          color: #fff;
          top: auto;
          left: auto;
          right: 30px;
          bottom: 50px;
          cursor: pointer;
          border-radius: 50%;
        }

        /* Back to top button */

        .back-to-top {
          position: fixed;
          display: none;
          background: #0078ff;
          color: #fff;
          width: 44px;
          height: 44px;
          text-align: center;
          line-height: 1;
          font-size: 16px;
          border-radius: 50%;
          right: 15px;
          bottom: 15px;
          transition: background 0.5s;
          z-index: 11;
        }

        .back-to-top i {
          padding-top: 12px;
          color: #fff;
        }

        /* Prelaoder */

        #preloader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          overflow: hidden;
          background: #fff;
        }

        #preloader:before {
          content: "";
          position: fixed;
          top: calc(50% - 30px);
          left: calc(50% - 30px);
          border: 6px solid #f2f2f2;
          border-top: 6px solid #0078ff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          -webkit-animation: animate-preloader 1s linear infinite;
          animation: animate-preloader 1s linear infinite;
        }

        @-webkit-keyframes animate-preloader {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes animate-preloader {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

      `}</style>
    </>
  </div>

);

export default Layout;

