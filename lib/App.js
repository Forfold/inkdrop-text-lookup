'use babel'
import React, { useEffect, useRef, useState } from 'react'
import { CompositeDisposable } from 'event-kit'
import DialogContent from './DialogContent'

export default function App() {
  const { MessageDialog } = inkdrop.components.classes
  const subscriptions = useRef(new CompositeDisposable())
  const dialog = useRef(null)

  const [selection, setSelection] = useState('')

  // Register handleShowDialog within Inkdrop
  useEffect(() => {
    subscriptions.current.add(inkdrop.commands.add(document.body, {
      'lookup': () => handleShowDialog()
    }))

    return () => subscriptions.current.dispose()
  }, [])

  function getSelectedText() {
    const el = document.activeElement
    return el.value.slice(el.selectionStart, el.selectionEnd)
  }

  function handleShowDialog() {
    if (dialog.current.isShown) {
      dialog.current.dismissDialog()
      return
    }

    const text = getSelectedText()
    if (text) {
      setSelection(text)
      dialog.current.showDialog()
    }
  }

  // todo: validate/normalize selection before opening

  let title = selection
  if (title.length > 0) {
    title = title.charAt(0).toUpperCase() + title.slice(1)
  }
  
  return (
    <MessageDialog ref={dialog} title={title}>
      <DialogContent selection={selection} />
    </MessageDialog>
  )
}
