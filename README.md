# Corti AI's test assignment

The **Folder Browser** is an expandable tree that lets you browse the file systems and other locations accessible from your computer.

 ➡️ Check it out: [Corti AI Directory Browser Task web page](https://corti-directory-browser.netlify.app/)

# 📚Stack

**Main:**
- *React.js* - simple and convenient library for making user interfaces
- *Typescript* - strongly typed JavaScript to prevent errors
- *Webpack* - was chosen, in contrast to CRA, to get more freedom with tools setup and producing production build (in perspective).

**Production helper libraries:** 
- *axios*: syntactic sugar for the fetch API
- *clsx*: simple util to stringify scss class names
- *react-tostify*:  push notification library to save time for development and display a nice notification to users.

**Main development  helper libraries** - enforcing code style, format code, and catching errors:
- *prettier*
- *eslint*
- *husky*
-  *lint-staged*
- *stylelint*

## 🔙🔚 API request

API requests are mocked with [mocky.io](https://designer.mocky.io/).

## 👩🏼‍💻 App's state management

There is no additional libraries for state management such as *redux*, *react-redux*, *redux-saga*, *redux-thunk*. It seemed unreasonable to add these libraries to dependencies due to the small size of the application and little amount of requests. React methods and hooks were chosen to manage the state of the app - Context API. Also, the app uses reducer, actions and actions' types.

## ⚖️ Design choice

The inspiration for the design comes from the Google Disk.  
The **left panel** with a side bar is presented with already opened root folder. 

Correspondingly, the **dashboard** displays the active folder children. 

Some hover **micro-animations** are implemented to add some interactivity to the web page.  To-do's for the future: 1) accordion animation (when the list of children files becomes visible), 2) mounting/un-mounting  animations on the dashboard when user changes an active directory.

**Error handling** - for every server request there is error catcher to display a pleasant notification to user to notify that something went wrong. To do's for the future: the global `ErrorBoundry` component was not added.

**Loader**. The loader component is displayed on the SideBar and Dashboard when a request is made to the server.

Todo's for the future: adaptive/responsive design.



|Interactive elements                          |Non-interactive elements                         |
|-------------------------------|-----------------------------|
|List items inside the sidebar          |Files' items (not folders). The reason for including them is assumption that not only folders will be presented within a file system.            |
|Folders on the dashboard           |Header           |
|Breadcrumbs on the dashboard||

## 🛠 The problem

File system has a tree data structure. The most challenging task was to recursively  render `ListItem` components of the side bar on every user click. It was assumed that the tree structure is not given from the server altogether - only the root with its children is loaded when the page is loaded. The other pieces of data are requested from the server upon a user request. Such approach was chosen, in contrast to requesting the whole tree from the server, because usually user already knows what folder he/she needs to access and there is no reason to load all data. Loading a big tree could bring complications for the performance of the application.

The other challenge was to track active folder and compose breadcrumbs allowing user to navigate between folders. Different tree helper functions were used to accomplish this task.
