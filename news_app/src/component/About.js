import React, { Component } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export class About extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container my-4">
          <h1> Introducing {document.title} : Your Ultimate Source for Real-Time News</h1>

          <p>In the fast-paced world we live in, staying informed is more crucial than ever. The constant flow of information requires a reliable and efficient platform to keep us updated on the latest events and developments. This is where <b>{document.title}</b> comes in – a revolutionary news app designed to provide you with real-time news, personalized content, and a seamless user experience.</p>

          <h2>Our Mission</h2>
          At <b>{document.title}</b>, our mission is to empower individuals with accurate, unbiased, and timely information. We understand the significance of staying informed in today's dynamic world, and we are committed to delivering news that matters to you. Our team of experienced journalists and developers have come together to create a platform that not only keeps you in the loop but also adapts to your interests and preferences.

          <h2>Why {document.title}?</h2>
          <b>1. Real-Time Updates : </b>
          We pride ourselves on delivering news as it happens. With <b>{document.title}</b>, you can kiss goodbye to the frustration of waiting for updates. Our real-time news feed ensures that you are always ahead of the curve, with breaking news and developments at your fingertips.
          <br />
          <b>2. Personalized Content : </b>
          We understand that each individual has unique interests and preferences. That's why <b>{document.title}</b> employs cutting-edge algorithms to curate a personalized news feed just for you. Tailored to your tastes, our app ensures that you get the news that matters most to you without the noise.
          <br />
          <b>3. User-Friendly Interface : </b>
          Navigating through a plethora of news stories should be a breeze, and <b>{document.title}</b> is designed with that in mind. Our intuitive user interface makes it easy for you to explore, read, and share news articles seamlessly. Whether you're a tech-savvy individual or new to news apps, our platform is user-friendly for everyone.
          <br />
          <b>4. Trustworthy Sources : </b>
          Credibility is the cornerstone of good journalism. At <b>{document.title}</b>, we source our news from reputable and trustworthy outlets to ensure the information you receive is accurate and reliable. You can rest assured that the news you consume through our app is from reliable sources.
          <br />
          {/* <h2>Meet the Team</h2>
        Behind every great app is a dedicated team, and at <b>{document.title}</b>, we take pride in our talented professionals who work tirelessly to bring you the latest news. From journalists with years of experience to skilled developers passionate about creating a seamless user experience, our team is committed to excellence. */}

          <h2>Get {document.title} Today!</h2>
          Join the millions of users who have already made <b>{document.title}</b> their go-to source for news. Stay informed, stay connected, and experience a new era of news consumption with our cutting-edge app. Download <b>{document.title}</b> today and embark on a journey of personalized, real-time news delivery.
          <br />
          <b>Thank you for choosing <b>{document.title}</b> – where information meets innovation! </b>


          <Footer />

        </div>
      </>
    )
  }
}

export default About
