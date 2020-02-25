import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findNote, findFolder } from '../notes-helpers'
import './NotePageNav.css'

export default class NotePageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;
  render() {
    console.log(this.props)
    const { notes, folders, } = this.context
    const { note_id } = this.props.match.params
    const note = findNote(notes, note_id) || {}
    const folder = findFolder(folders, note.folderid)
    console.log(this.context)
    return (
      < div className='NotePageNav' >
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {
          folder && (
            <h3 className='NotePageNav__folder-name'>
              {folder.folder_name}
            </h3>
          )
        }
      </div >
    )
  }
}
