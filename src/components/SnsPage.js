import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: './images/avatar1.jpg',
    title: 'avatar1',
    author: 'avatar author',
  },
  {
    img: './images/jeju1.jpg',
    title: 'jeju title',
    author: 'jeju author',
  },
  {
    img: './images/yuchae.png',
    title: '유채 타이틀',
    author: '유채 이탈',
  },
  {
    img: './images/avatar1.jpg',
    title: 'avatar12',
    author: 'avatar author2',
  },
  {
    img: './images/jeju1.jpg',
    title: 'jeju title2',
    author: 'jeju author2',
  },
  {
    img: './images/yuchae.png',
    title: '유채 타이틀2',
    author: '유채 이탈2',
  },
];

const SnsPage = () => (
  <div>
    <div>
      <Card>
        <CardHeader
          title="윤중연"
          subtitle="서울 롯데호텔"
          avatar="./images/avatar1.jpg"
        />
        <CardMedia>
          <img src="images/lotteLounge.jpeg"/>
        </CardMedia>
        <CardTitle subtitle="Liked by Yoojong Bang, Taewook Kang" />
        <CardText>
          Quality time with quality people
        </CardText>
        <CardActions>
          <FlatButton label="#롯데호텔" />
          <FlatButton label="#불토" />
          <FlatButton label="#라운지" />
        </CardActions>
      </Card>
    </div>
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
       {tilesData.map((tile) => (
         <GridTile
           key={tile.title}
           title={tile.title}
           actionIcon={<IconButton></IconButton>}
           titleStyle={styles.titleStyle}
           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
         >
           <img src={tile.img} />
         </GridTile>
       ))}
       </GridList>
     </div>
  </div>
);

export default SnsPage;
