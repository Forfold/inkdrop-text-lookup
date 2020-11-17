'use babel'
import React, { useEffect, useRef, useState } from 'react'
import p from 'prop-types'

// todo: support multiple languages from settings
const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default function DialogContent({ selection }) {
  return selection
}

DialogContent.propTypes = {
  selection: p.string,
}