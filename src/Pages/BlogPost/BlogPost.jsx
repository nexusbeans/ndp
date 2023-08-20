import React from "react";
import "./BlogPost.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import poemimage from "../../assets/images/poem.jpg";
import blogData from "../../Api/BlogData";

function BlogPost() {
  const blogItems = blogData.map((blog, index) => (
    <Col md={12} key={index}>
      <div className="blog_card">
        {/* <div className="blog_card_image">
          <img src={poemimage} alt="img" />
        </div> */}
        <div className="dateTitle">
          <div className="dateTitleInner">
            <p>{blog.author}</p>
          </div>
        </div>
        <div className="blog_card_content">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div className="name_items">
            <p>{blog.date}</p>
          </div>
        </div>
      </div>
    </Col>
  ));

  return (
    <>
      <Header />
      <main className="blogPost default_layout mt-0">
        <section className="contact__banner blogPost_section_main">
          <Container>
            <div className="banner_contactLayout">
              <h2>Poem By Shri Ashish</h2>
            </div>
          </Container>
        </section>
        <section className="blogPost_section mt-5">
          <Container>
            <Row>{blogItems}</Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
