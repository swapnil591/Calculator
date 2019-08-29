/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *re
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component{
 
  constructor() {
    super()
    this.state = {
      resultText : ""
    }
  }

  calculationResult(){
    const text = this.state.resultText
  }

  buttonPressed(text){ 
    console.log(text)
    
    if(text == '='){
      return this.calculationResult()
    }
      
    
    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation){
    switch(operation){
      case 'D':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')

        })
    }
  }

  render(){

    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0, '=']]
    for(let i = 0; i < 4; i++){
      let row = []
      for(let j = 0; j < 3; j++){
        row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])}>
              <Text style={styles.btntext}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ['D', '+', '-', '*', '/']
    let ops = []
    for(let i = 0; i< 4; i++){
      ops.push(<TouchableOpacity style={styles.btn} onPress={() => this.operate(operations[i])}>
                  <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
                  </TouchableOpacity>)
    }



    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText} >{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}></Text> 
          </View>
          <View style={styles.buttons}>
              <View style={styles.numbers}>
                  {rows}
              </View>
              <View style={styles.operations}>
               {ops}
              </View>
          </View>
        </View>
    );
  }

}



const styles = StyleSheet.create({
  container:{
    flex: 1
   },
  result:{
    flex: 2,
    backgroundColor: 'red'
  },
  btn:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 30,
    color: 'white'
  },
  btntext:{
    fontSize: 30
  },
  resultText:{
    fontSize: 20,
    color: "white" 
  },
  calculationText:{
    fontSize: 24,
    color: 'white'
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  calculation:{
    flex: 1,
    backgroundColor: 'green'
  },
  white:{
    color: 'white'
  },
  buttons:{
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers:{
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations:{
    flex: 1,
    justifyContent: 'space-around' ,
    alignItems: 'stretch',
    backgroundColor: 'black'
  }
});

