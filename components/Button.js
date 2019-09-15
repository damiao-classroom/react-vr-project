import React, { Component } from 'react'
import { asset, Image, View, VrButton } from 'react-vr'

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            src: this.props.src
        }
    }

    render(){
        return(
            <View>
                <VrButton>
                    <Image
                        source={asset(this.props.src)}
                    >
                    </Image>
                </VrButton>
            </View>
        )
    }

}

export default Button