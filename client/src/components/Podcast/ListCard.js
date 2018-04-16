import React from "react";

const ListCard = (props) => (
  <div class="card horizontal">
    <div class="card-image">
      <img src={props.img}>
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title grey-text text-darken-4">{props.episode}</span>
        <p>{props.podcast}</p>
      </div>
      <div class="card-action">
        <a href={props.link} target="_blank">Listen to Podcast</a>
      {/* <Link to={"/podcast/" + props._id}>Add Notes</Link> */}
        {props.children}
      </div>
    </div>
  </div>
);

export default ListCard;
