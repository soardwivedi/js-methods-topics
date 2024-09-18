version: '3.2'
services:
  kogo-mongo:
      image: 'mongo:latest'
      ports:
        - 27017:27017
      expose:
        - 27017

  kogo-cache:
    image: 'redis:latest'
    restart: always
    expose:
      - 6379

  zero:
    image: dgraph/dgraph:latest
    volumes:
      - /tmp/data:/dgraph
    ports:
      - 5080:5080
      - 6080:6080
    restart: on-failure
    command: dgraph zero --my=zero:5080
  alpha:
    image: dgraph/dgraph:latest
    volumes:
      - /tmp/data:/dgraph
    ports:
      - 8080:8080
      - 9080:9080
    restart: on-failure
    command: dgraph alpha --my=alpha:7080 --zero=zero:5080 --whitelist 0.0.0.0/0
  ratel:
    image: dgraph/dgraph:latest
    ports:
      - 8000:8000
    command: dgraph-ratel

  kogo-feed:
    build:
      context: ./services/feed
      dockerfile: /Users/kunal/Documents/work/kogo-services/services/feed/Dockerfile.dev
    environment:
      - HOST_PORT=4020
    restart: always
    volumes:
      - /Users/kunal/Documents/work/kogo-services/services/feed:/home/app
    expose:
      - 4020

  kogo-device:
    build:
      context: ./services/device
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - HOST_PORT=4000
      - CONTENT_SERVICE_URL=http://kogo-content:5000
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 4000

  kogo-analytics:
    build:
      context: ./services/analytics
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/commerce
      - HOST_PORT=4005
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 4005

  kogo-chat:
    build:
      context: ./services/chat
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - HOST_PORT=5000
      - CONTENT_SERVICE_URL=http://kogo-content:5000
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    ports:
      - 5000:5000
    expose:
      - 5000

  # kogo-dashboard:
  #   build:
  #     context: ./services/dashboard
  #   environment:
  #     - APPLICATION_URI=http://kogo-gateway:3000/graphql
  #   restart: always
  #   ports:
  #     - 8000:8000

  kogo-user:
    build:
      context: ./services/user
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - HOST_PORT=4001
      # - ELASTIC_SEARCH_HOST=192.168.3.51
      # - ELASTIC_SEARCH_AUTH=$ELASTIC_PASSWORD
      - CONTENT_SERVICE_URL=http://kogo-content:5000
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 4001

  kogo-trip:
    build:
      context: ./services/trip
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - HOST_PORT=4002
      - CACHE_SERVICE_HOST=kogo-cache
      # - ELASTIC_SEARCH_HOST=192.168.3.51
      # - ELASTIC_SEARCH_AUTH=$ELASTIC_PASSWORD
      - CONTENT_SERVICE_URL=http://kogo-content:5000
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 4002

  kogo-social:
    build:
      context: ./services/social
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - HOST_PORT=4006
      - CONTENT_SERVICE_URL=http://kogo-content:5000
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 4006

  kogo-search:
    build:
      context: ./services/search
    environment:
      - HOST_PORT=4004
    restart: always
    expose:
      - 4004
  
  # kogo-worker:
  #   build:
  #     context: ./services/worker
  #   environment:
  #     - CONTENT_SERVICE_URL=http://kogo-content:5000
  #     - MONGO_URL=mongodb://kogo-mongo:27017/kogo
  #   restart: always

  # kogo-worker-offline:
  #   build:
  #     context: ./services/offline
  #   environment:
  #     - CONTENT_SERVICE_URL=http://kogo-content:5000
  #     - MONGO_URL=mongodb://kogo-mongo:27017/kogo
  #   restart: always
  
  kogo-content:
    build:
      context: ./services/content
    restart: always
    environment:
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
    expose:
      - 5000
    links:
      - kogo-trip
  
  kogo-gateway:
    build:
      context: ./services/gateway
    ports:
      - 3000:3000
    depends_on:
      - kogo-user
      - kogo-device
      - kogo-trip
      - kogo-search
    links:
      - kogo-user
      - kogo-device
      - kogo-trip
      - kogo-search
    environment:
      - HOST_PORT=3000
      - MONGO_URL=mongodb://kogo-mongo:27017/kogo
      - DEVICE_SERVICE_URL=http://kogo-device:4000/graphql
      - USER_SERVICE_URL=http://kogo-user:4001/graphql
      - TRIP_SERVICE_URL=http://kogo-trip:4002/graphql
      - SEARCH_SERVICE_URL=http://kogo-search:4004/graphql
      - SOCIAL_SERVICE_URL=http://kogo-social:4006/graphql
      - ANALYTICS_SERVICE_URL=http://kogo-analytics:4005/graphql
    restart: always
    volumes:
      - /PATH/TO/PROJECT/services/gateway:/home/app
    expose:
      - 3000












      agentTooldeploymentList(first: Int, offset: Int, is_custom_deployment: Int): [AgentToolDeploymentData] 162
      deploymentDetail
      deploymentCopy
              step1 - copy of selected deployment
              step 2 - copy of all agents of selected deployment
              