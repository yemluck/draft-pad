import React from 'react';
import CreateAndSearch from '../CreateAndSearch/CreateAndSearch';
import DisplayContainer from '../DisplayContainer/DisplayContainer';


function LandingPage(){


  return(
    <>
      <div>
        <CreateAndSearch />
      </div>
      <div>
        <DisplayContainer />
      </div>
    </>
  )
}

export default LandingPage;