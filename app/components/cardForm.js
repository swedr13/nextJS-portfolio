'use client'
import { useSession } from "next-auth/react";

const CardForm = () => {
  const { data: session } = useSession();
  return (
    <>
    {!session && (
        null
      )}

    {session && (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            placeholder="Title"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputLink">Link</label>
          <input
            type="text"
            className="form-control"
            id="inputLink"
            placeholder="Link"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea class="form-control" id="inputDescription" rows="4"></textarea>
      </div>
      <button type="submit" style={{ backgroundColor: "#bd5d38", borderColor: "#bd5d38" }} className="btn btn-primary">
        Submit
      </button>
    </form>
    )}
    </>
  );
}

export default CardForm;