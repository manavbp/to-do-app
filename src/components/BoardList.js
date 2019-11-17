import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import { TextField, Paper } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export class BoardList extends React.Component {

    state = {
        openModal: false,
        newBoardTitle: ''
    }

    handleChangeTitle = e => {
        this.setState({newBoardTitle: e.target.value})
    }

    handleOpenModal = () => {
        this.setState({openModal: true})
    }

    handleCloseModal = () => {
        this.setState({openModal: false})
    }

    handleRenameBoard = (board_id) => {
        const { renameBoard }= this.props;
        renameBoard({board_id, title: this.state.newBoardTitle})
        this.setState({openModal: false})
    }

    handleDeleteBoard = (board_id) => {
        const { deleteBoard }= this.props;
        deleteBoard({board_id});
    }

    render(){ 
        const { boards }= this.props;
        const boardIdArr = Object.keys(boards)

        if(boardIdArr.length>0)
            return(
                <Grid container justify="center" spacing={2} style={{marginTop: '20px', paddingLeft: `20px`, paddingRight: `20px`, marginBottom: '30px'}}>
                    <Typography variant="h3">List of Boards</Typography>
                        {
                            boardIdArr.map((board_id)=> {
                                let board = boards[board_id];
                                return <Grid item xs={12} key={board_id}>
                                    <Card>
                                    <CardActionArea>
                                        <Link
                                            key={board_id}
                                            to={`/${board_id}`}
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
                                                <Button size="small" color="primary" onClick={()=> this.handleDeleteBoard(board_id)}>
                                                    Delete
                                                </Button>
                                                <Button size="small" color="primary" onClick={()=> this.handleOpenModal()}>
                                                    Rename
                                                </Button>
                                                <Modal
                                                    aria-labelledby="simple-modal-title"
                                                    aria-describedby="simple-modal-description"
                                                    open={this.state.openModal}
                                                    onClose={()=> this.handleCloseModal()}
                                                    closeAfterTransition
                                                    BackdropComponent={Backdrop}
                                                    BackdropProps={{
                                                        timeout: 500,
                                                    }}
                                                >
                                                    <Fade in={this.state.openModal}>
                                                    <Paper>
                                                        <Grid container style={{padding: '20px 0px 20px 30px'}}>                                                            
                                                                <Grid item xs={12}>
                                                                    <Typography variant="h6">
                                                                        Enter A New Board Name
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField
                                                                        margin="normal"
                                                                        label="New Title"
                                                                        value={this.state.newBoardTitle}
                                                                        onChange={this.handleChangeTitle}
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Button type="submit" onClick={()=>this.handleRenameBoard(board_id)}>Submit</Button>
                                                                </Grid>
                                                        </Grid>
                                                        </Paper>
                                                    </Fade>
                                                </Modal>
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