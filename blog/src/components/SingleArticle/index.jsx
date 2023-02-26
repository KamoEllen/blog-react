import React from 'react';

const SingleArticle = () => {
  return (
   <div>
  {/* Header */}
 <header className="header header-inverse h-fullscreen pb-80" data-overlay={8}>
  <a href="https://data.whicdn.com/images/337152228/original.jpg">
    <img src={`${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg`} alt="Header background image" />
  </a>

    <div className="container text-center">
      <div className="row h-full">
        <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
          <p className="opacity-70">News</p>
          <br />
          <h1 className="display-4 hidden-sm-down">We've just passed 1,000 customers!</h1>
          <h1 className="hidden-md-up">We've just passed 1,000 customers!</h1>
          <br />
          <br />
          <p>
            <span className="opacity-70 mr-8">By</span>
            <a className="text-white" href="/">Hossein Shams</a>
          </p>
          <p>
            <img className="rounded-circle w-40" src="https://data.whicdn.com/images/337152228/original.jpg" alt="...">

          </p>
        </div>
        <div className="col-12 align-self-end text-center">
          <a className="scroll-down-1 scroll-down-inverse" href="/" data-scrollto="section-content">
            <span />
          </a>
        </div>
      </div>
    </div>
  </header>
  {/* END Header */}
  {/* Main container */}
  <main className="main-content">
    {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Blog content
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
<div className="section" id="section-content">
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-8 offset-lg-2">
        <p className="lead">Discover how you can make money online by leveraging the power of next-generation content and sustainable networks. Learn to customize your services to attract more clients and build a professional reputation in your niche market. </p>
        <hr className="w-100" />
        <p>Proactively build your brand's online presence through reliable applications and seamless markets. Don't wait any longer to monetize your skills and expertise. </p>
        <p>Compellingly embrace innovative services and alternative initiatives to tap into new revenue streams. Utilize interactive technologies to grow your business and attract more customers. </p>
      </div>
    </div>
    <br />
    <p>
      <img src="https://data.whicdn.com/images/337152228/original.jpg" alt="...">
    </p>
    <br />
    <div className="row">
      <div className="col-12 col-lg-8 offset-lg-2">
        <p>Assertively empower your business with customized alignments and market positioning services. Revolutionize your approach to strategic theme areas and leverage adaptive architectures to stay ahead of the competition. </p>
        <ul>
          <li>Coordinate business relationships to maximize profits</li>
          <li>Develop fully researched experiences and integrated systems</li>
          <li>Incentivize e-business methods of empowerment</li>
          <li>Empower customized alignments with go-forward vortals</li>
        </ul>
        <p>Quickly innovate high-quality catalysts for change and expedite infomediaries to promote your products. Network with other leaders in your industry to stay up-to-date on emerging trends and data. </p>
        <blockquote className="blockquote">
          <div className="quote-sign" />
          <p>Objectively grow out-of-the-box results with go-forward methodologies. Progressively exploit dynamic functionalities to drive profits. Competently facilitate timely total linkage with your customers.</p>
          <footer>Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <p>Proactively develop your leadership skills and plug-and-play paradigms to scale your business. Build client-centered intellectual capital after B2B total linkage to create a sustainable revenue stream. Continually innovate and redefine out-of-the-box schemas to stay ahead of the curve. </p>
        <div className="gap-multiline-items-1 mt-30">
          <a className="badge badge-pill badge-default" href="/">Record your progress</a>
          <a className="badge badge-pill badge-default" href="/">Track your customers</a>
          <a className="badge badge-pill badge-default" href="/">Stay up-to-date with news</a>
        </div>
      </div>
    </div>
  </div>
</div> 
    {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Comments
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
    <div className="section bt-1 bg-grey">
      <div className="container">
        <div className="row text-center">
          <div className="text-center p-5">
            COMMENTS HERE.
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* END Main container */}
</div>

  );
};

export default SingleArticle;
