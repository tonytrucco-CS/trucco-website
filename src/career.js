import React, { Component } from 'react';

import ListItem from './components/listitem'

class Career extends Component {
  render() {
    return (
      <div className="Career">
        <h2>Topics</h2>
        <h3>The Old Web</h3>
        <ul>
          <ListItem name='Dial-up' />
          <ListItem name='Internet on a disc' />
          <ListItem name='List of services' />
          <ListItem name='Terrible design' />
        </ul>

        <h3>Everywhere Web</h3>
        <ul>
          <ListItem name='Phones and phone apps' />
          <ListItem name='In cars, on tvs, in thermostats' />
          <ListItem name='At the movies and in stores' />
          
        </ul>

        <h3>How to Train Up</h3>
        <ul>
          <ListItem name='School, boot camps, self-teaching' />
          <ListItem name='Can start now, unlike other jobs' />
          <ListItem name='Takes a desire to create' />
        </ul>

        <h3>What to Expect</h3>
        <ul>
          <ListItem name='Lots of opportunities' />
          <ListItem name='All kinds of businesses' />
          <ListItem name='Pay and benefits' />
        </ul>
      </div>
    );
  }
}

export default Career;
