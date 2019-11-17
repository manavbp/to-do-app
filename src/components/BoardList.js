import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


export class BoardList extends React.Component {

    renameABoard = ( id, title) => {
        const { renameBoard }= this.props;
        renameBoard({id, title})
    }

    deleteABoard = (id)=> {
        const { deleteBoard }= this.props;
        deleteBoard({id});
    }

    render(){ 
        const { boards }= this.props;
        const boardIdArr = Object.keys(boards)

        if(boardIdArr.length>0)
            return(
                <Grid container justify="center" spacing={2} style={{marginTop: '20px', paddingLeft: `20px`, paddingRight: `20px`, marginBottom: '30px'}}>
                    <Typography variant="h3">List of Boards</Typography>
                        {
                            boardIdArr.map((id)=> {
                                let board = boards[id];
                                return <Grid item xs={12}>
                                    <Card>
                                    <CardActionArea>
                                        <Link
                                            key={id}
                                            to={`/${id}`}
                                        >
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {board.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {board.desc}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={()=> this.deleteABoard(id)}>
                                                    Delete
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Rename
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                            })
                        }
                </Grid>
            );
            else
                return <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '20px', paddingLeft: '20px'}}>No Boards To Show</Typography>
    }
}