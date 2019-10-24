# reactjs-note-challenge
A simple note app client that create notes with title and content

## Introduction

In this challenge you are going to create a simple client app that interacts with the provided following api (https://challenge.ronash.co/react) and it should be implemented like the following sketch image:

[sketch-image](https://github.com/ronashco/reactjs-note-challenge/raw/master/note_app.png)

## More description

1. Note app has a create component that has a title and content textfield
2. Note app renders list of created (will create) notes according to the sketch image
3. Notes also has a button to be deleted

**Note:** Feel free to use any ui component (although we prefer material-ui) and would be nice if the list of notes has some pagination or on scroll loading that should be handled in the client, api does not have pagination (optional)

## Expectations

1. We expect a clean, readable and maintainable code with meaningful comments.
2. Although this is a small test project, **complete it with the mindset of a big project**. (then **structres** and naming of the files are very important)
3. We also expect that the app uses third party libraries like redux, reudx thunk/saga, axios and/or any other good libraries that you may choose
4. It is not mandatory but would be very appriciated if the app comes with unit tests (optional)

## Api endpoints

1. **POST** /api/v1/auth/token/ => create a user or if user already created return jwt token (payload: { email: 'someValidEmail', password: 'someValidPassword' })
2. **POST** /api/v1/notes/ => create new post (payload: { title: 'some title', content: 'some content' })
3. **GET** /api/v1/notes => get a list of create notes
4. **DELETE** /api/v1/notes/_id => delete a note with id (_id)

**Note:** use jwt in **Authorization** header like: jwt your_jwt_token

## Task

1. Either clone or private fork this repository (if you don't know how to do that, Google is your friend)
2. Develop the given challenge
3. Commit and Push your code to your new repository
3. Send us an email and notify us of completion! We'll take care about the rest and get back to you.

**Please do not start development before getting a confirmation from us.**

Happy Coding! ✊🏻
