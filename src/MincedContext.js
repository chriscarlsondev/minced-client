import React from 'react'

const MincedContext = React.createContext({
    Recipes: [],
    handleAddNewRecipe:  () => {},
    handleDeleteRecipe:  () => {},
})

export default MincedContext
