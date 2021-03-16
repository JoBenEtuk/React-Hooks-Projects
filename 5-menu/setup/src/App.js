import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (cat) => {
    if (cat === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((items) => items.category === cat)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filterItems} items={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
