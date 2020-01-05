#!/bin/sh
gnome-terminal -e "bash -c \"emulator -avd Pixel_2_API_29 -gpu swiftshader_indirect; exec bash\""
sleep 20
gnome-terminal -e "bash -c \"react-native start --reset-cache; exec bash\""
sleep 20
react-native run-android
