import React from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600, yellow400, yellow600 } from 'material-ui/styles/colors'


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
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
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
    <div>
    <AutoRotatingCarousel
            label="Get started"
            open
          >
            <Slide
              media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
              mediaBackgroundStyle={{ backgroundColor: red400 }}
              contentStyle={{ backgroundColor: red600 }}
              title="Page 1"
              subtitle="Page 1 body"
            />
            <Slide
              media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
              mediaBackgroundStyle={{ backgroundColor: blue400 }}
              contentStyle={{ backgroundColor: blue600 }}
              title="Page 2"
              subtitle="Page 2 body"
            />
            <Slide
              media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
              mediaBackgroundStyle={{ backgroundColor: green400 }}
              contentStyle={{ backgroundColor: green600 }}
              title="Page 3"
              subtitle="Page 3 body"
            />
            <Slide
              media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
              mediaBackgroundStyle={{ backgroundColor: yellow400 }}
              contentStyle={{ backgroundColor: yellow600 }}
              title="Page 4"
              subtitle="Page 4 body"
            />
          </AutoRotatingCarousel>
    </div>
  </div>
);

export default SnsPage;
