import React from "react";

import './post-add-form.css';

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Что нового будем делать?"
        className="form-control new-post-label"
      />
      <button
          className="btn btn-info"
          type="submit"
      >
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
