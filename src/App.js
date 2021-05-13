
import React,{Component} from 'react';
import BookList from './components/BookList';
import { Container}  from '@material-ui/core';

import Books from './static-data/Books'
import SearchBar from './components/searchBar';

//함수형 컴포넌트
class  App extends Component {

  render(){
    return (
        <Container> 
          <SearchBar /> 
          <Gird container spacing={2} >
            <Grid item>
              <BookList book={Books} /> 
            </Grid>
          </Gird>
        </Container>
    )
    }
}

export default App;
