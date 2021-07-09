import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from '../components/Header';
import Seo from "../components/seo";
import "../components/style.css";
import Footer from "../components/Footer";
import {FaInstagram,FaFacebookSquare} from 'react-icons/fa';
const IndexPage = () => 
(
  <div>
    <Seo title="Educated buyer" description="Get top news,comparision and get best deals about tech gadgets"/>
   <Header/>
   <div className="homepage">
     <div className="homepage_latest">
  <h1 className="homepage_name">Latest</h1>
  <hr className="latest_underline"/>
  
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
  <Link to="/sample" className="latest_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={300} height={200} className="latest_image"/>
   <h3 className="latest_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
  </Link>
   </div>
   <div className="second_section">
     <div className="follow_us">
     <h4>Follow us on</h4>
                 <div className="social_media">
                 <a href="https://www.instagram.com/educated_buyer/">
                    <FaInstagram className="instagram"/>                 
                 </a>
                 <a href="https://www.facebook.com/educated_buyer-100641152284986">
               <FaFacebookSquare className="facebook"/>
                 </a>
                 </div>
     </div>
     <div className="popular">
       <h3>Popular</h3>
       <hr/>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
       <Link to="/sample" className="popular_posts" >
   <StaticImage src="D:\bussiness\Blog\src\images\mobile.jpg" alt="mobile"width={150} height={90} className="popular_image"/>
   <h5 className="popular_title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
  </Link>
     </div>
   </div>
   </div>
  <Footer className="latest_footer"/>  
  </div>
)

export default IndexPage
