import React from 'react';
const PropTypes = require('prop-types');
import api from '../utils/api';

function SelectLanguage(props){
    console.log(props)
    const languages = ['All', ' JavaScript', ' Ruby', ' Java', ' CSS', ' Python'];
    return (
        <ul className="languages">
        {languages.map((language)=>{
            return (
                <li key={language} 
                    onClick={props.updateLanguage.bind(null,language)} 
                    style={language===props.selectedLanguage ? { color: '#d0021b'}: null}>
                    {language}
                </li>
            )
        })}
    </ul>
    )
}

function RepoGrid (props){
    // console.log(props.repos)

    return(
        <ul className="popular-list">
        
        {props.repos.map((repo, index)=>{

            return(
                <li key={repo.name} className='popular-item'>
                <div className='popular-rank'>#{index+1}</div>
                <ul className='space-list-items'>
                    <li>
                        <img 
                            className="avatar"
                            src={repo.owner.avatar_url}
                            alt={'Avatar for'+ repo.owner.login} />
                    </li>
                    <li> <a href={repo.html_url}>{repo.name}</a></li>
                    <li> @{repo.owner.login}</li>
                    <li> {repo.stargazers_count} stars</li>
                </ul>
            </li>
            )})}
        </ul> 
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    updateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component{

    constructor(props){
        super(props);
        this.state={
            selectedLanguage: 'All',
            repos: null

        };

        // this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(language){
        this.setState(()=>{
            return {
                selectedLanguage: language,
                repos: null
            }
        });

        api.fetchPopularRepos(language)
        .then((repos)=>{
            this.setState({
                repos: repos
            })
            // console.log(repos)
        })
    }

    componentDidMount(){
        // Ajax requist
        this.updateLanguage(this.state.selectedLanguage);
        
    }

    render(){
        return (
            <div>
                <SelectLanguage 
                updateLanguage={this.updateLanguage.bind(this)} 
                selectedLanguage={this.state.selectedLanguage}/>

                {! this.state.repos 
                    ? <p> LOADING</p>
                    : <RepoGrid repos={this.state.repos} />}

                

                {/* {JSON.stringify(this.state.repos, null, 2)} */}

            </div>
            
        )
    }

    // _updateLanguage=(e)=>{
    //     // this.setState({
    //     //         selectedLanguage: e.target.language    
    //     // })
    // }

}

module.exports=Popular;