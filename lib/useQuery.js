'use babel'
import { useEffect, useState } from 'react'

// todo: support multiple languages from settings
const API_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default function useQuery(input) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  // todo: validate/normalize selection

  useEffect(() => {
    if (!input) return

    // todo: call different API (i.e. Wikipedia) if phrase
    fetch(API_ENDPOINT + input)
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data)
        return setData(data)
      })
      .catch(err => setError(err.message))
      .then(() => setLoading(false))
  }, [input])

  return { loading, error, data }
}
