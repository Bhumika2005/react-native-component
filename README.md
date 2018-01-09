# react-native-component
This repository is based on React Native basic component. 
How to navigate between screen, how to send data from one screen to another screen and API integration are covered in this repository. This is very useful for beginner. 

# Below Components are covered in this repo
1) Sidebar menu, Tab Navigator, Networking (API Integration), Stack Navigator, 
2) Image Loading ProgressBar
3) Basic component like View, Text, TextInput, Button, FlatList, ProgressDialog.

# Documentation
Create project :
- Give your destination "cd /path" 
- $react-native init ProjectName
            or
Getting Started from this link : https://facebook.github.io/react-native/docs/getting-started.html

  # Install below Component
    1)React Navigation for StackNavigator and TabNavigator
      $npm install --save react-navigation
      in .js file import {StackNavigator,TabNavigator} from 'react-navigation';
      
    2)SideBar Navigator Menu
      $npm i --save react-native-side-menu
      in .js file import SideMenu from 'react-native-side-menu';
      
    3)ProgressDialog
      $npm i -S react-native-simple-dialogs
      in .js file import { ProgressDialog } from 'react-native-simple-dialogs';
    
    4)Image Loading Progressbar
      $npm install react-native-image-progressbar --save
      in .js file import Image from 'react-native-image-progress';
      
    5)Elevated View - for Shadow to view
      $npm install react-native-elevated-view --save
      in .js file import ElevatedView from 'react-native-elevated-view';
    
    6)DateTime Format
      $npm install moment --save
      in .js file import Moment from 'moment';

# How to Compile
I have run on Android Device. So this instruction is for android 
- Provide android sdk path in android folder. Create local.properties file and add this sdk.dir=/path of sdk

To run app use ‘$react-native run-android’ for android device

To print log
globally installation - npm install -g eslint
local installation - sudo apt install eslint
after this run below command
1) for ios : $ react-native log-ios
2) for android : $ react-native log-android
