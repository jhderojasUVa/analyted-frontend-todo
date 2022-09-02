#!/bin/bash
## Get version
VERSION=$1

## This script push on container registry
# Remember that you must be login in
if [ -z "$1" ]
then
    docker image tag ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1 ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1
    docker push ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1
else
    docker image tag ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1 ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:latest
    docker push ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:latest 
fi
