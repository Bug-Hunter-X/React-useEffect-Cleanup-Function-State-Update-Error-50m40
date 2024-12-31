# React useEffect Cleanup Function State Update Error

This repository demonstrates a common error in React when using the `useEffect` hook.  Specifically, it showcases the issue of attempting to update component state within the cleanup function of `useEffect`. This action can lead to unexpected behavior and potential errors.  The `bug.js` file contains the problematic code, and `bugSolution.js` provides the corrected implementation.

## Problem

The problem lies in updating the component's state (`count`) inside the cleanup function of the `useEffect` hook.  React prevents state updates during unmounting to avoid race conditions and unexpected behavior.  Attempting to do so throws an error and might lead to unexpected behavior.

## Solution

The solution involves removing the state update from the cleanup function.  The cleanup function should only perform necessary cleanup tasks, such as canceling network requests or detaching event listeners, not affecting the component state.