import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Label, Input, FormBtn } from '../../components/Form';

class Podcast extends Component {
  state = {
    podcasts: [],
    scrapes: [],
    podcast: '',
    episode: '',
    link: '',
    img: ''
  };

// **************************************************************/
// Load Data on Component Mount  

  componentDidMount() {
    this.loadPodcasts();
    this.loadScrapes();
  }

  loadPodcasts = () => {
    API.getPodcasts()
      .then(res =>
        this.setState({ podcasts: res.data, podcast: '', episode: '', link: '', img: '' })
      )
      .catch(err => console.log(err));
  };

  loadScrapes = () => {
    API.getScrapes()
      .then(res => res.data.sort( (a,b) => Math.random() > .5 ) )
      .then(data => this.setState({ scrapes: data }))
      .catch(err => console.log(err));
  }


// **************************************************************/
// Save Scrapes & Save New Podcasts

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.podcast && this.state.episode && this.state.link) {
      API.savePodcast({
        podcast: this.state.podcast,
        episode: this.state.episode,
        link: this.state.link,
        img: this.state.img
      })
      .then(res => this.loadPodcasts())
      .catch(err => console.log(err));
    }
  };

  handleScrapeSave = index => {
    let saved = this.state.scrapes.filter(i => i._id == index);
    let newScrapes = this.state.scrapes.filter(i => i._id !== index);
    API.savePodcast(saved)
      .then(res => this.loadPodcasts())
      .then(() => this.setState({scrapes: newScrapes}))
      .catch(err => console.log(err));
  }

// **************************************************************/
// Remove Saves

  unsavePodcast = index => {
    API.deletePodcast(index)
      .then(res => this.loadPodcast())
      .catch(err => console.log(err));
  };

// **************************************************************/
// Render

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Jumbotron>
              <h1>Recent Episodes</h1>
            </Jumbotron>
            <List>
                { this.state.scrapes.map(podcast => (
                  <ListItem key={podcast._id}>
                    <a href={podcast.link} target='_blank'>
                      <h4>{podcast.episode}</h4>
                      <small>{podcast.podcast}</small>
                      <img src={podcast.img} />
                      </a>
                    <DeleteBtn onClick={() => this.unsavePodcast(podcast._id)} />
                  </ListItem>
                )) }
            </List>
            <Jumbotron>
              <h1>Save Your Own</h1>
            </Jumbotron>
            <form>
              <Label htmlFor='podcast'>Podcast Name:</Label>
              <Input
                value={this.state.podcast}
                onChange={this.handleInputChange}
                name='podcast'
                placeholder='The Awesome Show'
              />
              <Label htmlFor='episode'>Episode Title:</Label>
              <Input
                value={this.state.episode}
                onChange={this.handleInputChange}
                name='episode'
                placeholder='The Awesome Episode'
              />
              <Label htmlFor='link'>Episode Link:</Label>
              <Input
                value={this.state.link}
                onChange={this.handleInputChange}
                name='link'
                placeholder='https://...'
              />
              <Label htmlFor='img'>Cover Image:</Label>
              <Input
                value={this.state.img}
                onChange={this.handleInputChange}
                name='img'
                placeholder='https://...'
              />
              <FormBtn
                disabled={!(this.state.podcast && this.state.episode && this.state.link)}
                onClick={this.handleFormSubmit}
              >
                Save Episode
              </FormBtn>
            </form>
          </Col>
          <Col size='md-6 sm-12'>
            <Jumbotron>
              <h1>Saved Podcasts</h1>
            </Jumbotron>
            {this.state.podcasts.length ? (
              <List>
                { this.state.podcasts.map(podcast => (
                  <ListItem key={podcast._id}>
                    <a href={podcast.link} target='_blank'>
                      <h4>{podcast.episode}</h4>
                      <small>{podcast.podcast}</small>
                      <img src={podcast.img} />
                      </a>
                    <DeleteBtn onClick={() => this.unsavePodcast(podcast._id)} />
                  </ListItem>
                )) }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Podcast;
