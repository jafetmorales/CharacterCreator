# Implementation of a 3D Customizer tool with MyMiniFactory

Questions to answer:

- **What functionalities to implement?** Think of the minimum requirements to deliver a working end project.
- **Don't forget about the front end**: needs to be userfriendly (can be inspired by hero forge)


03/07/18:
Tasks and directions were discussed, the bigger axes of the project are for the moment:

- findind a way to integrate the reference skeleton (maybe with Three.js)
- think of the UI straight away (did a first version on adobe XD)
- look up react.js to have a clean code and application
- check for open source customization tools

04/07/18:

- Starting to design the interface (trying stuff with react.js)
- First decided to implement it without react.js and then add some elements of react.js to it later on

05/07/18:

- Learning more about React.js, did the entire tictactoe tutorial using react.js (see myminifactory.williamclot.com)
- Implemented some features of React.js on the UI: the categories are dynamically added to the interface via a json file


06/07/18:

- Continuing to learn React.js and implementing it in the UI that I designed

09/07/18:

- Implementing React.js in depth with the UI design
- Dividing the UI in React components and putting them in the subfolder `components/`

17/07/18:

- Having fun with Three.js, learning about skeleton and skinned meshes within the framework. 
- Coded a small test project and replaced meshes with the relative skeleton. Works well with heads, arms and hands for the moment. Will continue to work on this with torsos, legs and feet.
- Reading stuff on three.js interaction with React (it's unfortunatly not the easiest mix)

19/07/18:

- Rewritting the code of Three.js with some easy to use functions (`changeMesh()` and `placeMesh()`).
- Combining React.js with a global function within Three.js to change the mesh of the head.

23/07/18:

- Additional features on the reactjs UI: there is now a Left/Right menu for all the dual body parts (hands, arms, legs, foots). As is today this enables the user to change only one hand at a time and have differents meshes on the right and left hand).
- The react scheme used here is the following: the component `Category` as a state with the value `isLeft`. This value is then parsed to the sub Component `Selector` which updates this value using the well known trick. 
- I also tried to implement a color switcher to accentuate the color of the current mesh that's being updated. (Still some work to do on that...)
  
24/07/18:

- Designed a blender file that enables me to take renders of each element for a uniform look with the app.

25/07/18:

- Fixed some minor issues with the css grid layout for the selector panel.
- Added the implementation for the selection of arms with a recursive replacement of the childs of the element. Works well but the code is pretty discusting: will need to rethink it throw and simply as much as possible my implementation.
- Designed a few additionnal parts (robot hands and arms).

26/07/18:

- Rebuild entirely the threejs code with a recursive function that update automatically the children of a mesh. Works really well which is good, feels like this is the best implementation of the mesh replacement algorithm.
- Added the implementation for torsos.

Useful links:
- [https://www.youtube.com/watch?v=eEqB-eKcv7k](https://www.youtube.com/watch?v=eEqB-eKcv7k)
- [https://itnext.io/how-to-use-plain-three-js-in-your-react-apps-417a79d926e0](https://itnext.io/how-to-use-plain-three-js-in-your-react-apps-417a79d926e0)