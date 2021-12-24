import React from 'react';
import SearchBar from './SearchBar';
import YoutubeApi from './Api/YoutubeApi';
import VideoList from './Api/VideoList/VideoList';
import VideoDetails from './Api/VideoList/VideoDetails';


class App extends React.Component {

    state = {
        videos : [],
        selectedVideo : null
    }

    componentDidMount(){
        this.onTermSubmit('building')    
    }


    onTermSubmit = async (term) =>{
         const response = await YoutubeApi.get('/search',{
            params : {
                q : term
            }
        })
        console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo : response.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        // console.log('from the app ' , video);
        this.setState({selectedVideo:video})
    }


    render(){
        return( 
        <div className = 'ui container'>
             <SearchBar onFormSubmit = {this.onTermSubmit} />
             <div className="ui grid">
                   <div className="ui row">
                         <div className="eleven wide column">
                               <VideoDetails  video = {this.state.selectedVideo}/>
                         </div>
                         <div className="five wide column">
                               <VideoList  
                                  videos = {this.state.videos}
                                  onVideoSelect = {this.onVideoSelect}         
                               />
                         </div>
                   </div>
             </div>
        </div>)
    }
}

export default App;