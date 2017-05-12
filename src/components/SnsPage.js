import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

const SnsPage = () => (
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
);

export default SnsPage;
