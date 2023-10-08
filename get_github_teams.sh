#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <organization_name>"
  exit 1
fi

ORG_NAME=$1

# Set your GitHub API token (replace with your own token)
GITHUB_TOKEN="YOUR_GITHUB_TOKEN"

# GitHub API URL for listing teams in an organization
API_URL="https://api.github.com/orgs/$ORG_NAME/teams"

# Make the API request using cURL and format the output as JSON
curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_URL" | jq .

