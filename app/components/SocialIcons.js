const SocialIcons = () => {
  return (
    <>
      <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
          <a href="facebook.com/swedr13">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-facebook fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="twitter.com/swedr420">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-twitter fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="linkedin.com/in/junelle-suaybaguio">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="github.com/swedr13">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-github fa-stack-1x fa-inverse" />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialIcons;