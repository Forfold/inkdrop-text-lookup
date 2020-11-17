'use babel'
import React from 'react'
import p from 'prop-types'
import useQuery from './useQuery'

export default function DialogContent({ selection }) {
  const { loading, error, data } = useQuery(selection)

  if (loading) return 'Loading...'
  if (error) return error

  if (data.title) {
    return (
      <React.Fragment>
        <h2>{data.title}</h2>
        <p>{data.message}</p>
        <p>{data.resolution}</p>
      </React.Fragment>
    )
  }

  const def = data[0]

  return (
    <p>
      {def.phonetics.map(p => p.text).join(', ')}
      {def.meanings.map(m => (
        <React.Fragment>
          <br />
          <hr />
          {m.partOfSpeech}
          <br />
          {m.definitions.map(d => (
            <React.Fragment>
              {d.definition}
              <br />
              { d.example && <i>"{d.example}"</i> }
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </p>
  )
}

DialogContent.propTypes = {
  selection: p.string,
}