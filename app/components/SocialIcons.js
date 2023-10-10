const SocialIcons = ( {socialIcons} ) => {
  return (
    <>
    {socialIcons?.map(socialIcons => (
    <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
            <a href={socialIcons.facebooklink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className={socialIcons.facebook}/>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href={socialIcons.twitterlink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className={socialIcons.twitter}/>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href={socialIcons.linkedinlink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className={socialIcons.linkedin}/>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href={socialIcons.githublink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className={socialIcons.github}/>
              </span>
            </a>
        </li>
    </ul>
    ))}
    </>
  );
}

export default SocialIcons;