import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            loading: false,
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.show !== this.state.show) {
            this.setState({show: nextProps.show});
        }
    }
    render() { 
        return (
            <>
                {this.state.show ? (
                    <div class="loading-backdrop">
                        <p>Loading...</p>
                        <div className='loading-container'>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='shadow'></div>
                            <div className='shadow'></div>
                            <div className='shadow'></div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}
 
