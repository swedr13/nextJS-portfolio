const NavbarImage = ( {navbarImage} ) => {
  return (
    <>
    {navbarImage.map(navbarImage => (
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={navbarImage.image}
          alt=""
        />
      </span>
    ))}
    </>
  );
}

export default NavbarImage;