import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStausFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {

    const data = [
        { id: 1,label: 'Давайте начнем кодить', important: false},
        { id: 2,label: 'Сегодня на Реакте', important: true},
        { id: 3,label: 'Завтра уже на Редакс', important: false}
    ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStausFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
