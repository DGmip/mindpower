#! /bin/bash
addr="http://www.realmindpowersecrets.com/images/"
cat images.list|
while read line;do
  wget "$addr""$line"
done
