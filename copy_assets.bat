@echo off
set "BRAIN_DIR=C:\Users\Tommaso Bellini\.gemini\antigravity\brain\99211bbf-3cb0-4897-a54a-a40cedb97f43"
set "dest_DIR=c:\Users\Tommaso Bellini\Documents\OTHER PROJECTS\com-arredo\public"

echo Copying hero...
copy /Y "%BRAIN_DIR%\hero_furniture_1773173046179.png" "%dest_DIR%\hero.png"
if errorlevel 1 echo FAILED to copy hero

echo Copying about...
copy /Y "%BRAIN_DIR%\craftsmanship_hands_1773173063455.png" "%dest_DIR%\about.png"
if errorlevel 1 echo FAILED to copy about

echo Copying detail...
copy /Y "%BRAIN_DIR%\wood_detail_1773173080159.png" "%dest_DIR%\detail.png"
if errorlevel 1 echo FAILED to copy detail

dir "%dest_DIR%"
