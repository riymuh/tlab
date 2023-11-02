import { useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CardComponent from './components/CardComponent';

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      title: "title 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab odit quia.",
      platform: "PC (Windows)",
      release_date: "2022-10-04"
    },
    {
      id: 2,
      title: "title 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab odit quia.",
      platform: "PC (Windows)",
      release_date: "2022-10-04"
    },
    {
      id: 3,
      title: "title 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab odit quia.",
      platform: "PC (Windows)",
      release_date: "2022-10-04"
    }
  ]);

  return (
    <div className="App">
      <HeaderComponent />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="relative bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:py-32 lg:text-left">
              <h2 className="font-bold tracking-tight text-white sm:text-4xl text-center">Pilih Game Favorite Kalian</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-center">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Signup for Free Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="max-w-7xl py-6 sm:px-6 lg:px-8 flex justify-between">
          <div>Game Terbaru</div>
          <div>02</div>
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-7xl">
          {
            games.map((item) =>
              <CardComponent key={item.id} item={item} />
            )
          }
        </div>

      </div>

    </div>
  );
}

export default App;
