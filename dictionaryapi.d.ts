'use babel'

export type DictionaryResponse = Dictionary[] | NotFound

export type NotFound = {
  title: string
  message: string
  resolution: string
}

export type Dictionary = {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
}

export type Phonetic = {
  text?: string
  audio?: string
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
}

export type Definition = {
  definition: string
  example?: string
  synonyms?: string[]
}