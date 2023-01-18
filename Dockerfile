FROM node:16.19-bullseye-slim

# gitのインストール
RUN apt-get update -y \
    && apt-get install git -y

# javaのインストール
RUN apt-get install -y openjdk-11-jdk

# firebase-toolsのインストール
RUN yarn global add firebase-tools
