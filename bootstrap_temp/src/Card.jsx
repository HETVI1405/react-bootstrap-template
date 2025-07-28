import profileImg from "./assets/portrait-happy-woman-with-digital-tablet.jpg";



export default function Card() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold fs-1">Hi, Hi, I'm Riya Deo.</h1>
          <p className="text fs-5">
            A freelance Web developer from London. I convert custom web designs
            to bootstrap templates.
            <br />I make YouTube videos and write Blog.
          </p>
          <button className="btn btn-primary btn-lg mb-3">I'M AVAILABLE</button>
          <div className="mt-3 fs-4">
            <i className="bi bi-facebook me-3"></i>
            <i className="bi bi-twitter-x me-3"></i>
            <i className="bi bi-instagram me-3"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src={profileImg
            }
            alt="John Deo"
            className="img"
            style={{ Width: "300px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}