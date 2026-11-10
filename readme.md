1-
 docker build -t api-gateway .

##  For docker volume 
##  docker valume create api-gateway-node-modules

## docker  run -it --init -p 3001:3001 -v"$(pwd)":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway

2-remove container
## docker rm flight-service 
##  docker rm -f flight-service

3- show all the running container 
## docker ps

4-create volume 
## docker volume create flight-service-node-modules  

5- create network 
##  docker network create microservice-network  

6- show all network 
## docker network ls 

7- delete all img and container
## docker system prune -a 

8- final when you connect with network 
## docker run -it --init --name booking-service --network microservice-network -p 4000:4000 -v "$(PWD):/developer/nodejs/flight-booking-service" -v booking-service-node-modules://developer/nodejs/flight-booking-service/node_modules booking-service
