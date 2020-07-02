import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class GoogleAuthService implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        debugger

        // firebase.auth().onAuthStateChanged(function (user) {
        //     debugger

        //     var userrrr = firebase.auth().currentUser;
        //     if (user) {
        //         // User is signed in.
        //         var displayName = user.displayName;
        //         var email = user.email;
        //         var emailVerified = user.emailVerified;
        //         var photoURL = user.photoURL;
        //         var isAnonymous = user.isAnonymous;
        //         var uid = user.uid;
        //         var providerData = user.providerData;
        //         // ...
        //     } else {
        //         // User is signed out.
        //         // ...
        //     }
        // });

    }

    // login() {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     debugger


    //     const that = this;
    //     firebase.auth().signInWithPopup(provider).then(function (result) {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         debugger
    //         // var token = result.credential.accessToken;

    //         var token = result.credential;

    //         // The signed-in user info.
    //         var user = result.user;

    //         //localStorage.setItem('userInfo', JSON.stringify(result.user));

    //         that.router.navigate(['user']);
    //         // ...
    //     }).catch(function (error) {
    //         debugger
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;

    //         that.router.navigate(['/login']);
    //         // ...
    //     });
    // }


    // isAuthenticated(): boolean {
    //     debugger
    //     var user = firebase.auth().currentUser;

    //     return user ? true : false;
    // }


    signOut() {
        debugger;

        // firebase.auth().signOut().then(function () {
        //     // Sign-out successful.
        // }).catch(function (error) {
        //     // An error happened.
        // });

    }
}
