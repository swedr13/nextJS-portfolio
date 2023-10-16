const FullName = ( {fullName} ) => {
  return (
    <>
    {fullName?.map(fullName => (
    <h1 className="mb-0">{fullName.firstName} <span className="text-primary">{fullName.lastName}</span></h1>
    ))}
    </> 
  );
}

export default FullName;