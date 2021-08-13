import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class CourseItem extends Component {
    render() {
        const {hinhAnh, tenKhoaHoc, moTa} = this.props.course;
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={hinhAnh}
                        title="Contemplative Reptile"
                        style={{
                            height: 250
                        }}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            {tenKhoaHoc}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p" style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            height: 100,
                            width: 'auto'
                        }}>
                            {moTa}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <Button size="small" color="primary" >
                        Detail
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default CourseItem;