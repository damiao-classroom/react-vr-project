import React, { Component } from 'react'
import { View } from 'react-vr'
import Button from './Button'

class ButtonList extends Component{

    constructor(props){
        super(props)
        this.state = {
            buttons: [
                { key: 0, imageSrc: 'reactconf_00.jpg', buttonSrc: 'button-00.png' },
                { key: 1, imageSrc: 'reactconf_01.jpg', buttonSrc: 'button-01.png' },
                { key: 2, imageSrc: 'reactconf_02.jpg', buttonSrc: 'button-02.png' },
                { key: 3, imageSrc: 'reactconf_03.jpg', buttonSrc: 'button-03.png' }
            ]
        }
    }

    render(){
        return(
            <View>
                {
                    this.state.buttons.map(v => {
                        return (<Button src={v.buttonSrc} key={v.key}></Button>)
                    })
                }
            </View>
        )
    }
}

export default ButtonList