import React from 'react'

const Filter = ({termSearch, handleSearchTermChange}) => (
    <>find countries <input value={termSearch}
    onChange={handleSearchTermChange}/> </>
)

export default Filter