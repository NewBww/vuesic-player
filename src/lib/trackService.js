class TrackService {
  async getAllItems(item) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${item}`)

      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.error(
        `ERROR FETCHING ALL ${item.toUpperCase()}: ${error.message}`
      )
    }
  }
  async getFilteredItemList(item, idList) {
    if (idList.length === 0) {
      return undefined
    }
    const filter = idList.map((id) => 'id=' + id).join('&')

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/${item}?${filter}`
      )
      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.error(
        `ERROR FETCHING ${item.toUpperCase()} OF ID ${idList.json(', ')}: ${
          error.message
        }`
      )
    }
  }
  async getItemById(item, id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/${item}/${id}`
      )
      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.error(
        `ERROR FETCHING ${item.toUpperCase()} ID ${id}: ${error.message}`
      )
    }
  }
}
export default TrackService
