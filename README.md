# Expo Android Build Failure: Android SDK Version Mismatch

This repository demonstrates a common, yet often difficult-to-diagnose, issue encountered when building Android apps using Expo CLI. The problem stems from a discrepancy between the Android SDK version referenced within the Expo project configuration and the actual version installed on the developer's machine. The error messages generated are frequently cryptic, lacking a direct indication of the SDK version mismatch.

## Problem

The primary problem lies in the lack of clear error reporting.  The build process fails, but the error messages point towards unrelated build system components (Gradle, build tools, etc.) instead of the core SDK version conflict.

## Solution

The solution involves carefully verifying and synchronizing the Android SDK version across the project configuration and the local installation.  This often requires using the Android SDK Manager to ensure the correct version is installed and properly configured.