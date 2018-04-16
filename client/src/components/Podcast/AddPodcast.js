import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Input from '../Layout';

class AddPodcast extends Component {
  static propTypes = {
    manuallyAdd: PropTypes.func
  }

  state = {
    podcast: '',
    episode: '',
    link: '',
    img: ''
  }

// **************************************************************/
// Capture Input Changes & Form Submit

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.podcast && this.state.episode && this.state.link) {
      this.props.manuallyAdd({
        podcast: this.state.podcast,
        episode: this.state.episode,
        link: this.state.link,
        img: this.state.img
      });
      this.setState({podcast: '', episode: '', link: '', img: '' });
    }
  };

// **************************************************************/
// Render Forms

  render(){
    return (
            <form>
            <Input 
            name='podcast'
            val={this.state.podcast}
            placeholder='https://...'
            onChange={this.handleInputChange}
            >
            Podcast Name:
            </Input>

              <input 
                type='text'
                value={this.state.episode}
                onChange={this.handleInputChange}
                name='episode'
                id='episode'
                placeholder='The Awesome Episode'
              />
              <label htmlFor='episode'>Episode Title:</label>
              
              <input 
                type='text'
                value={this.state.link}
                onChange={this.handleInputChange}
                name='link'
                id='link'
                placeholder='https://...'
              />
              <label htmlFor='link'>Episode Link:</label>
              

              <input 
                type='text'
                value={this.state.img}
                onChange={this.handleInputChange}
                name='img'
                id='img'
                placeholder='https://...'
              />
              <label htmlFor='img'>Cover Image:</label>
              
              <button
                type='submit'
                disabled={!(this.state.podcast && this.state.episode && this.state.link)}
                onClick={this.handleFormSubmit}
              >
              Add Episode
              </button>
            </form>
      )
  }
}

export default AddPodcast;
