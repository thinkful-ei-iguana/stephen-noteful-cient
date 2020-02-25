import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import { findNote } from '../notes-helpers'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes = [] } = this.context
    const { note_id } = this.props.match.params
    console.log(this.props.match.params)
    const note = findNote(notes, note_id) || { content: '' }
    console.log(notes)
    return (
      < section className='NotePageMain' >
        <Note
          id={note.id}
          name={note.note_name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section >
    )
  }
}
