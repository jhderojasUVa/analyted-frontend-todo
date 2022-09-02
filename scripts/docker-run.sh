#!/bin/bash
## Get version
VERSION=$1

# If you don't say the version it will always run the latest
if [ -z "$1" ]
then
    docker run --name analyted-frontend --network analyted_network -p 8090:8090 -d ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:$1
else
    docker run --name analyted-frontend --network analyted_network -p 8090:8090 -d ghcr.io/jhderojasuva/analyted-frontend-todo/analyted-frontend:latest
fi
