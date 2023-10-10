const Info = ( {info} ) => {
  return (
    <>
    {info?.map(info => (
      <div className="subheading mb-5">
      {info.address} · {info.contactNo} ·
      <a href="mailto:name@email.com">{info.email}</a>
      </div>
    ))}
    </>
  );
}

export default Info;