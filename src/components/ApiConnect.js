import React, { Component } from 'react'
import axios from 'axios'
import UnsplashImages from './UnsplashImages'
import PixabayImages from './PixabayImages'
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Paper, ButtonGroup, Button, Container, Select, MenuItem, InputLabel, Grid } from '@material-ui/core';
import './ApiConnect.css';
import PexelsImages from './PexelsImages';

const Unsplash_APIKey = process.env.REACT_APP_UNSPLASH_API_KEY    //Unsplash API Key imported from .env File
const Pixabay_APIKey = process.env.REACT_APP_PIXABAY_API_KEY      //Pixabay API Key imported from .env File
const Pexels_APIKEY = process.env.REACT_APP_PEXELS_API_KEY        //Pexels API Key imported from .env File 

export default class ApiConnect extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Unsplash_images: [],
            Pixabay_images: [],
            Pexels_images: [],
            amount: 10
        }
    }

    onSearchSubmit = async (term) => {

        let search = term;

        //<=======================================Unsplash Api=============================================>
        const response = await axios.get(`https://api.unsplash.com/search/photos?per_page=${this.state.amount}`, {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${Unsplash_APIKey}`
            }
        })
        this.setState({ Unsplash_images: response.data.results })


        //<======================================PixaBay Api=========================================> 
        const apiURL = 'https://pixabay.com/api';                      //Pixabay Api URL

        await axios.get(`${apiURL}/?key=${Pixabay_APIKey}&q=${search}&image_type=photo&per_page=${this.state.amount}`)
            .then(res => this.setState({ Pixabay_images: res.data.hits }))
            .catch(err => console.log(err));


        //<===================================Pexels API================================================>
        const PexelsApiUrl = 'https://api.pexels.com/v1';            //Pexels Api URL

        await axios.get(`${PexelsApiUrl}/search?query=${search}&per_page=${this.state.amount}`, {
            headers: {
                Authorization: `${Pexels_APIKEY}`
            }
        })
            .then(res => this.setState({ Pexels_images: res.data.photos }))
            .catch(err => console.log(err));



    }

    render() {

        return (
            <div>
                <Container className="ZBackground">
                    <h1 className="ZflexContainer">ZenSnap</h1>
                    <SearchBar userSubmit={this.onSearchSubmit} />
                </Container>
                <Router>

                    <Grid container>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={8}>
                            <ButtonGroup className="ZButtons" size="large" variant="text" color="primary" aria-label="text primary button group">
                                <Button><Link to='/UnsplashImages' className="ZText">Unsplash Images</Link></Button>
                                <Button><Link to='/PixabayImages' className="ZText">Pixabay Images</Link></Button>
                                <Button><Link to='/PexelsImages' className="ZText">Pexels Images</Link></Button>
                            </ButtonGroup>

                        </Grid>

                        <Grid item xs={3}>
                            <InputLabel><b>No. of Images</b></InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })}>
                                <MenuItem value={10}><b>10</b></MenuItem>
                                <MenuItem value={20}><b>20</b></MenuItem>
                                <MenuItem value={30}><b>30</b></MenuItem>
                                <MenuItem value={40}><b>40</b></MenuItem>
                                <MenuItem value={50}><b>50</b></MenuItem>
                            </Select>
                        </Grid>
                    </Grid>




                    <Paper elevation={3}>
                        <hr />
                    </Paper>
                    <br />



                    <Switch>
                        <Route path="/" exact component={() => (<UnsplashImages unsplashImages={this.state.Unsplash_images} />)} />
                        <Route path="/UnsplashImages" component={() => (<UnsplashImages unsplashImages={this.state.Unsplash_images} />)} />
                        <Route path="/PixabayImages" component={() => (<PixabayImages pixabayImages={this.state.Pixabay_images} />)} />
                        <Route path="/PexelsImages" component={() => (<PexelsImages pexelsImages={this.state.Pexels_images} />)} />
                    </Switch>

                </Router>

            </div>
        )
    }
}
