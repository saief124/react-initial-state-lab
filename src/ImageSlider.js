// your ImageSlider code here!
import React, {Component} from 'react';

export default class ImageSlider extends Component{
    constructor(){
        super()
        this.state={
            // property: this.props.property
            currentSlideIndex: 0
        }
    }
    render (){
        return(
            <div className='Slide Index'>
               I am on slide {this.state.currentSlideIndex}

            </div>
        )
    }
}