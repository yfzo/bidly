import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../home.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      redirect: false
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ redirect: true});
    console.log("redirect to register page");
  }
  
    render() {
      if (this.state.redirect == true ) {
        return <Redirect to='/register' />
      }
      const profileUrl = "users/" + localStorage.getItem('user_id')
      const isLoggedIn = localStorage.getItem('user_id') !== null

      return (
        <div>
          {isLoggedIn ? (
            <div className="home">
              <Card body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex risus, egestas aliquam felis quis, ultricies
                sagittis justo. Donec quis ex tellus. Fusce varius leo nec mi tincidunt tempor. Phasellus hendrerit ligula eu nisi 
                malesuada, eget vestibulum metus dignissim. Aliquam egestas pellentesque condimentum. Aenean in sapien felis. Aenean 
                mollis ligula magna, quis tincidunt quam pulvinar eu. Vivamus mattis nulla id pellentesque dignissim.

                Sed semper lectus dolor, non malesuada nulla efficitur quis. Ut vel erat sed eros dignissim convallis. Nam aliquet
                purus orci, et ultrices nibh viverra sit amet. Donec sit amet sem in libero convallis rhoncus. Nunc laoreet 
                venenatis ligula id sollicitudin. Fusce et auctor lorem, a posuere magna. In hac habitasse platea dictumst. Donec 
                commodo, nulla laoreet accumsan hendrerit, sem lacus efficitur lectus, eget rutrum felis quam id dolor. Nunc 
                interdum dictum enim, at rhoncus mauris dignissim quis. Aenean at ex at odio accumsan congue id sed lorem. Vivamus 
                accumsan ex fringilla, venenatis felis sit amet, tempor odio.

                Maecenas fringilla ac sapien quis placerat. Cras ultricies est quam, a efficitur orci aliquet a. Nulla vitae diam quis 
                sem mattis ullamcorper. Duis vel tortor dignissim, sagittis tellus nec, porta eros. Cras diam eros, ultrices porta nibh 
                eget, ullamcorper placerat odio. Proin sit amet tempor velit, eu pellentesque libero. Quisque faucibus, enim et tincidunt 
                cursus, felis magna fringilla elit, id imperdiet sem justo sit amet est. Pellentesque et mi consequat nulla aliquet 
                molestie. Praesent congue diam nulla, eu tempus purus luctus in. Donec ullamcorper pretium nulla, ut gravida nisl 
                convallis ac. Ut in erat mi. Phasellus porttitor scelerisque lacus, id tristique nisl condimentum quis. Fusce suscipit 
                metus dui, sed scelerisque dui fringilla id. Nullam dignissim, libero non mattis lacinia, nisl sapien gravida purus, sit 
                amet dictum massa nulla sit amet est.
              </Card>
              <CardDeck style={{ marginLeft : 0, marginRight : 0, }}>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 1</Card.Title>
                    <Card.Text>
                      Praesent vel ligula nec nibh accumsan gravida. Nullam sed tincidunt lacus. Morbi consequat, risus in 
                      vestibulum ornare, mauris justo molestie ipsum, luctus laoreet nunc enim eu quam. Mauris porta risus et 
                      libero sollicitudin euismod. Sed leo diam, sodales vel risus vitae, consectetur accumsan orci. Vestibulum 
                      leo nunc, sollicitudin ac turpis eget, ullamcorper mollis turpis. Pellentesque a aliquam ante. Praesent 
                      laoreet non massa non interdum.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 2</Card.Title>
                    <Card.Text>
                      Cras fermentum leo ut aliquet ullamcorper. Nullam dictum tellus in tincidunt maximus. Pellentesque habitant 
                      morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt scelerisque quam id 
                      tincidunt. Praesent eu gravida justo. Quisque posuere metus libero, ut suscipit quam facilisis in. Quisque 
                      vulputate, lacus et pellentesque euismod, lacus est elementum quam, quis dictum diam eros sit amet leo. 
                      Proin id porttitor nisi. Vivamus luctus tellus sed nunc accumsan fermentum. Donec eu arcu quis nisi ornare 
                      dapibus commodo sed ex.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 3</Card.Title>
                    <Card.Text>
                      Nam quis justo libero. Maecenas lacus erat, accumsan eu scelerisque at, tincidunt nec turpis. Nunc metus 
                      magna, facilisis eu rutrum vitae, tincidunt vel ante. Phasellus sagittis vulputate metus imperdiet 
                      sollicitudin. Vivamus sed tincidunt nulla, in laoreet orci. Nullam ligula tellus, finibus eget libero vel, 
                      ornare dignissim ligula. Donec dignissim purus quis nulla molestie tincidunt. Praesent consectetur laoreet arcu 
                      pharetra ultrices. Donec lacus erat, pharetra vitae tortor non, scelerisque gravida nulla. Morbi varius condimentum 
                      rutrum. Mauris bibendum ante quam, sit amet ultricies mauris tristique at.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
              <ButtonToolbar>
                <Button style = {{marginRight : 15}} id="homeBrowseButton" variant="outline-primary"><Link to="/auctions" id="homeBrowseLink">Browse Auctions</Link></Button>
              </ButtonToolbar>
            </div>
        ) : (
            <div className="home">
              <Card body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex risus, egestas aliquam felis quis, ultricies
                sagittis justo. Donec quis ex tellus. Fusce varius leo nec mi tincidunt tempor. Phasellus hendrerit ligula eu nisi 
                malesuada, eget vestibulum metus dignissim. Aliquam egestas pellentesque condimentum. Aenean in sapien felis. Aenean 
                mollis ligula magna, quis tincidunt quam pulvinar eu. Vivamus mattis nulla id pellentesque dignissim.

                Sed semper lectus dolor, non malesuada nulla efficitur quis. Ut vel erat sed eros dignissim convallis. Nam aliquet
                purus orci, et ultrices nibh viverra sit amet. Donec sit amet sem in libero convallis rhoncus. Nunc laoreet 
                venenatis ligula id sollicitudin. Fusce et auctor lorem, a posuere magna. In hac habitasse platea dictumst. Donec 
                commodo, nulla laoreet accumsan hendrerit, sem lacus efficitur lectus, eget rutrum felis quam id dolor. Nunc 
                interdum dictum enim, at rhoncus mauris dignissim quis. Aenean at ex at odio accumsan congue id sed lorem. Vivamus 
                accumsan ex fringilla, venenatis felis sit amet, tempor odio.

                Maecenas fringilla ac sapien quis placerat. Cras ultricies est quam, a efficitur orci aliquet a. Nulla vitae diam quis 
                sem mattis ullamcorper. Duis vel tortor dignissim, sagittis tellus nec, porta eros. Cras diam eros, ultrices porta nibh 
                eget, ullamcorper placerat odio. Proin sit amet tempor velit, eu pellentesque libero. Quisque faucibus, enim et tincidunt 
                cursus, felis magna fringilla elit, id imperdiet sem justo sit amet est. Pellentesque et mi consequat nulla aliquet 
                molestie. Praesent congue diam nulla, eu tempus purus luctus in. Donec ullamcorper pretium nulla, ut gravida nisl 
                convallis ac. Ut in erat mi. Phasellus porttitor scelerisque lacus, id tristique nisl condimentum quis. Fusce suscipit 
                metus dui, sed scelerisque dui fringilla id. Nullam dignissim, libero non mattis lacinia, nisl sapien gravida purus, sit 
                amet dictum massa nulla sit amet est.
              </Card>
              <CardDeck style={{ marginLeft : 0, marginRight : 0, }}>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 1</Card.Title>
                    <Card.Text>
                      Praesent vel ligula nec nibh accumsan gravida. Nullam sed tincidunt lacus. Morbi consequat, risus in 
                      vestibulum ornare, mauris justo molestie ipsum, luctus laoreet nunc enim eu quam. Mauris porta risus et 
                      libero sollicitudin euismod. Sed leo diam, sodales vel risus vitae, consectetur accumsan orci. Vestibulum 
                      leo nunc, sollicitudin ac turpis eget, ullamcorper mollis turpis. Pellentesque a aliquam ante. Praesent 
                      laoreet non massa non interdum.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 2</Card.Title>
                    <Card.Text>
                      Cras fermentum leo ut aliquet ullamcorper. Nullam dictum tellus in tincidunt maximus. Pellentesque habitant 
                      morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt scelerisque quam id 
                      tincidunt. Praesent eu gravida justo. Quisque posuere metus libero, ut suscipit quam facilisis in. Quisque 
                      vulputate, lacus et pellentesque euismod, lacus est elementum quam, quis dictum diam eros sit amet leo. 
                      Proin id porttitor nisi. Vivamus luctus tellus sed nunc accumsan fermentum. Donec eu arcu quis nisi ornare 
                      dapibus commodo sed ex.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ marginLeft : 0, marginRight : 0, }}>
                  <Card.Body>
                    <Card.Title className="card-title">Step 3</Card.Title>
                    <Card.Text>
                      Nam quis justo libero. Maecenas lacus erat, accumsan eu scelerisque at, tincidunt nec turpis. Nunc metus 
                      magna, facilisis eu rutrum vitae, tincidunt vel ante. Phasellus sagittis vulputate metus imperdiet 
                      sollicitudin. Vivamus sed tincidunt nulla, in laoreet orci. Nullam ligula tellus, finibus eget libero vel, 
                      ornare dignissim ligula. Donec dignissim purus quis nulla molestie tincidunt. Praesent consectetur laoreet arcu 
                      pharetra ultrices. Donec lacus erat, pharetra vitae tortor non, scelerisque gravida nulla. Morbi varius condimentum 
                      rutrum. Mauris bibendum ante quam, sit amet ultricies mauris tristique at.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </CardDeck>
                <ButtonToolbar>
                  <Button id="homeBrowseButton" variant="outline-primary"><Link to="/auctions" id="homeBrowseLink">Browse Auctions</Link></Button>
                  <Button onClick={this.onClick} className="signup" variant="outline-primary">Sign up</Button>
                </ButtonToolbar>
            </div>
            )
          }
        </div>)
    }
  }