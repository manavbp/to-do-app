import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BoardThumbnail from './BoardThumbnail';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from "react-router-dom";


export class Home extends React.Component {

    state = {
        newBoardDesc: '',
        newBoardTitle: ''
    }

    handleChangeTitle = e => {
        this.setState({newBoardTitle: e.target.value})
    }

    handleChangeDesc = e => {
        this.setState({newBoardDesc: e.target.value})
    }

    renameABoard = ( id, title) => {
        const { renameBoard }= this.props;
        renameBoard({id, title})
    }

    deleteABoard = (id)=> {
        const { deleteBoard }= this.props;
        deleteBoard({id});
    }

    addABoard = ( title, desc)=> {
        console.log('add a board called')
        const { addBoard }= this.props;
        const { newBoardTitle, newBoardDesc } = this.state;
        addBoard({title: newBoardTitle, desc: newBoardDesc});
    }

    render(){ 
        const { boards }= this.props;
        console.log(boards)
        const boardIdArr = Object.keys(boards)
        return(
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                    {
                        boardIdArr.map((id)=> {
                            let board = boards[id];
                            return <Grid item>
                                <Card style={{maxWidth: '375'}}>
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
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container justify="center" direction="row">
                            <Grid item style={{ marginTop: '20px', marginBottom: '20px'}}>
                                <FormLabel>Add a new board</FormLabel>
                                <form onSubmit={()=> this.addABoard()} style={{textAlign: 'center'}} noValidate autoComplete="off" id="newBoard">
                                    <TextField
                                        id="outlined-basic"
                                        value={this.state.newBoardTitle}
                                        onChange={this.handleChangeTitle}
                                        label="Board Name"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        value={this.state.newBoardDesc}
                                        onChange={this.handleChangeDesc}
                                        label="Board Desc"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </form>
                                <Button type="submit" form="newBoard" value="Submit">Submit</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}