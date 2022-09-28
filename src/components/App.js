import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  })

  const formInput = userText => {
    setSearch(userText)
  }

  const filteredListings = () => {
    if (search.length > 0) {
      return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return listings
    }
  }

  const deleteListing = doomedListing => {

    const newListings = listings.filter(listing => listing.id !== doomedListing.id)

    setListings(newListings)

    fetch(`http://localhost:6001/listings/${doomedListing.id}`, {
      method: 'DELETE'
    })
    
  }

  return (
    <div className="app">
      <Header formInput={formInput} />
      <ListingsContainer deleteListing={deleteListing} listings={filteredListings()} />
    </div>
  );
}

export default App;
