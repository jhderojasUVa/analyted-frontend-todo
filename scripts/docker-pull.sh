#!/bin/bash
## Get version
VERSION=$1

## This script pulls on container registry
# Remember that you must be login in
if [ -z "$1" ]
then
    docker pull ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1
else
    docker pull ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:latest 
fi
